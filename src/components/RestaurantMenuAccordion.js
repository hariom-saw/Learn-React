import { useState } from "react";
import RestaurantMenuAccordionItems from "./RestaurantMenuAccordionItems";

const RestaurantMenuAccordion = ({ data }) => {
    const [showIndex, setShowIndex] = useState(false);
    const rotateIcon = showIndex ? "rotate-0" : "rotate-180";
    const handleClick = () => {
        setShowIndex(!showIndex);
    }
    return (
        <>
            <h2 className="bg-gray-200 mt-3">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" onClick={handleClick}>
                    <span>{data?.title} ({data.itemCards.length})</span>
                    <svg data-accordion-icon className={rotateIcon + " w-3 h-3 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div className="">
                {showIndex && < RestaurantMenuAccordionItems itemCards={data?.itemCards} />}
            </div>
        </>
    )
}

export default RestaurantMenuAccordion

