import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

const RestaurantMenu = () => {
  //   const restaurant = useParams();
  const { id } = useParams();

  const [restuarant, setRestaurant] = useState({});
  useEffect(() => {
    // menuapi();
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const restaurantInfo = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1685786&lng=79.9338798&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const dataJson = await restaurantInfo.json();
    // console.log(dataJson?.data.cards[3]);
    setRestaurant(dataJson?.data?.cards[0]?.card?.card?.info);
  }

  // async function menuapi() {
  //   const menu = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
  //       id +
  //       "&submitAction=ENTER"
  //   );
  //   const menuJson = await menu.json();
  // }

  return (
    <div className="restaurant-info">
      <Navbar />
      <h1>{restuarant.name}</h1>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restuarant.cloudinaryImageId
        }
      ></img>
      <div className="total-info-container">
        <div className="info-container">
          <h4 className="area">Area : {restuarant.areaName}</h4>
          <h4 className="city">City : {restuarant.city}</h4>
          <h4 className="cuisines">
            Cuisines : {restuarant?.cuisines?.join(",")}
          </h4>
          <h4 className="rating">Rating: {restuarant.avgRating}</h4>
          <h4 className="cost">Cost : {restuarant.costForTwoMessage}</h4>
        </div>
        <Menu id={id} />
      </div>
    </div>
  );
};
export default RestaurantMenu;
