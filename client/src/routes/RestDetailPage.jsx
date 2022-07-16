import React, { useContext, useEffect } from "react";
import { ResturantsContext } from "../context/ResturantsContext";
import { useParams } from "react-router-dom";
import ResturantsFinder from "../apis/ResturantsFinder";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestDetailPage = () => {
  const { selectedRest, setSelectedRest } = useContext(ResturantsContext);
  const { id } = useParams();

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
