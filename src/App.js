import React, { createContext, lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet, createRoutesFromElements, Router, Route } from "react-router-dom";
import Error from "./components/Error";
import RestaurantCardMenu from "./components/RestaurantCardMenu";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import Profile, { gitHubInfo } from "./components/Profile";
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

/*
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
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
    ]
);
*/

// 2nd method of routes in React

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />} >
            <Route path="" element={<Body />} />
            <Route path="about" element={<Suspense fallback={<h2>Loading...</h2>} ><About /> </Suspense >} />
            <Route path="contact" element={<Suspense fallback={<h2>Loading...</h2>} ><Contact /> </Suspense >} />
            <Route path="profile" loader={gitHubInfo} element={<Suspense fallback={<h2>Loading...</h2>} ><Profile /> </Suspense >} />
            <Route path="cart" element={<Suspense fallback={<h2>Loading...</h2>} ><Cart /> </Suspense >} />
            <Route path="restaurant/:resId" element={<Suspense fallback={<h2>Loading...</h2>} ><RestaurantCardMenu /> </Suspense >} /> // Dynamic app routes
            <Route path="*" element={<Suspense fallback={<h2>Loading...</h2>} ><Error /> </Suspense >} /> // Dynamic app routes
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);