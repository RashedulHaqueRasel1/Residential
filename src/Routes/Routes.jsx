import {createBrowserRouter} from "react-router-dom";
// import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
// import Home from "../components/Home/Home";
import Hero from "../components/Hero/Hero";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Profile from "../components/Profaile/Profile";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
 


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Hero></Hero>
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