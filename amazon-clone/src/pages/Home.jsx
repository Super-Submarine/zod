import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products, { categories } from "../data/products";
import "./Home.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(lower) ||
          p.category.toLowerCase().includes(lower) ||
          p.description.toLowerCase().includes(lower)
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <div className="home">
      <div className="home__banner">
        <div className="home__banner-content">
          <h1>Shop deals in every category</h1>
          <p>Free shipping on orders over $25</p>
        </div>
      </div>

      <div className="home__categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`home__category-btn ${
              selectedCategory === cat ? "home__category-btn--active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {searchTerm && (
        <div className="home__search-info">
          <p>
            Showing results for &ldquo;<strong>{searchTerm}</strong>&rdquo;
            {filteredProducts.length === 0 && " — No results found"}
          </p>
        </div>
      )}

      <div className="home__featured">
        <div className="home__featured-cards">
          <div className="featured-card">
            <h3>Top Deal</h3>
            <p>Up to 40% off select electronics</p>
            <span className="featured-card__link">Shop now</span>
          </div>
          <div className="featured-card">
            <h3>Kitchen Essentials</h3>
            <p>Top brands at great prices</p>
            <span className="featured-card__link">See more</span>
          </div>
          <div className="featured-card">
            <h3>Best Sellers in Books</h3>
            <p>Discover the most popular reads</p>
            <span className="featured-card__link">Explore</span>
          </div>
          <div className="featured-card">
            <h3>New Arrivals</h3>
            <p>Fresh finds updated daily</p>
            <span className="featured-card__link">Shop new</span>
          </div>
        </div>
      </div>

      <div className="home__products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
