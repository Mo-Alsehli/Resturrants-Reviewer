import React, { useContext } from "react";
import { ResturantsContext } from "../context/ResturantsContext";
import StarRate from "./StarRate";

const Reviews = () => {
  const { reviews } = useContext(ResturantsContext);
  return (
    <div className="row row-cols-3 mb-2 mt-3">
      {reviews.map((review) => {
        return (
          <div
            className="card text-white bg-primary mb-3 mr-4"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRate rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
