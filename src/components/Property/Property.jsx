
// import PropTypes from "prop-types"; 

// import { Link } from "react-router-dom";
import { IoIosPricetag } from "react-icons/io";
import { FaComments } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


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

    } = property;


    // console.log(property)

    return (
        <div className="mx-auto container ">

            <div className=" h-full   " data-aos="fade-up" data-aos-duration="3000"  >

                <div className="flex flex-col  max-w-lg p-6 space-y-6 overflow-hidden  rounded-lg shadow-md    " style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} >

                    <div className=" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" >
                        <div>
                            <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg" data-aos="fade-up" data-aos-duration="3000" />
                            <h2 className="mb-1 text-2xl font-semibold" data-aos="fade-up" data-aos-duration="2900">{estate_title}</h2>
                            <p className="text-xl dark:text-gray-600  " data-aos="fade-up" data-aos-duration="2900">{short_description}</p>
                        </div>

                        <div className="flex  flex-wrap justify-between dark:text-gray-600">
                            <div className="flex space-x-2 mt-5 " data-aos="fade-up" data-aos-duration="2900">

                                <IoIosPricetag className="text-xl  " />
                                <span className="text-[18px]">Price: {price}</span>

                            </div>
                            <div className="flex space-x-2 mt-5" data-aos="fade-up" data-aos-duration="2900">

                                <FaComments className="text-[18px]  "></FaComments>
                                <span className="text-[18px]">Area: {area}</span>

                            </div>

                        </div>

                        {/* Location */}
                        <div className="flex space-x-2 mt-3 dark:text-gray-600" data-aos="fade-up" data-aos-duration="2900">

                            <FaLocationDot className="text-[18px]  "></FaLocationDot>
                            <span className="text-[18px]">{location}</span>
                        </div>



                        {/* facilities */}

                        <div className="grid grid-cols-3 mt-3 font-bold" data-aos="fade-up" data-aos-duration="2900">
                            {
                                facilities.map((tag) => <div key={tag.id}>
                                    <p className="p-4 rounded-3xl  dark:text-gray-600 bg-slate-300" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px' }}># {tag}</p>
                                </div>)
                            }
                        </div>



                        <div>

                            <Link
                                to={`/propertyDetails/${id}`}
                                className="relative w-full btn  hover:outline text-white  hover:text-black items-center justify-start inline-block mt-4 px-5 py-3 overflow-hidden font-medium transition-all bg-purple-500 rounded-2xl hover:bg-white group" data-aos="fade-up" data-aos-duration="2200">
                                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-2xl"></span>
                                <span className="relative w-full   text-xl   transition-colors duration-200 ease-in-out font-bold text-center">View Property</span>
                            </Link>
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