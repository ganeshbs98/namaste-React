import React from "react";
import { RES_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props?.resData.info;

  return (
    <div className="res-card">
        <div className="img-container">
        <img
        className="res-image"
        alt="res-logo"
        src={RES_URL + cloudinaryImageId}
      />
        </div>
     
      <div className="item-rescard">
        <h3>{name}</h3>
        <h4>{cuisines.join(",  ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
