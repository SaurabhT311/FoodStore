import React, { useState } from "react";
import ItemList from "./ItemList";

const CategoryList = ({ categoryTitle, itemCards, showItems, setShowItemIndex }) => {
    
    const handleClick = () => {
        setShowItemIndex();
    }
  
  return (
    <>
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {categoryTitle}
          {itemCards?.length > 0 && `(${itemCards.length})`}
        </span>
        {itemCards?.length > 0 && <span>{showItems ? "⬆️" : "⬇️"}</span>}
      </div>
      {itemCards?.length > 0 && showItems && <ItemList items={itemCards} />}
    </>
  );
};

export default CategoryList;
