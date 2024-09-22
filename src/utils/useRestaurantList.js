import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    console.log("json", jsonData);
    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return listOfRestaurants;
};

export default useRestaurantList;
