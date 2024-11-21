import css from "./Discount.module.css";

const Discount = () => {
  return (
    <div className={css.container}>
      <div className={css.conteinerWithInfo}>
        <h2 className={css.title}>Dhamaka offer</h2>
        <p className={css.containerNumPercent}>
          35
          <span className={css.percent}>
            %<span className={css.text}>off</span>
          </span>
        </p>
        <div>
          <button className={css.btn}>Buy now</button>
        </div>
      </div>
      <div className={css.figure}>
        <img
          src="https://res.cloudinary.com/drg797a6g/image/upload/v1732219316/m0tlwc0eylw2ps1vavje.png"
          alt="rectangle"
          style={{ height: 380 }}
        />
        <p className={css.orange}>Orange</p>
        <div className={css.containerForImg}>
          <img
            src="https://res.cloudinary.com/drg797a6g/image/upload/v1732137485/g03rooip6jo2trplhhuh.png"
            alt="grapefruit"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
