import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const RestaurantMenu = () => {
  //   const restaurant = useParams();
  const { id } = useParams();
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  const [restuarant, setRestaurant] = useState({});
  async function getRestaurantInfo() {
    const restaurantInfo = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1685786&lng=79.9338798&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const dataJson = await restaurantInfo.json();
    console.log(dataJson?.data.cards[3]);
    setRestaurant(dataJson?.data?.cards[0]?.card?.card?.info);
  }
  return (
    <div className="restaurant-info">
      <h1>{restuarant.name}</h1>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restuarant.cloudinaryImageId
        }
      ></img>
      <h4 className="area">{restuarant.areaName}</h4>
      <h4 className="city">{restuarant.city}</h4>
      <h4 className="cuisines">{restuarant?.cuisines?.join(",")}</h4>
      <h4 className="rating">{restuarant.avgRating}</h4>
      <h4 className="cost">{restuarant.costForTwoMessage}</h4>
    </div>
  );
};
export default RestaurantMenu;
