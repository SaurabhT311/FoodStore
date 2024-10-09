import { ASSETS_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData, handleClick } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwoString,
    avgRating,
    sla,
  } = resData?.info;

  // console.log("resData", resData?.info);
  return (
    <div
      className="m-4 p-4 w-[270px] rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="rounded-md"
        alt="res-logo"
        src={ASSETS_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwoString}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

//Higher Order Components using functional component
// input => RestaurantCard => RestaurantCardPromoted (output)

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    //returning a new component
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
