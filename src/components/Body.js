import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData"
import { useEffect, useState } from "react";
import { LIVE_DATA_URL } from "../utils/constant";
import Shimer from "./Shimer";

const Body = () => {

    const [listOfResturants, setListOfResturants] = useState([]);
    const [filterResturants,setFilterResturants] = useState([]);
    const [searchText, setsearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const liveData = await fetch(LIVE_DATA_URL);
        const jsonData = await liveData.json();
        const liveRestaurantsList = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfResturants(liveRestaurantsList);
        setFilterResturants(liveRestaurantsList);
        console.log("Fetch called");
    };

    if (0 === listOfResturants.length) {
        return (<Shimer />);
    }
    return (
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
                    filterResturants.map((restaurant) => (<RestaurantCard key={restaurant?.info?.id} resData={restaurant} />))
                }
            </div>
        </div >
    );
};

export default Body;