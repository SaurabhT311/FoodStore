import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <button
        onClick={handleClearCart}
        className="w-[90px] p-2 m-2 bg-black text-white rounded-lg flex items-center justify-center"
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto p-2">
        {cartItems?.length === 0 && (
          <span>Cart is empty. Add item(s) to cart.</span>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
