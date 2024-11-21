import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../blog.json';
import css from './BlogList.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import BlogCard from '../BlogCard/BlogCard';

const BlogList = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Latest blog</h2>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          onSwiper={(swiper) => {
            const container = document.querySelector(`.${css.container}`);
            
            container.addEventListener('mouseenter', () => {
              swiper.autoplay.stop(); // Остановить autoplay при наведении
            });

            container.addEventListener('mouseleave', () => {
              swiper.autoplay.start(); // Запустить autoplay при убирании курсора
            });
          }}
        >
          {data.map((card) => (
            <SwiperSlide key={card.id} style={{display: "flex", gap: 30}}>
              <BlogCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogList;
