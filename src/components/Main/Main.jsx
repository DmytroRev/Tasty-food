import useScrollTo from "../hooks/useScrollTo";
import css from "./Main.module.css";

const Main = () => {
  const scrollToElement = useScrollTo()
  
  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    scrollToElement(targetId)
  }
  return (
    <div className={css.container}>
        <div>
      <h1 className={css.containerText}>
        Tasty & <br /> Healthy <span className={css.textSpan}>Organic</span>
        <br /> Food Everyday
      </h1>
      <button className={css.btn}><a href="#products" onClick={(e) => handleLinkClick(e, "products")} style={{textDecoration: 'none', color: '#FFFFFF'}}>Shop now</a></button>
      </div>
      <div className={css.containerBlock}>
        <p className={css.textInBlock}>Orange Lemon</p>
      </div>
      <img src="/lime.png" alt="lime" className={css.imgLine} />
      <img src="/arrow.png" alt="arrow" className={css.imgArrow} />
    </div>
    
  );
};

export default Main;
