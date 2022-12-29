import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/admin";
import FAQS from "./pages/FAQ";
import Home from "./pages/Home";
import Login from "./pages/login";
import Subscribe from "./pages/Subscribe";
import UserDashboard from "./pages/user";
import store from "./redux/store";


const {loginStatus,role} = store.getState().auth

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/faq',
        element:<FAQS/>
    },
    {
        path:'/subscribe',
        element: loginStatus ? <Navigate replace to={'/dashboard'} />  :<Subscribe />
    },
    {
        path:'/login',
        element:loginStatus ? <Navigate replace to={'/dashboard'} /> : <Login />
    },
    {
        path:'/dashboard',
        element:loginStatus ? (role === 'admin' ? <AdminDashboard /> : <UserDashboard />) : <Navigate replace to={'/login'} />
    },
])

export default router