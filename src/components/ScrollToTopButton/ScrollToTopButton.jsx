import { useEffect, useState } from "react";
import css from "./ScrollToTopButton.module.css";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {window.removeEventListener('scroll', toggleVisibility)}
  }, []);

  return (
    <button onClick={scrollToTop} className={`${css.scrollToTop} ${isVisible ? css.visible : ""}`}><IoIosArrowUp /></button>
  )
};

export default ScrollToTopButton;
