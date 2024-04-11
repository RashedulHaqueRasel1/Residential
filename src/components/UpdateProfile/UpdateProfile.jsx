import { NavLink } from "react-router-dom";





const UpdateProfile = () => {
    return (
        <div>

            <div className="w-full mt-32 mb-28  card shrink-0     max-w-sm shadow-2xl bg-base-100  p-8 space-y-3 rounded-xl container mx-auto border border-red-500">
                <h1 className="text-2xl font-bold text-center">Update Profile</h1>
                {/* <TextField id="outlined-basic" className="" label="Name" variant="outlined" /> */}
                <form className="space-y-6  ">
                    <div className="space-y-1 text-sm mt-2">
                        <label htmlFor="name" className="block d ">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" className="input input-bordered w-full border-blue-300   focus:dark:border-blue-500" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="PhotoUrl" className="block  ">Photo URL</label>
                        <input type="PhotoUrl" name="PhotoUrl" id="PhotoUrl" placeholder="Photo URL" className="input input-bordered w-full   border-blue-300   focus:dark:border-blue-500" required />

                    </div>
                    <button className="btn btn-primary  w-full">Update</button>
                </form>
 

 
 
            </div>

        </div>
    );
};

export default UpdateProfile;