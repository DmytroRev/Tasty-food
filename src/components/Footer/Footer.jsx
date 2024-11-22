import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import css from "./Footer.module.css";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className={css.container}>
      <div className={css.containerBlock}>
        <div>
          <img
            src="/public/logoWhite.png"
            alt="logoFooter"
            style={{ marginBottom: 25 }}
          />
          <h4 className={css.text}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </h4>
          <ul className={css.containerListSocial}>
            <li>
              <a
                href="https://uk-ua.facebook.com/login/?next=https%3A%2F%2Fuk-ua.facebook.com%2F"
                target="_blank"
              >
                <FaFacebookF className={css.iconMedia} />
              </a>
            </li>
            <li>
              <a href="https://x.com/?lang=en" target="_blank">
                <FaTwitter className={css.iconMedia} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <RiInstagramFill className={css.iconMedia} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <FaLinkedinIn className={css.iconMedia} />
              </a>
            </li>
          </ul>
        </div>
        <div className={css.containerListLink}>
          <h4 className={css.title}>Quick Link</h4>
          <ul className={css.containerList}>
            <li className={css.list}>Home</li>
            <li className={css.list}>Featured</li>
            <li className={css.list}>About Us</li>
            <li className={css.list}>Product</li>
            <li className={css.list}>Blog</li>
          </ul>
        </div>
      </div>
      <div className={css.containerBlock}>
        <div>
          <h4 className={css.title}>Blog Post</h4>
          <ul className={css.containerListBlog}>
            <li className={css.listBlog}>
              <img src="/public/water.png" alt="water" />
              <div>
                <h5 className={css.titleBlog}>Choosing Plants For Water Conservation</h5>
                <p className={css.parag}>October 27, 2024</p>
              </div>
            </li>
            <li className={css.listBlog}>
              <img src="/public/earth.png" alt="earth" />
              <div>
                <h5 className={css.titleBlog}>Maintaining Your Yard This Year</h5>
                <p className={css.parag}>November 5, 2024</p>
              </div>
            </li>
            <li className={css.listBlog}>
              <img src="/public/kids.png" alt="kid" />
              <div>
                <h5 className={css.titleBlog}>Tips For Managing Your Irrigation System</h5>
                <p className={css.parag}>November 10, 2024</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
