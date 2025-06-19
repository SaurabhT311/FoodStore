import React from "react";
import { ASSETS_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();


  const handleClickAdd = (item) => {
    console.log("item", item);
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item, index) => (
        <>
          <div data-testid="food-item"
            className={`p-2 text-left flex justify-between ${
              index !== items.length - 1 ? "border-b-2 border-slate-300" : ""
            }`}
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <div className="py-2 flex flex-col">
                <span className="font-bold pb-2">{item?.card?.info?.name}</span>
                <span className="font-bold">
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-left py-5 w-11/12">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 py-4 flex items-end justify-center">
              <img
                className="w-[156px] h-[144px] rounded-md"
                alt="res-logo"
                src={ASSETS_URL + item?.card?.info?.imageId}
              />
              <div className="absolute ">
                <button onClick={() => handleClickAdd(item)} className="p-2 w-24 flex bg-white mx-16 rounded-lg shadow-lg font-bold items-center justify-center relative top-3 text-green-600">
                  ADD
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ItemList;
