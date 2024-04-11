import { FaComments } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { useParams, useLoaderData, NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const PropertyDetails = () => {


    const property = useLoaderData();
    // console.log(property)

    const { id } = useParams();
    const idInt = parseInt(id)
    const details = property.find((b) => b.id === idInt)

    // console.log(details)


    const {
        estate_title,
        segment_name,
        short_description,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image,
        view_property_button } = details;



    return (
        <div className="mx-auto container">



            <img src={image} alt="" className="object-cover mt-8 w-full h-80 rounded sm:h-[700px] lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                <p className="text-[18px]">{description}</p>

                <div className=" ">
                    <div className="flex space-x-2">

                        <IoIosPricetag />
                        <span>Price: {price}</span>

                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-600">

                        <FaComments></FaComments>
                        <span>Area: {area}</span>

                    </div>

                </div>


                {/* Location */}
                <div className="flex  dark:text-gray-600">

                    <FaLocationDot></FaLocationDot>
                    <span>{location}</span>
                </div>


                {/* facilities */}
                <div className="grid lg:grid-cols-5 w-2/5">
                    {
                        facilities.map((tag) => <div key={tag.id}>
                            <p>#{tag}</p>
                        </div>)
                    }
                </div>


                <div className="  btn  btn-secondary">
                    <NavLink to={'/'}>
                        <div className="flex">
                            <IoMdArrowRoundBack className="mr-2 text-[18px]"></IoMdArrowRoundBack>
                            <span className="text-[18px]">Back</span>
                            </div>
                    </NavLink>
                </div>
            </div>











        </div>
    );
};

export default PropertyDetails;