import { createBrowserRouter } from "react-router-dom";
import FAQS from "./pages/FAQ";
import Home from "./pages/Home";
import Login from "./pages/login";
import Subscribe from "./pages/Subscribe";


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
        element:<Subscribe />
    },
    {
        path:'/login',
        element:<Login/>
    },
])

export default router