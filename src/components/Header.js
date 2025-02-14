import react from 'react'
import { useState } from 'react'
import { LOGO_URL } from '../utils/constants'

const Header=()=>{
  const[btnName,setBtnName]=useState("Login")
    return(
      <div className="header">
        <div className="logo-Container">
          <img  className="logo"src={LOGO_URL} alt="FoodApp"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className='login-btn' onClick={()=>{setBtnName("Logout")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }
export default Header