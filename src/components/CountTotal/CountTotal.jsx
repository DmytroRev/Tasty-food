import { useState } from "react";
import css from "./CountTotal.module.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const data = [{
    id: 1,
    endValue: 1570,
    title: 'Total Products'
},
{
    id: 2,
    endValue: 3560,
    title: 'Satisfied Clients'
},
{
    id: 3,
    endValue: 4550,
    title: 'Project Completed'
},
{
    id: 4,
    endValue: 130,
    title: 'Awards Winning'
}]

const CountTotal = () => {
    const [startCount, setStartCount] = useState(false)
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    if(inView && !startCount) {
        setStartCount(true)
    }
  return (
    <ul className={css.container} ref={ref}>
        {data.map(item => (
            <li key={item.id} className={css.card}>
                <div className={css.counter}>{startCount && <CountUp start={0} end={item.endValue} duration={3}/>}+</div>
                <p className={css.title}>{item.title}</p>
            </li>
        ))}
    </ul>
  );
};

export default CountTotal;
