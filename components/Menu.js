import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Menu = (props) => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    callapi();
    // console.log(menu);
    console.log("use effect printed")
  }, []);
  async function callapi() {
    try {
      console.log("hello");
      const restaurantInfo = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1685786&lng=79.9338798&restaurantId=" +
          id +
          "&submitAction=ENTER"
      );
      const dataJson = await restaurantInfo.json();

      // console.log(dataJson, "is printed");
      let size = dataJson.data.cards.length - 1;

      // Check if the necessary properties exist before accessing them
      if (
        dataJson &&
        dataJson.data &&
        dataJson.data.cards &&
        dataJson.data.cards[size] &&
        dataJson.data.cards[size].groupedCard &&
        dataJson.data.cards[size].groupedCard.cardGroupMap &&
        dataJson.data.cards[size].groupedCard.cardGroupMap.REGULAR &&
        dataJson.data.cards[size].groupedCard.cardGroupMap.REGULAR.cards
      ) {
        setMenu(
          dataJson.data.cards[size].groupedCard.cardGroupMap.REGULAR.cards
        );
      } else {
        // Handle the case when the expected properties are not available
        console.log("Invalid API response structure");
      }
    } catch (error) {
      console.log("Error fetching menu:", error);
    }
  }

  if (menu === null) {
    return <h1>loading....</h1>;
  }
  return (
    <div className="menu-list">
      <h3>Menu</h3>
      {menu.map((list) => {
        if (
          list !== undefined &&
          list.card !== undefined &&
          list.card.card !== undefined &&
          list.card.card.itemCards !== undefined
        ) {
          return list.card.card.itemCards.map((item, index) => {
            if (
              item.card !== undefined &&
              item.card.info !== undefined &&
              item.card.info.name !== undefined
            ) {
              // console.log(item.card.info.name);
              return <div className="menu-items">
                  <h5 key={index}>{item.card.info.name}</h5>
                  <button className="add">Add</button>

              </div>
              
              
            }
            return null; // If any of the necessary properties are undefined, return null or handle the error as needed
          });
        }
        return null; // If any of the necessary properties are undefined, return null or handle the error as needed
      })}
    </div>
  );
};

export default Menu;
