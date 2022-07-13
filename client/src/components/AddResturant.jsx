import React, { useContext, useState } from "react";
import ResturantsFinder from "../apis/ResturantsFinder";
import { ResturantsContext } from "../context/ResturantsContext";

const AddResturant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const { AddResturant } = useContext(ResturantsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ResturantsFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response);
      AddResturant(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddResturant;
