import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '../image/ca1.png'
import Image2 from '../image/ca2.png'
import Image3 from '../image/ca3.png'
import Image4 from '../image/ca4.png'
import Image5 from '../image/ca5.png'
import Image6 from '../image/ca6.png'
import Image7 from '../image/ca7.png'
import Image8 from '../image/ca8.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
const Landing = () => {
  return (
    <div className='mt-11 mb-16'>
      <Swiper
        slidesPerView={1}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        breakpoints={{
          640: {
              slidesPerView: 2,
              spaceBetween: 0,
          },
          768: {
              slidesPerView: 3,
              // spaceBetween: -80,
          },
          1024: {
              slidesPerView: 3,
          }
      }}
        className="mySwiper"
      >
        <SwiperSlide className='h-[250px] relative overlay'><img src={Image1} className='h-[250px] w-full' alt="" /></SwiperSlide>
        <SwiperSlide className='h-[250px] relative overlay'><img src={Image2} className='h-[250px] w-full' alt="" /></SwiperSlide>
        <SwiperSlide className='h-[250px] relative overlay'><img src={Image3} className='h-[250px] w-full' alt="" /></SwiperSlide>
        <SwiperSlide className='h-[250px] relative overlay'><img src={Image4} className='h-[250px] w-full' alt="" /></SwiperSlide>
        <SwiperSlide className='h-[250px] relative overlay'><img src={Image5} className='h-[250px] w-full' alt="" /></SwiperSlide>
        <SwiperSlide className='h-[250px] relative overlay'><img src={Image6} className='h-[250px] w-full' alt="" /></SwiperSlide>
        <SwiperSlide className='h-[250px] relative overlay'><img src={Image7} className='h-[250px] w-full' alt="" /></SwiperSlide>
        <SwiperSlide className='h-[250px] relative overlay'><img src={Image8} className='h-[250px] w-full' alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Landing