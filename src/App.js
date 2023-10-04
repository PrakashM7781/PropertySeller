import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.js";
import Details from "./components/details.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cards/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
