import { useState } from "react";
import data from "../../blog.json";
import BlogCard from "../BlogCard/BlogCard";
import css from "./CustomSlider.module.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 3 : prevIndex - 1
    );
  };
  
  return (
      <div className={css.sliderContainer}>
      <button className={css.arrowLeft} onClick={prevSlide}>
        <MdOutlineKeyboardArrowLeft className={css.icon}/>
      </button>
      <div className={css.slider}>
        <div
          className={css.sliderTrack}
          style={{
            transform: `translateX(-${currentIndex * (370 + 30)}px)`, // 370 - ширина карточки, 30 - отступ
          }}
        >
          {data.map((card) => (
            <div key={card.id} className={css.slide}>
              <BlogCard card={card} />
            </div>
          ))}
        </div>
      </div>
      <button className={css.arrowRight} onClick={nextSlide}>
      <MdOutlineKeyboardArrowRight className={css.icon}/>

      </button>
    </div>
  );
};

export default CustomSlider;
