import react from "react";
import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
    useEffect(() => {
      console.log("useeffect is called for each component render")
    },[btnName])
  return (
    <div className="header">
      <div className="logo-Container">
        <img className="logo" src={LOGO_URL} alt="FoodApp" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
