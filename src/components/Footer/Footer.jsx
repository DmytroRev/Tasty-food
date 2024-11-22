import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import css from "./Footer.module.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
    <div className={css.container}>
      <div className={css.containerBlock}>
        <div>
          <img
            src="https://res.cloudinary.com/drg797a6g/image/upload/v1732287922/utwjoljrcmodl6uaowrz.png"
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
              <img src="https://console.cloudinary.com/pm/c-521d075ca346400c123cdeeaddffc5/media-explorer?assetId=3c103a8c77389a8135e53eca144e4803" alt="water" className={css.imgFooter}/>
              <div>
                <h5 className={css.titleBlog}>
                  Choosing Plants For Water Conservation
                </h5>
                <p className={css.parag}>October 27, 2024</p>
              </div>
            </li>
            <li className={css.listBlog}>
              <img src="https://res.cloudinary.com/drg797a6g/image/upload/v1732288054/glxfllnbfx1iid7kgxfm.png" alt="earth" className={css.imgFooter}/>
              <div>
                <h5 className={css.titleBlog}>
                  Maintaining Your Yard This Year
                </h5>
                <p className={css.parag}>November 5, 2024</p>
              </div>
            </li>
            <li className={css.listBlog}>
              <img src="https://res.cloudinary.com/drg797a6g/image/upload/v1732288054/e5c3btoymzaq5syisjxc.png" alt="kid" className={css.imgFooter}/>
              <div>
                <h5 className={css.titleBlog}>
                  Tips For Managing Your Irrigation System
                </h5>
                <p className={css.parag}>November 10, 2024</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={css.title}>Officeal Info</h4>
          <div style={{marginBottom: 20}}>
            <p className={css.officialInfo} style={{marginBottom: 22}}>
              <FaLocationDot className={css.iconSocialFooter}/>
              30 Commercial Road Fratton, Australia
            </p>
            <a href="tel:+1-888-452-1829" className={css.officialInfo}>
              <BsFillTelephoneFill className={css.iconSocialFooter}/>
              1-888-452-1829
            </a>
          </div>
          <div>
            <h5 className={css.titleHours}>Open Hours:</h5>
            <p className={css.dateFooter}>Mon – Sat: 8 am – 5 pm, Sunday: CLOSED</p>
          </div>
        </div>
      </div>    
    </div>
    <div className={css.dateCreate}><p className={css.dateCreateInfo}>Copyright © 2021, Orgamic. All Rights Reserved.</p></div>
    </div>
  );
};

export default Footer;
