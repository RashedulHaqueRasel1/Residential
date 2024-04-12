import {createBrowserRouter} from "react-router-dom";
// import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
// import Home from "../components/Home/Home";
 
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Profile from "../components/Profaile/Profile";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Error from "../components/Error/Error";
 


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/property.json')
            },
            {
                path: '/updateProfile',
                element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
            },
            {
                path: '/profile',
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/propertyDetails/:id',
                element: <PrivetRoute><PropertyDetails></PropertyDetails></PrivetRoute>,
                loader: () => fetch('/property.json')
            }
        ]
    },
]);

export default router;