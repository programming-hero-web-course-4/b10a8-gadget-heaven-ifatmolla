import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Pages from "../Pages/Pages";
import Laptop from "../Pages/Pages";
import ProductsDetails from "../Pages/ProductsDetails";
import Dashboard from "../Components/dashboard/Dashboard";
import WishList from "../wishList/WishList";
import OptionalPage from "../Components/OptionalPage";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
    
    {
        errorElement: <ErrorPage></ErrorPage>,
        path: "/",
        element: <Main />, // Main layout
        children: [
            {
                path: "/",
                element: <Pages />, // Default Page
            },
            {
                path: "/product/:productId",
                element: <ProductsDetails />, // Dynamic Route
            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/stutics",
                element: <OptionalPage></OptionalPage>,
            },
            
            {
                path: "/laptop",
                element: <Laptop />, // Static Route
            },
            {
                path: "/wishlist",
                element: <WishList></WishList>,
            }
        ],
    },
]);
