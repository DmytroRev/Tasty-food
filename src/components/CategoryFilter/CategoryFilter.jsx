import css from "./CategoryFilter.module.css";
import PropTypes from "prop-types";

const CategoryFilter = ({ categories, activeCategories, onCategoryToggle }) => {
    return (
      <div className={css.categoryButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${css.filterBtn} ${
              activeCategories.includes(category) ? css.active : ""
            }`}
            onClick={() => onCategoryToggle(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  CategoryFilter.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCategoryToggle: PropTypes.func.isRequired,
  };

export default CategoryFilter;
