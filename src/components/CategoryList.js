import React from "react";
import ItemList from "./ItemList";

const CategoryList = ({ categoryTitle, itemCards }) => {
  
  return (
    <>
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {categoryTitle}

          {itemCards?.length > 0 && `(${itemCards.length})`}
        </span>
        {itemCards?.length > 0 && <span>⬇️</span>}
      </div>
      {itemCards?.length > 0 && <ItemList items={itemCards} />}
    </>
  );
};

export default CategoryList;
