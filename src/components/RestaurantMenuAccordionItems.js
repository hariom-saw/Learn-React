import { useDispatch } from "react-redux";
import { ACCORDION_MEDIA_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuAccordionItems = ({ itemCards }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    };

    return (
        itemCards.map((item) => (<div key={item.card.info.id} className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <h4 className="mb-2 text-black-500 dark:text-gray-400 w-9/12">{item.card.info.name}</h4>
            <div className='flex justify-around'>
                <div className="w-10/12">
                    <p className="text-gray-600 text-bold dark:text-gray-400 text-sm mb-2">₹ {(item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice : item?.card?.info?.price) / 100}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.card.info.description}</p>
                </div>
                <div className='w-2/12 flex items-center justify-around'>
                    <img src={ACCORDION_MEDIA_URL + item.card.info.imageId} />
                    <button className='rounded bg-red-300 px-3 py-2 text-sm text-black' onClick={() => handleAddItem(item)}>Add</button>
                </div>
            </div>
        </div>
        ))
    )
}

export default RestaurantMenuAccordionItems;