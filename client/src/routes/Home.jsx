import React from "react";
import AddResturant from "../components/AddResturant";
import Header from "../components/Header";
import ResturantsList from "../components/ResturantsList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddResturant />
      <ResturantsList />
    </div>
  );
};

export default Home;
