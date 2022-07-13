import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResturantsFinder from "../apis/ResturantsFinder";
import { useNavigate } from "react-router-dom";

const UpdateResturant = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await ResturantsFinder.get(`/${id}`);
      setName(response.data.rest_name);
      setLocation(response.data.rest_location);
      setPriceRange(response.data.price_range);
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const response = await ResturantsFinder.patch(`/${id}`, {
      id: Number(id),
      name,
      location,
      price_range: priceRange,
    });
    navigate("/");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            id="price_range"
            type="number"
            className="form-control"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        {(priceRange > 5 || priceRange < 0) && (
          <div class="alert alert-warning" role="alert">
            Price Range Couldn't be More Than 5 Or Less Than Zero
          </div>
        )}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateResturant;
