import { HiMiniArrowSmallRight } from "react-icons/hi2";
import css from "./ListRec.module.css";

const arr = [
  {
    id: 1,
    img: "https://res.cloudinary.com/drg797a6g/image/upload/v1732026953/jy8bhzeiwu5ghdkjtelc.png",
    name: "Vegetables",
    desc: "Purchasing from select family farmers who farm onganically.",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/drg797a6g/image/upload/v1732031523/tqgskgvbbiojutkhndbk.png",
    name: "Fresh Fruits",
    desc: "Purchasing from select family farmers who farm onganically.",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/drg797a6g/image/upload/v1732031548/x4l1v4wb5jlrj5fbqsle.png",
    name: "Eggpent",
    desc: "Purchasing from select family farmers who farm onganically.",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/drg797a6g/image/upload/v1732031539/qfyylc3kzv9mvlqnjfn7.png",
    name: "Tomato",
    desc: "Purchasing from select family farmers who farm onganically.",
  },
];

const ListRec = () => {
  return (
    <div>
      <ul className={css.container}  id="shop">
        {arr.map((card) => (
          <li key={card.id} className={css.list}>
                <img src={card.img} alt="vegan" className={css.img}/>
                <h3 className={css.cardName}>{card.name}</h3>
                <p className={css.cardDesc}>{card.desc}</p>
                <a href="#products"><button className={css.btn}><HiMiniArrowSmallRight style={{width: 20, height: 20}}/>
                </button></a>
                
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRec;
