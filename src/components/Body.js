import react, { useEffect } from "react";
import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import ListOfRestaurant from "../utils/mockdata";
import Shimmer from "./shimmer";
export const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterest,setFilterest]=useState([])

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.022120301504632&lng=80.1750718639601&page_type=DESKTOP_WEB_LISTING"
    );
    const data2 = await data.json();
    setList(
      data2?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterest(
      data2?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (list.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-box"
          />
          <button
            onClick={() => {
              searchfilter = list.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (searchfilter.length !== 0) {
                setFilterest(searchfilter);
                setSearchText("");
              }
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = list.filter((item) => item?.info?.avgRating > 4.5);
            setList(filteredList);
          }}
        >
          Top Rated resturant
        </button>
      </div>
      <div className="res-container">
        {filterest.map((resDetails) => (
          // console.log(resDetails.info)
          <RestaurantCard key={resDetails?.info?.id} resData={resDetails} />
        ))}
      </div>
    </div>
  );
};
export default Body;
