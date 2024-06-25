import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"; //names exports are always gonna import like this
import { useEffect, useState } from "react";

//It's not recommended to use index as key but uou can use it, if necessary
//not using keys (not accceptable) <<<< index <<<<<< unique id(best)
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])

  useEffect(()=> {
    fetchSwiggyData();
  },[])

  const fetchSwiggyData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    console.log("json",jsonData);
    setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.3);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
