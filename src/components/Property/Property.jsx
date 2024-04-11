
// import PropTypes from "prop-types"; 

// import { Link } from "react-router-dom";
import { IoIosPricetag } from "react-icons/io";
import { FaComments } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Property = ({ property }) => {

    const {
        id,
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
        view_property_button
    } = property;


    // console.log(property)


    return (
        <div className="mx-auto container ">

            <div className="border h-full  border-red-600">

                <div className="flex flex-col  max-w-lg p-6 space-y-6 overflow-hidden  rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">

                    <div className="">
                        <div>
                            <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg" />
                            <h2 className="mb-1 text-xl font-semibold  ">{estate_title}</h2>
                            <p className="text-sm dark:text-gray-600  ">{short_description}</p>
                        </div>

                        <div className="flex  flex-wrap justify-between">
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


                            <div className="grid grid-cols-3">
                            {
                                facilities.map( (tag) => <div  key={tag.id}>
                                    <p>#{tag}</p>
                                </div>)
                            }
                            </div>

 


                        <div>
                            <button className="btn btn-secondary w-full">View Property</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Property;



Property.propTypes = {

}