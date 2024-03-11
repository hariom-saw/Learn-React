import React, { createContext, lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantCardMenu from "./components/RestaurantCardMenu";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// Chunking
// Code Splitting
// Dynamic Buidling
// Lazy loading
// On demand loading
// dynamic import.

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));


const AppLayout = () => {
    const loggedInUserData = useContext(UserContext);

    const [userName, setUserName] = useState();
    useEffect(() => {
        setUserName("Hariom");
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }} >
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}
// To config app router.
const appRouter = createBrowserRouter(
    [{
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            }, {
                path: "/about",
                element: <Suspense fallback={<h2>Loading...</h2>} ><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h2>Loading...</h2>} ><Contact /></Suspense>
            },
            {
                path: "/profile",
                element: <Suspense fallback={<h2>Loading...</h2>} ><Profile /></Suspense>
            },
            {
                path: "/restaurant/:resId", // Dynamic app routes
                element: <RestaurantCardMenu />
            },
            {
                path: "/cart", // Dynamic app routes
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);