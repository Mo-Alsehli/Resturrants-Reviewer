import React, { useState, createContext } from "react";

export const ResturantsContext = createContext();

export const ResturantsContextProvider = (props) => {
  const [resturants, setResturants] = useState([]);

  const AddResturant = (resturant) => {
    setResturants([...resturants, resturant]);
  };
  return (
    <ResturantsContext.Provider
      value={{ resturants, setResturants, AddResturant }}
    >
      {props.children}
    </ResturantsContext.Provider>
  );
};
