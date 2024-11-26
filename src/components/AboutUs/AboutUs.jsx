import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={css.container}>
      <div className={css.containerBlock}   id="about">
        <p className={css.textInBlock} >about us</p>
      </div>
      <img src="/girlWithVegetables.png" alt="girl" className={css.imgGirl} />
      <div className={css.containerWithInfo}>
        <h2 className={css.title}>We are healthy food organic</h2>
        <p className={css.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam
          in quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellat perspiciatis, quasi aliquid libero veniam dolor voluptatibus
          aspernatur neque suscipit unde quam laborum sequi in nulla maiores ad
          fuga molestias mollitia atque praesentium eius sed ipsum vitae.
          Voluptatum nesciunt aspernatur iste dolore voluptas, distinctio
          recusandae! Neque, repellendus similique.
        </p>
        <div className={css.containerForOtherInfo}>
        <div className={css.containerWithOtherInfo}>
          <div>
          <img src="/100.png" alt="100%" className={css.img} style={{width: 60}}/>
          </div><div>
            <h3 className={css.otherTitle}>Biological Benefits</h3>
            <p className={css.otherParagraph}>We`re making room for self care today with plan</p>
          </div>
        </div>
        <div className={css.containerWithOtherInfo}>
         <div>
          <img src="/hands.png" alt="hands" className={css.img}/></div>
          <div>
            <h3 className={css.otherTitle}>Speciality Product</h3>
            <p className={css.otherParagraph}>We`re making room for self care today with plan</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
