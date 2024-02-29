import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantCardMenu = (props) => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchData()
    }, []);
    // const resId = 237669;
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json?.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);
    return (null == resInfo) ? (<Shimmer />) : (
        <div>
            <h1>{name}</h1>
            <hr />
            <hr />
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <hr />
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.price / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantCardMenu