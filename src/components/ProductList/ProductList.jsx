import { useState } from "react";
import data from "../../products.json";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ProductCard from "../ProductCard/ProductCard";
import ReactPaginate from "react-paginate";
import css from './ProductList.module.css'

const ProductList = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const categories = ["All", "Sell", "Organic", "Fruits", "Health", "Seafood"];

  const onCategoryToggle = (category) => {
    if (category === "All") {
      setActiveCategories(["All"]);
    } else {
      setActiveCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev.filter((c) => c !== "All"), category]
      );
    }
    setCurrentPage(0);
  };

  const filteredProducts = data.filter((product) => {
    if (activeCategories.includes("All") || activeCategories.length === 0)
      return true;

    if (activeCategories.includes("Sell") && product.isDiscounted) return true;

    return activeCategories.includes(product.category);
  });

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Featured products</h2>
      <div>
        <CategoryFilter
          categories={categories}
          activeCategories={activeCategories}
          onCategoryToggle={onCategoryToggle}
        />
      </div>
      <div className={css.card}>
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel="←"
          nextLabel="→"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          previousClassName="prev-arrow"
          nextClassName="next-arrow"
          pageLinkClassName="page-num"
        />
      )}
    </div>
  );
};

export default ProductList;
