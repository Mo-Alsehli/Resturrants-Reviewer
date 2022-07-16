import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResturantsFinder from "../apis/ResturantsFinder";
import { ResturantsContext } from "../context/ResturantsContext";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const { AddReview, setReviews } = useContext(ResturantsContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await ResturantsFinder.get(`/${id}/reviews`);
      setReviews(response.data);
    };
    fetchData();
  }, [id, setReviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ResturantsFinder.post(`/${id}/addReview`, {
        name,
        review,
        rating,
      });
      AddReview(response.data);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="from group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
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

export default AddReview;
