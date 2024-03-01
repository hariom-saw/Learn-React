import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { LIVE_DATA_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfResturants, setListOfResturants] = useState(null);
    const [filterResturants, setFilterResturants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const liveData = await fetch(LIVE_DATA_URL);
        const jsonData = await liveData.json();
        const liveRestaurantsList = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfResturants(liveRestaurantsList);
        setFilterResturants(liveRestaurantsList);
    };

    if (false == onlineStatus) return <h2>You are offline, Please check aur internet Connection</h2>;

    return (null == listOfResturants) ? (<Shimmer />) : (
        <div className="app-body">
            <div className="app-search">
                <div>
                    <input type="text" className="gsearch" id="gsearch" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button className="gsearch-btn" onClick={() => {
                        const searchFilter = listOfResturants.filter((res) => res?.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterResturants(searchFilter);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfResturants.filter((res) => res?.info?.avgRating > 4);
                    setFilterResturants(filterList);
                }}>Top rated restaurant</button>
            </div>
            <div className="res-container">
                {
                    filterResturants.map((restaurant) => (<Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}> <RestaurantCard resData={restaurant} /> </Link>))
                }
            </div>
        </div >
    );
};

export default Body;