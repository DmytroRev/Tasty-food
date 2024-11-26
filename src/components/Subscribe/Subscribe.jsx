import { useState } from "react";
import css from "./Subscribe.module.css";
import toast from "react-hot-toast";

const Subscribe = () => {
  const [email, setEmail] = useState('')


  const handleSubs = () => {
    if (!email.trim()) {
      toast.error("Oops! It seems you haven't entered anything...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("You have successfully subscribed to our newsletter!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail(""); // Сбросить инпут после успешной подписки
    }
  };
  return (
    <div style={{position: "relative", width: 0, height: 0}}>
    <div className={css.container}>
      <div className={css.containerForImg}>
        <img
          src="https://res.cloudinary.com/drg797a6g/image/upload/v1732264257/trv0tcipztcrglsbh1ua.png"
          alt="salad"
          className={css.img}
        />
      </div>
      <div>
        <img src="https://res.cloudinary.com/drg797a6g/image/upload/v1732275753/tdvxsgf0ucmyyizse6pn.png" alt="arrow" className={css.arrow} />
      </div>
      <div className={css.containerWithInfo}>
        <h2 className={css.title}>Subscribe To Newsletter</h2>
        <div className={css.containerForInpAndBtn}>
          <input
            type="email"
            placeholder="Enter your email address..."
            className={css.inp}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={css.btn}  onClick={handleSubs}>Subscribe Now</button>
        </div>
      </div>
    </div>
    </div>  );
};

export default Subscribe;
