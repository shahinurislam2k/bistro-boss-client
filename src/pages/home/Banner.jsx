import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import banner1 from "../../assets/home/01.jpg";
import banner2 from "../../assets/home/02.jpg";
import banner3 from "../../assets/home/03.png";
import banner4 from "../../assets/home/04.jpg";
import banner5 from "../../assets/home/05.png";
import banner6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
