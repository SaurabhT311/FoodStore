import { LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul style={{cursor: "pointer"}}>
            <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li onClick={() => navigate("/contact-us")}>Contact Us</li>
            <li onClick={() => navigate("/grocery")}>Grocery</li>
            <li onClick={() => navigate("/cart")}>Cart</li>
            <button className="login">Login</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;