import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData"; //names exports are always gonna import like this
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

//It's not recommended to use index as key but uou can use it, if necessary
//not using keys (not accceptable) <<<< index <<<<<< unique id(best)
const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const listRestaurants = useRestaurantList();
  const onlineStatus = useOnlineStatus();
  const {loggedInUser, setUserName} = useContext(UserContext)

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurant(listRestaurants);
  }, [listRestaurants]);

  const handleClick = (id) => {
    navigate(`/restaurant/${id}`);
  };
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );
  }
  return listRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search mx-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listRestaurants.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* <div className="flex px-4 gap-2 items-center">
          <label>UserName: </label>
          <input className="border border-black p-2 h-8" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
          <button className="p-2 bg-gray-200 rounded-md" >Submit</button>
        </div> */}
      </div>
      <div className="flex flex-wrap">
        {Array.isArray(filteredRestaurant) &&
          filteredRestaurant &&
          filteredRestaurant.length > 0 &&
          filteredRestaurant.map((restaurant) =>
            //If restaurant is promoted then use new component or else use normal
            restaurant?.info?.promoted ? (
              <PromotedRestaurantCard
                key={restaurant?.info?.id}
                resData={restaurant}
                handleClick={() => handleClick(restaurant?.info?.id)}
              />
            ) : (
              <RestaurantCard
                key={restaurant?.info?.id}
                resData={restaurant}
                handleClick={() => handleClick(restaurant?.info?.id)}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Body;
