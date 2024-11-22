import css from "./Subscribe.module.css";

const Subscribe = () => {
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
        <img src="/public/arrowWhite.png" alt="arrow" className={css.arrow} />
      </div>
      <div className={css.containerWithInfo}>
        <h2 className={css.title}>Subscribe To Newsletter</h2>
        <div className={css.containerForInpAndBtn}>
          <input
            type="email"
            placeholder="Enter your email address..."
            className={css.inp}
          />
          <button className={css.btn}>Subscribe Now</button>
        </div>
      </div>
    </div>
    </div>  );
};

export default Subscribe;
