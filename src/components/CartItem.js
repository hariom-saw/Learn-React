import React from 'react'
import { ACCORDION_MEDIA_URL } from '../utils/constant'

const CartItem = ({cardItem}) => {
    console.log(cardItem);


    const {id,name,imageId} = cardItem?.card?.info;
    const itemPrice = (((cardItem?.card?.info?.defaultPrice) ? cardItem?.card?.info?.defaultPrice : cardItem?.card?.info?.price) / 100);

    return (
        <tr>
            <td className="py-4">
                <div className="flex items-center">
                    <img className="h-16 w-16 mr-4" src={ACCORDION_MEDIA_URL + imageId} alt="Product image" />
                    <span className="font-semibold">{name}</span>
                </div>
            </td>
            <td className="py-4">₹{itemPrice}</td>
            <td className="py-4">
                <div className="flex items-center">
                    <button className="border rounded-md py-2 px-4 mr-2">-</button>
                    <span className="text-center w-8">1</span>
                    <button className="border rounded-md py-2 px-4 ml-2">+</button>
                </div>
            </td>
            <td className="py-4">₹{itemPrice}</td>
        </tr>
    )
}

export default CartItem