import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { clearItem } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItem());
    }
    return (

        <div className="app-cart container m-auto py-2 md:px-12 lg:px-7">
            <h1 className="text-2xl font-bold my-8">Shopping Cart</h1>
            {(cartItems.length === 0) && (<h3> Cart is empty, Please add some Products.</h3>)}
            {(cartItems.length !== 0) && (<div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Product</th>
                                        <th className="text-left font-semibold">Price</th>
                                        <th className="text-left font-semibold">Quantity</th>
                                        <th className="text-left font-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((cardItem) => <CartItem key={cardItem.card.info.id} cardItem={cardItem} />)}
                                </tbody>
                            </table>
                        </div>
                        <button className="bg-red-500 text-white py-2 px-4 rounded-lg w-max" onClick={handleClearCart}>Clear</button>
                    </div>
                    {<CartSummary cartItems={cartItems} />}
                </div>

            </div>)}
        </div>
    )
}

export default Cart