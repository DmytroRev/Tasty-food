import { FaUser } from "react-icons/fa";
import css from "./BlogCard.module.css";
import { MdDiscount, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import PropTypes from "prop-types";

const BlogCard = ({ card }) => {
  return (
    <div className={css.container}>
      <div style={{height: 250}}>
        <img src={card.image} alt={card.name}  className={css.img}/>
      </div>
      <div className={css.containerInfo}>
      <div className={css.containerInfoHead}>
        <p className={css.info}>
          <FaUser  className={css.icon}/>  {card.author}
        </p>
        <p className={css.info}>
          <MdDiscount  className={css.icon}/>{card.service}
        </p>
        <p className={css.info}><RiMessage3Fill className={css.icon}/>{card.comments} Comment</p>
      </div>
      <div>
        <h2 className={css.title}>{card.title}</h2>
      </div>
      <div className={css.containerUnder}>
        <p className={css.date}><FaCalendarDays style={{width: 15, color: '#76A713', marginRight: 5}}/> {card.date}</p>
        <button className={css.btn}>Read more <MdOutlineKeyboardArrowRight className={css.iconArrow}/></button>
      </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
    card: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      service: PropTypes.string.isRequired,
      comments: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };
  

export default BlogCard;
