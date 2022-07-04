import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestDetailPage from "./routes/RestDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resturants/:id" element={<RestDetailPage />} />
          <Route exact path="/resturants/:id/update" element={<UpdatePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
