import React, { useEffect, useContext } from "react";
import ResturantsFinder from "../apis/ResturantsFinder";
import { ResturantsContext } from "../context/ResturantsContext";
import { useNavigate } from "react-router-dom";
import StarRate from "./StarRate";

const ResturantsList = () => {
  // eslint-disable-next-line
  const { resturants, setResturants } = useContext(ResturantsContext);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ResturantsFinder.get("/");
        console.log(response.data);
        setResturants(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await ResturantsFinder.delete(`/${id}`);
      setResturants(resturants.filter((rest) => rest.id !== id));
    } catch (error) {
      throw new Error(`Handle Delete Error: ${error}`);
    }
  };
  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`resturants/${id}/update`);
  };

  const handleRestSelect = (id) => {
    navigate(`resturants/${id}`);
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Reviews</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {resturants.map((rest) => {
            return (
              <tr key={rest.id} onClick={() => handleRestSelect(rest.id)}>
                <td>{rest.rest_name}</td>
                <td>{rest.rest_location}</td>
                <td>{"$".repeat(rest.price_range)}</td>
                <td>
                  {rest.count ? (
                    <>
                      <StarRate rating={rest.average_rating} />
                      <span className="text-warning ml-1">
                        {`(${rest.count})`}
                      </span>{" "}
                    </>
                  ) : (
                    <span className="text-warning">0 reviews</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => handleUpdate(e, rest.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(e, rest.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResturantsList;
