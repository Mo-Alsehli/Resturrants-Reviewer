import React from "react";
import { useParams } from "react-router-dom";

const UpdateResturant = (props) => {
  let test = useParams();
  console.log(test);
  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input id="price_range" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateResturant;
