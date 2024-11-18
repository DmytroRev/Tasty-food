import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import css from './Header.module.css'
import { BiSolidEnvelope } from "react-icons/bi";

const Header = () => {
  return (
    <header className={css.container}>
        <div className={css.containerHeaderInfo}>
      <div className={css.locationAndMail}>
        <FaLocationDot className={css.locationAndMailIcon} style={{width: 16}}/> <p className={css.location}>15/A, Nest Tower, NYC</p>
      </div>
      <div className={css.locationAndMail}>
        <BiSolidEnvelope  className={css.locationAndMailIcon} style={{width: 20, height:20}}/><a href="info@webmail.com" className={css.mail}>info@webmail.com</a>
      </div>
      </div>
      <div className={css.containerLangAndMedia}>
      <select name="" id="" className={css.containerSelect}>
        <option value="English">English</option>
        <option value="Ukraine">Ukraine</option>
      </select>
      <ul className={css.containerList}>
        <li><a href="https://uk-ua.facebook.com/login/?next=https%3A%2F%2Fuk-ua.facebook.com%2F" target="_blank"><FaFacebookF  className={css.iconMedia}/></a>
        </li>
        <li><a href="https://x.com/?lang=en" target="_blank"><FaTwitter className={css.iconMedia}/></a>
        </li>
        <li><a href="https://www.instagram.com/" target="_blank"><RiInstagramFill className={css.iconMedia}/></a>
        </li>
        <li><a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedinIn className={css.iconMedia}/></a>
        </li>
      </ul>
      </div>
    </header>
  );
};

export default Header;
