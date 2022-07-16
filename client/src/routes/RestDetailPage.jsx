import React, { useContext, useEffect } from "react";
import { ResturantsContext } from "../context/ResturantsContext";
import { useParams } from "react-router-dom";
import ResturantsFinder from "../apis/ResturantsFinder";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import StarRate from "../components/StarRate";

const RestDetailPage = () => {
  const { selectedRest, setSelectedRest, reviews } =
    useContext(ResturantsContext);
  const { id } = useParams();
  let sum = 0;
  reviews.forEach((review) => {
    sum += review.rate;
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await ResturantsFinder.get(`/${id}`);
      setSelectedRest(response.data);
    };
    fetchData();
  }, [id, setSelectedRest]);

  return (
    <div>
      {selectedRest && (
        <>
          <h1 className="text-center display-1">{selectedRest.rest_name}</h1>
          <div className="text-center display-4">
            <StarRate rating={sum / reviews.length} />
            <span className="text-center display-5 text-warning">
              {reviews.length ? `(${reviews.length})` : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestDetailPage;
