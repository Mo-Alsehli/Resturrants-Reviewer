import React, { useState, createContext } from "react";

export const ResturantsContext = createContext();

export const ResturantsContextProvider = (props) => {
  const [resturants, setResturants] = useState([]);
  const [selectedRest, setSelectedRest] = useState(null);
  const [reviews, setReviews] = useState([]);

  const AddResturant = (resturant) => {
    setResturants([...resturants, resturant]);
  };

  const AddReview = (review) => {
    setReviews([...reviews, review]);
  };
  return (
    <ResturantsContext.Provider
      value={{
        resturants,
        setResturants,
        AddResturant,
        selectedRest,
        setSelectedRest,
        reviews,
        setReviews,
        AddReview,
      }}
    >
      {props.children}
    </ResturantsContext.Provider>
  );
};
