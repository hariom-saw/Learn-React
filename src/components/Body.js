import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
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
    const ResturantCardTopRated = withTopRatedLabel(RestaurantCard);

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
        <div className="app-body container m-auto py-2 md:px-12 lg:px-7">

            <div className="flex justify-between px-4 py-2 shadow-orange-100">
                <div className="tags">
                    <button className="mr-3 text-gray-700 rounded-full border-2 border-blue-500 px-4 py-2 text-sm" onClick={() => {
                        setFilterResturants(listOfResturants);
                    }}>All Restaurant</button>
                    <button className="mr-3 text-gray-700 rounded-full border-2 border-blue-500 px-4 py-2 text-sm" onClick={() => {
                        const filterList = listOfResturants.filter((res) => res?.info?.avgRating > 4);
                        setFilterResturants(filterList);
                    }}>Top Rated Restaurant</button>
                    <button className="mr-3 text-gray-700 rounded-full border-2 border-blue-500 px-4 py-2 text-sm" onClick={() => {
                        const filterList = listOfResturants.filter((res) => res?.info.name.toLowerCase().includes('pizza'));
                        setFilterResturants(filterList);
                    }}>Pizza</button>
                </div>
                <div className="flex">
                    <input type="text" className="mr-3 max-w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="gsearch" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 py-2 rounded" onClick={() => {
                        const searchFilter = listOfResturants.filter((res) => res?.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterResturants(searchFilter);
                    }}>Search</button>
                </div>
            </div>
            <hr />
            <div className="res-container flex flex-wrap justify-between mt-4">
                {
                    filterResturants.map((restaurant) => (<Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}> {(restaurant?.info?.avgRating > 4) ? (<ResturantCardTopRated resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)} </Link>))
                }
            </div>
        </div >
    );
};

export default Body;