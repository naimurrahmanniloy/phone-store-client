import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/AllUsers/AllBuyers";
import AllSellers from "../../Pages/AllUsers/AllSellers";
import Blogs from "../../Pages/Blogs/Blogs";
import Categories from "../../Pages/DisplayPost/Categories";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import SellPost from "../../Pages/SellPost/SellPost";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:category',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`)

            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/sellPost',
                element: <SellerRoute><SellPost></SellPost></SellerRoute>
            },
            {
                path: '/dashboard/myBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },


        ]
    }
])

export default router