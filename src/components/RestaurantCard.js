import cardImage from "../images/cardImage.jpg"

// To add inline style in JSX.
const styleCard = {
    backgroundColor: "#eee",
};

const RestaurantCard = (props) => {
    // console.log(props);
    const { resData } = props; // Destructuring in javascript object.

// console.log(resData.data);
const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,deliveryTime} = resData?.data;

    return (
        <div className="res-card" style={styleCard}>
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