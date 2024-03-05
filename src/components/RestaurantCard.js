import cardImage from "../images/cardImage.jpg"
import { MEDIA_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props; // Destructuring in javascript object.
    const { name, avgRating, cuisines,cloudinaryImageId, costForTwo, sla } = resData?.info;
    const imageURL = MEDIA_URL + cloudinaryImageId;
    return (
        <div className="w-80 mb-8 bg-white shadow-lg rounded-lg overflow-hidden hover:bg-yellow-50">
            <img className="w-full h-48 object-cover object-center" src={imageURL} alt="food" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl truncate mb-2">{name}</div>
                    <p className="text-gray-700 text-base truncate">{cuisines.join(", ")}</p>
                    <p className="text-gray-700 text-base">★ {avgRating} • {sla?.slaString}</p>
                    <p className="text-gray-700 text-base"></p>
                    <p className="text-gray-700 text-base">{costForTwo}</p>
                </div>
        </div>
    );
}

export default RestaurantCard;


// Higher Order Component -> It basically update more content on top of exsiting component without any changes to child component
// input - ResturantCard => ResturantCardTopRated

export const withTopRatedLabel = (RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute p-1 bg-slate-100 border rounded">Top Rated</label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}