import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import armario from '/assets/img/armario.jpg';
import armario2 from '/assets/img/armario2.jpg';
import armario3 from '/assets/img/armario3.jpg';
import MenuRodape from '/components/MenuRodape';

export default function Home() {

 

    return(
    <div className="flex flex-col min-h-screen bg-[#03033D] text-white relative justify-center items-center">
      <div></div>
        <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md mb-2">
            <h1 className="text-2xl font-semibold text-white mb-4">Bem Vindo!</h1>
            <h3 className="text-1 font-semibold text-white">Recomendamos para você</h3>
            <h3 className="text-1 font-semibold text-white mb-4">Novas locações</h3>
           
            <Swiper modules={[Pagination, Autoplay]}  spaceBetween={16}  slidesPerView={1} 
            navigation pagination={{ clickable: true }} loop autoplay={{delay: 3000,disableOnInteraction: false,pauseOnMouseEnter: true}} >

              <SwiperSlide>
            <div className= "bg-blue-600 text-white rounded-2xl p-20 flex justify-center items-center mb-20" >
            <img src={armario} alt="Recomendado" className="absolute inset-0 w-full h-full object-cover" /> 
          
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-600 text-white rounded-2xl p-20 flex justify-center items-center mb-20">
              <img src={armario2} alt="Recomendado" className="absolute inset-0 w-full h-full object-cover" /> 
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-600 text-white rounded-2xl p-20 flex justify-center items-center mb-20">
              <img src={armario3} alt="Recomendado" className="absolute inset-0 w-full h-full object-cover" /> 
            </div>
          </SwiperSlide>
            
          </Swiper>

        <div className='m-[<20>]'>

          <Swiper modules={[Pagination, Autoplay]}  spaceBetween={16}  slidesPerView={1} 
            navigation pagination={{ clickable: true }} loop autoplay={{delay: 3000,disableOnInteraction: false,pauseOnMouseEnter: true}} >

              <SwiperSlide>
            <div className= "bg-blue-600 text-white rounded-2xl p-20 flex justify-center items-center mb-20" >
            <img src={armario} alt="Recomendado" className="absolute inset-0 w-full h-full object-cover" /> 
          
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-600 text-white rounded-2xl p-20 flex justify-center items-center mb-20">
              <img src={armario2} alt="Recomendado" className="absolute inset-0 w-full h-full object-cover" /> 
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-0600 text-white rounded-2xl p-20 flex justify-center items-center mb-2">
              <img src={armario3} alt="Recomendado" className="absolute inset-0 w-full h-full object-cover" /> 
            </div>
          </SwiperSlide>
            
          </Swiper>
              <MenuRodape>Ola</MenuRodape>
          </div>
           
        
        </div>
        
    </div>
    )

}