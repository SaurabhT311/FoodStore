import { LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selector
  const cartItems = useSelector((state) => state.cart.items); //We use the name of Slice that we gave.
  console.log("cart", cartItems);
  return (
    <div className="flex px-4 justify-between bg-pink-50 shadow-lg">
      <div>
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex py-4" style={{ cursor: "pointer" }}>
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="px-4" onClick={() => navigate("/about")}>
            About Us
          </li>
          <li className="px-4" onClick={() => navigate("/contact-us")}>
            Contact Us
          </li>
          <li className="px-4" onClick={() => navigate("/grocery")}>
            Grocery
          </li>
          <li className="px-4" onClick={() => navigate("/cart")}>
            Cart&nbsp;
            {cartItems && Array.isArray(cartItems) && cartItems?.length > 0 && (
              <>({cartItems?.length})</>
            )}
          </li>
          <button className="login">Login</button>
          <li className="px-4 font-bold">({loggedInUser})</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
