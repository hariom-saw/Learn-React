import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantCardMenu = (props) => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId); // Custom hook for fetching data.

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (null == resInfo) ? (<Shimmer />) : (
        <div>
            <h1>{name}</h1>
            <hr />
            <hr />
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <hr />
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.defaultPrice / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantCardMenu