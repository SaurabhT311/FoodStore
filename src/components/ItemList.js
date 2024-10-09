import React from "react";
import { ASSETS_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items555", items);
  return (
    <div>
      {items.map((item, index) => (
        <div className="my-2 flex items-center">
          <div className="p-2 w-full" key={item?.card?.info?.id}>
            <div className="flex flex-col text-left">
              <span className="font-bold pb-2">{item?.card?.info?.name}</span>
              <span className="font-bold">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-left flex flex-wrap w-10/12">
              {item?.card?.info?.description}
            </p>
            <p>
              {index !== items.length - 1 && (
                <div className="border-b-2 border-slate-300 py-2 relative top-2"></div>
              )}
            </p>
          </div>
          <div>
            <img
              className="w-[140px] h-auto rounded-md"
              alt="res-logo"
              src={ASSETS_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
