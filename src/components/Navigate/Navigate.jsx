import { FiSearch } from "react-icons/fi";
import css from "./Navigate.module.css";
import { CiShoppingCart } from "react-icons/ci";

const Navigate = () => {
  return (
    <div className={css.container}>
      <img src="/logo.png" alt="logo" className={css.img} />
      <div className={css.ContainerForListAndBtns}>
      <ul className={css.containerList}>
        <li className={css.list}>Home +</li>
        <li className={css.list}>About +</li>
        <li className={css.list}>Shop +</li>
        <li className={css.list}>Page +</li>
        <li className={css.list}>Contact</li>
      </ul>
      <div className={css.containerForBtns}>
      <button className={css.btnLogin}>Login</button>
      <button className={css.btn}>
        <FiSearch style={{width: 20, height:20}}/>
      </button>
      <button className={css.btn}>
        <CiShoppingCart  style={{width: 20, height:20}}/>
      </button>
    </div>
    </div>
    </div>
  );
};

export default Navigate;
