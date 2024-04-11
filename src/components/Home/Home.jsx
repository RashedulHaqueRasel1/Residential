import Hero from "../Hero/Hero";
import Property from "../Property/Property";
import {useLoaderData} from "react-router-dom";

 
 

const Home = () => {

    const property = useLoaderData();
    // console.log(property)

    return (
        <div>
 
            <Hero></Hero>
 

                <div className="mt-24 text-center w-1/2 mx-auto container ">
                    <h1 className="font-extrabold text-6xl">Our Featured Property</h1>
                    <p className="  items-center text-center mt-7 mb-7 font-bold text-xl ">Our featured residential property offers luxury living with elegant design, modern amenities, and stunning views. Experience comfort and sophistication in a prime location for an exceptional lifestyle.</p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-4 mb-8">
                
            {
                property.map( (p) => <Property key={p.id} property={p}></Property>)
            }
            </div>
            
 
 
        </div>
    );
};

export default Home;