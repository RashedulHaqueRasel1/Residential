 
import { Swiper, SwiperSlide } from 'swiper/react';
 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './styles.css';

// import img10 from '../../assets/img10.jpg'
// import img5 from '../../assets/img5.jpg'
// import img8 from '../../assets/img8.jpg'
import img4 from '../../assets/img4.jpg'
 

 


const Hero = () => {
    return (
        <>
            <Swiper

                spaceBetween={50}
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
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
 

            </Swiper>
 
        </>
    );
};

export default Hero;


{/* <img src={img8} alt="" /> */}