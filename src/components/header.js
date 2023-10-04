import React, { useState } from "react";
import "../index.css";
import Properties from "./propertyapi.js";
import Card from "./card1.js";

const Header = () => {
  let [menuData, setMenuData] = useState(Properties);

  const filterItem = (location) => {
    if (location === "All") {
      setMenuData(Properties);
    } else {
      const updatedList = Properties.filter((currElem) => {
        return currElem.location === location;
      });
      setMenuData(updatedList);
    }
  };

  return (
    <>
      <div className="head">
        <h1>Featured Listed Property</h1>
        <p>
          Real Estate can be bought, sold, leased or rented and can be valuable
        </p>
        <p>investment opportunity. The value of real estate can be...</p>
      </div>
      <div className="navList">
        <ul>
          <li onClick={() => filterItem("New York")}>New York</li>
          <li onClick={() => filterItem("Mumbai")}>Mumbai</li>
          <li onClick={() => filterItem("Paris")}>Paris</li>
          <li onClick={() => filterItem("All")}>All</li>
        </ul>
      </div>
      <Card menudata={menuData} initialDisplayCount={6} incrementCount={3} />
    </>
  );
};

export default Header;
