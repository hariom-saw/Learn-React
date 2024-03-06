import { useEffect, useState, useContext } from 'react';
import { LOGO_URL } from "../utils/constant";
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");
    const { loggedInUser } = useContext(UserContext);
    const onlineStatus = useOnlineStatus();


    // if No dependency array => useEffect is called on every render.
    // if dependency array is empty = [] => useEffect is called on intial render(just once)
    // id dependency array is [loginBtn] => called everytime "loginBtn" is updated

    useEffect(() => {
        // console.log("Header useEffect is called when 'loginBtn' is updated ");
    }, [loginBtn]);

    return (
        <nav className="sticky top-0 z-10 w-full bg-white dark:bg-transparent shadow-md border-1 ">
            <div className="container m-auto px-2 md:px-12 lg:px-7">
                <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                    <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
                    <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
                        <Link to="/" aria-label="logo" className="flex space-x-2 items-center">
                            <img src={LOGO_URL} className="w-12" alt="tailus logo" width="144" height="133" />
                        </Link>

                        <div className="flex items-center lg:hidden max-h-10">
                            <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative w-10 h-auto p-2">
                                <div id="line"
                                    className="m-auto h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"></div>
                                <div id="line2"
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300">
                                </div>
                            </label>
                        </div>
                    </div>

                    <label role="button" htmlFor="toggle_nav" className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 dark:bg-black dark:bg-opacity-80 bg-opacity-30 backdrop-blur backdrop-filter"></label>
                    <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white dark:bg-gray-900 lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
                        <div className="text-gray-600 lg:pr-4 w-full">
                            <ul className="tracking-wide font-medium  text-sm
                        flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                                <li>
                                    <Link to="/" className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700">
                                        <span>About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700">
                                        <span>Contact Us</span>
                                    </Link>
                                </li>
                                <li>
                                    User:- {<span className='font-bold'>{loggedInUser}</span>}
                                </li>
                                <li className='block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700'>
                                    {onlineStatus ? "🟢" : "🔴"}
                                </li>
                            </ul>
                        </div>

                        <div className="w-full flex min-w-max space-y-2 border-yellow-200 lg:space-y-0 sm:w-max lg:border-l dark:lg:border-gray-700">

                            <Link to="/profile" className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 dark:active:bg-gray-700 dark:focus:bg-gray-800 focus:bg-yellow-100 sm:w-max">
                                <svg className="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </Link>
                            <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max" onClick={() => {
                                ('Login' == loginBtn) ? setLoginBtn("Logout") : setLoginBtn("Login");
                            }}>
                                <span className="block text-yellow-900 font-semibold text-sm">
                                    {loginBtn}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;