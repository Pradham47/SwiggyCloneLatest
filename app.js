import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./components/Shimmer";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { Link } from "react-router-dom";
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
        <Navbar />
        <Search useList={list} useSetFilteredList={setFilteredList} />
        <div className="card-container">
          {filterdList.map((restaurant) =>
            restaurant?.data?.data?.id != null ? (
              <Link to={"/restaurant/"+restaurant?.data?.data?.id} style={{textDecoration:"none",color:"black"}}> <Card key={restaurant?.data?.data?.id} restro={restaurant} /></Link>
            ) : null
          )}
        </div>
      </div>
    );
  }
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "restaurant/:id",
    element: <RestaurantMenu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
