import data from '../../blog.json';
import css from './BlogList.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Подключаем стили для навигации
import BlogCard from '../BlogCard/BlogCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BlogList = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
     <div className={css.container}>
      <h2 className={css.title}>Latest blog</h2>
      <div className={css.cardZone}>
        <Slider {...settings}>
          {data.map((card) => (
            <div key={card.id}>
              <BlogCard card={card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogList;
