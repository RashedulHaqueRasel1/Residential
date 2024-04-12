import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Root = () => {
    return (
        <div className="">

            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;