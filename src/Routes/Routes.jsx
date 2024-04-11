import {createBrowserRouter} from "react-router-dom";
// import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
// import Home from "../components/Home/Home";
 
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Profile from "../components/Profaile/Profile";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
 


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/property.json')
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;