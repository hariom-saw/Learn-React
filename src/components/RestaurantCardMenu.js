import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuAccordion from "./RestaurantMenuAccordion";

const RestaurantCardMenu = (props) => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId); // Custom hook for fetching data.
    const [showIndex, setShowIndex] = useState(false); // Lifting state up. => https://react.dev/learn/sharing-state-between-components


    const toggleAccordion = index => {  // to toggle categories item lists.
        setShowIndex(prevIndex => (prevIndex === index ? null : index));
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) => res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (null == resInfo) ? (<Shimmer />) : (
        <div className="container m-auto py-2 md:px-12 lg:px-7">
            <div className="my-3 bg-pink-100 p-8">
                <h1 className="text-3xl mb-2 font-extrabold text-slate-900 tracking-tight">{name}</h1>
                <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            </div>
            <hr />
            <h3 className="my-4 text-xl ">Menu</h3>
            <hr />
            <hr />

            <div className="resturant-menu-accordion rounded-lg my-5">
                {
                    categories.map((categoryData, index) => (
                        <RestaurantMenuAccordion key={categoryData?.card?.card.title} data={categoryData?.card?.card} showIndex={index === showIndex ? true : false} onToggle={() => toggleAccordion(index)} />))
                }
            </div>
        </div>
    )
}

export default RestaurantCardMenu