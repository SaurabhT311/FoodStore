import React, { useState } from "react";
import ItemList from "./ItemList";

const CategoryList = ({ categoryTitle, itemCards }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems)
    }
  
  return (
    <>
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {categoryTitle}
          {itemCards?.length > 0 && `(${itemCards.length})`}
        </span>
        {itemCards?.length > 0 && <span>⬇️</span>}
      </div>
      {itemCards?.length > 0 && showItems && <ItemList items={itemCards} />}
    </>
  );
};

export default CategoryList;
