import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import CheckOut from "../pages/Home/services/CheckOut";
import Bookings from "../pages/Home/services/Bookings";
import ProtectedRoute from "./ProtectedRoute";

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
            path: '/register',
            element: <Register></Register>
        },
        {
            path: 'checkout/:id',
            element: <CheckOut></CheckOut>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: 'myBooking',
            element:  <ProtectedRoute><Bookings></Bookings></ProtectedRoute>
        }
    ]
}
])

export default router;