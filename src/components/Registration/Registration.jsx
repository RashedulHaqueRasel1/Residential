// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";




const Registration = () => {

    const { createUser } = useContext(AuthContext)
    // const [regError, setRegError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegistration = e => {

        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        const photo = form.get("photo")
        // console.log(email, password, photo, name)
        // console.log(photo)







        if (password.length < 6) {
            toast.error("Password should be at least 6 characters or longer ")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            alert("Your Password Should be Upper Case");
            return;
        }
        if (!/[a-z]/.test(password)) {
            alert("Your Password Should be Lower Case");
            return;
        }










        // Create User
        createUser(email, password)
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    title: "congratulations!",
                    text: "You have Successfully Create an Account!",
                    icon: "success"
                });
                Navigate('/')
            })
            .catch((error) => {
                console.error(error)
            })


        // clear
        // setRegError('')


    }

    return (
        <div>

            <div className="hero mt-5 ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegistration}>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered  border-blue-300   focus:dark:border-blue-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered  border-blue-300   focus:dark:border-blue-500" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered  border-blue-300   focus:dark:border-blue-500" required />
                            </div>


                            <div className="form-control">
                                <label className="label flex items-center gap-2 input input-bordered border border-blue-300     ">
                                    <input

                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        // className=""
                                        required

                                    />

                                    <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ">
                                        {
                                            showPassword ? <FaRegEye className="ml-20" /> : <FaRegEyeSlash className="ml-20" />
                                        }
                                    </span>
                                </label>

                                <label className="label">
                                    <h1>Already Have Account? <Link to={'/login'} className="link link-hover text-rose-700">Login</Link> </h1>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Registration;