import React from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({ categoryData }) => {
  return (
    <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-4">
        {/* For Item Categoryy */}
      <CategoryList
        categoryTitle={categoryData?.title}
        itemCards={categoryData?.itemCards}
      />

      {/* For Nested Item Categories */}
      {categoryData?.categories?.map((nestedCategory, index) => (
        <div key={index} className="py-2 my-2">
          <CategoryList
            categoryTitle={nestedCategory?.title}
            itemCards={nestedCategory?.itemCards}
          />
          {/* Show divider except after the last nested category */}
          {index !== categoryData.categories.length - 1 && (
            <div className="border-b-2 border-slate-300 py-2 relative top-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategory;
