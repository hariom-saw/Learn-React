import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData"
import { useState } from "react";

const Body = () => {

    const [listOfResturants, setListOfResturants] = useState(resList);

    let listOfResturants2 = [
        {
            data: {
                id: "334475",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                costForTwoString: "₹400 FOR TWO",
                deliveryTime: 36,
                avgRating: "3.8",
                totalRatings: 500,
            }
        }, {
            data: {
                id: "334476",
                name: "Dominos",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                costForTwoString: "₹400 FOR TWO",
                deliveryTime: 36,
                avgRating: "4",
                totalRatings: 500,
            },
        }, {
            data: {
                id: "334477",
                name: "PizzaHut",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                costForTwoString: "₹400 FOR TWO",
                deliveryTime: 36,
                avgRating: "4.5",
                totalRatings: 500,
            }
        },
        {
            data: {
                id: "334478",
                name: "Surbi",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                costForTwoString: "₹400 FOR TWO",
                deliveryTime: 36,
                avgRating: "3.8",
                totalRatings: 500,
            }
        },

    ];
    return (
        <div className="app-body">
            <div className="app-search"><button className="filter-btn" onClick={() => {
                console.log("filter");
                const filterList = listOfResturants.filter((res) => res.data.avgRating > 4);
                console.log(listOfResturants);
                setListOfResturants(filterList);
            }

            }>Filter</button></div>
            <div className="res-container">
                {
                    listOfResturants.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />))
                }
            </div>
        </div >
    );
};

export default Body;