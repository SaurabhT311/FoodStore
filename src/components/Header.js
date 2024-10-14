import { LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
    return (
      <div className="flex justify-between bg-pink-50 shadow-lg">
        <div>
          <img
            className="w-56"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4" style={{cursor: "pointer"}}>
            <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-4" onClick={() => navigate("/")}>Home</li>
            <li className="px-4" onClick={() => navigate("/about")}>About Us</li>
            <li className="px-4" onClick={() => navigate("/contact-us")}>Contact Us</li>
            <li className="px-4" onClick={() => navigate("/grocery")}>Grocery</li>
            <li className="px-4" onClick={() => navigate("/cart")}>Cart</li>
            <button className="login">Login</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;