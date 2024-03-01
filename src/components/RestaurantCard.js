import cardImage from "../images/cardImage.jpg"

const RestaurantCard = (props) => {
    const { resData } = props; // Destructuring in javascript object.
    const { name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.info;

    return (
        <div className="w-80 mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover object-center" src={cardImage} alt="food" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base truncate">{cuisines.join(", ")}</p>
                    <p className="text-gray-700 text-base">★ {avgRating}</p>
                    <p className="text-gray-700 text-base">{deliveryTime}</p>
                    <p className="text-gray-700 text-base">{costForTwo}</p>
                </div>
        </div>
    );
}

export default RestaurantCard;