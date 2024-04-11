import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
 
const NavBar = () => {



    const { user, userLogOut } = useContext(AuthContext)
    // const [success, setSuccess] = useState();

    // console.log(user)

    const handleLogOut = () => {
        userLogOut()
            .then(result => {
                console.log(result.user)
                // setSuccess('login')
                Swal.fire({
                    title: "congratulations!",
                    text: "You have Successfully Login an Account!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.error(error)
                alert("No")
            })
    }



    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={"/updateProfile"}>Update Profile</NavLink></li>
        <li><NavLink to={'/profile'}>Profile</NavLink></li>

    </>


    return (
        <div className="bg-slate-600">

            <div className="navbar h-20 container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost">Rasel</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>


                <div className="flex-none navbar-end">
                    {/*  */}



                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user.email}>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full " >
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><NavLink to={'/updateProfile'}>Update Profile</NavLink></li>
                                        <li><NavLink to={'/profile'}>Profile</NavLink></li>
                                        <li><NavLink to={'/'}>Log Out</NavLink></li>

                                    </ul>
                                </div>
                                <button onClick={handleLogOut} className="btn " > LogOut</button>
                            </>

                            :

                            <>
                                <NavLink to={'/login'}>
                                    <button className="btn btn-secondary  mr-3" >Login</button>
                                </NavLink>
                                <NavLink to={'/registration'}>
                                    <button className="btn btn-secondary  "  >Registration</button>
                                </NavLink>
                            </>

                    }

                </div>
            </div>

        </div>

    );
};

export default NavBar;