import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./components/Shimmer";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

const Body = () => {
  const [list, setList] = useState([]);
  const [filterdList, setFilteredList] = useState([]);
  async function callapi() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const dataJson = await response.json();
    setList(dataJson.data.cards);
    setFilteredList(dataJson.data.cards);
  }
  useEffect(() => {
    console.log("useefeect");
    callapi();
  }, []);

  if (list.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  } else if (filterdList.length === 0) {
    return <NotFound />;
  } else if (filterdList.length > 0) {
    return (
      <div>
        <Navbar/>
        <div className="Search">
          <input
            type="search"
            className="search-box"
            id="search-id"
            name="search-box"
            placeholder="Search for Restro Here!"
          ></input>
          <button
            type="submit"
            onClick={() => {
              const box = document.getElementById("search-id");
              const filtered = list.filter((x) =>
                x.data.data.name.toLowerCase().includes(box.value.toLowerCase())
              );
              setFilteredList(filtered);
              console.log(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="card-container">
          {filterdList.map((restaurant) => (
            <Card key={restaurant.data.data.id} restro={restaurant} />
          ))}
        </div>
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Body />);
