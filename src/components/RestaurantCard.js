import cardImage from "../images/cardImage.jpg"

// To add inline style in JSX.
const styleCard = {
    backgroundColor: "#eee",
};

const RestaurantCard = (props) => {
    const { resData } = props; // Destructuring in javascript object.
    // console.log(resData?.info);

// console.log(resData.data);
const {name,avgRating,cuisines,costForTwo,deliveryTime} = resData?.info;

    return (
        <div className="res-card">
            <img className="card-logo" src={cardImage} />
            <div className="res-meta">
                <h3>{name}</h3>
                <h4>{cuisines}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
}

export default RestaurantCard;