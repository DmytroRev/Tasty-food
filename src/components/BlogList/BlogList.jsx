import CustomSlider from "../CustomSlider/CustomSlider";
import css from "./BlogList.module.css";

const BlogList = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Latest blog</h2>
      <CustomSlider />
    </div>
  );
};

export default BlogList;
