
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'animate.css';
// import './styles.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './styles.css';

import img10 from '../../assets/img10.jpg'
import img5 from '../../assets/img5.jpg'
import img8 from '../../assets/img8.jpg'
import img11 from '../../assets/img11.jpg'
import { Link } from 'react-router-dom';





const Hero = () => {
    return (
        <>
            <Swiper

                spaceBetween={200}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper  "

            >
                <SwiperSlide>
                    <>

                        <div className='w-full h-full relative '>
                            <img className='h-full w-full ' src={img11} alt="" />
                            <div className='absolute top-[40%] lg:top-[50%] lg:ml-32  mx-auto container '  >
                                <h1 className='font-bold text-xl lg:text-6xl text-white animate__animated animate__fadeInDown' >Find Your Dream House  </h1>
                                <p className='text-white text-[16px] w-1/2 ml-24  lg:ml-96 mt-5 animate__animated animate__fadeInLeft'>
                                    Discover your dream house among our diverse residential properties. From luxurious amenities to prime locations, we offer options to suit every lifestyle. Find your perfect home with us today!</p>


                                <Link to={'/login'} className="relative mt-5 animate__animated animate__fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative">View Details</span>
                                </Link>
                            </div>


                        </div>

                    </>
                </SwiperSlide>

                <SwiperSlide>
                    <>

                        <div className='w-full h-full relative '>
                            <img className='h-full w-full ' src={img10} alt="" />
                            <div className='absolute top-[50%] ml-32  mx-auto container '  >
                                <h1 className='font-bold text-xl lg:text-6xl text-white animate__animated animate__fadeInDown' >Find Your Dream House  </h1>
                                <p className='text-white text-[16px] w-1/2 ml-96 mt-5 animate__animated animate__fadeInLeft'>
                                    Discover your dream house among our diverse residential properties. From luxurious amenities to prime locations, we offer options to suit every lifestyle. Find your perfect home with us today!</p>


                                <Link to={'/login'} className="relative mt-5 animate__animated animate__fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative">View Details</span>
                                </Link>
                            </div>


                        </div>

                    </>
                </SwiperSlide>

                <SwiperSlide>
                    <>

                        <div className='w-full h-full relative '>
                            <img className='h-full w-full ' src={img5} alt="" />
                            <div className='absolute top-[50%] ml-32  mx-auto container '  >
                                <h1 className='font-bold text-xl lg:text-6xl text-white animate__animated animate__fadeInDown' >Find Your Dream House  </h1>
                                <p className='text-white text-[16px] w-1/2 ml-96 mt-5 animate__animated animate__fadeInLeft'>
                                    Discover your dream house among our diverse residential properties. From luxurious amenities to prime locations, we offer options to suit every lifestyle. Find your perfect home with us today!</p>


                                <Link to={'/login'} className="relative mt-5 animate__animated animate__fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative">View Details</span>
                                </Link>
                            </div>


                        </div>

                    </>
                </SwiperSlide>

                <SwiperSlide>
                    <>

                        <div className='w-full h-full relative '>
                            <img className='h-full w-full ' src={img8} alt="" />
                            <div className='absolute top-[50%] ml-32  mx-auto container '  >
                                <h1 className='font-bold text-xl lg:text-6xl text-white animate__animated animate__fadeInDown' >Find Your Dream House  </h1>
                                <p className='text-white text-[16px] w-1/2 ml-96 mt-5 animate__animated animate__fadeInLeft'>
                                    Discover your dream house among our diverse residential properties. From luxurious amenities to prime locations, we offer options to suit every lifestyle. Find your perfect home with us today!</p>


                                <Link to={'/login'} className="relative mt-5 animate__animated animate__fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative">View Details</span>
                                </Link>
                            </div>


                        </div>

                    </>
                </SwiperSlide>

 


            </Swiper>

        </>
    );
};

export default Hero;


