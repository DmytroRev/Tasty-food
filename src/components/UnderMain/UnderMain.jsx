import css from "./UnderMain.module.css";

const UnderMain = () => {
  return (
    <div className={css.container}>
      <div className={css.containerCardBrocoli}>
        <div>
        <h2 className={css.title}>Get 10% off on Vegetables</h2>
      <p className={css.info}>Shop our selection of organic fresh vegetables in a discounted price. 10% of on all vegetables</p>
      <button className={css.btnBrocoli}><a href="#products" style={{textDecoration: 'none', color: '#FFFFFF'}}>shop now</a></button>
      </div>
      <img src="/brocoli.png" alt="brocoli" style={{width: 265}}/>
      </div>
      <div  className={css.containerCardVegetables}>
        <div>
        <h2 className={css.title}>Get 10% off on Vegetables</h2>
      <p className={css.info}>Shop our selection of organic fresh vegetables in a discounted price. 10% of on all vegetables</p>
      <button className={css.btnVgtls}><a href="#products" style={{textDecoration: 'none', color: '#FFFFFF'}}>shop now</a></button>
      </div>
      <img src="/vegetables.png" alt="vegetables" style={{width:282}}/>
      </div>
    </div>
  );
};

export default UnderMain;
