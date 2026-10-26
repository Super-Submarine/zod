import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import CategoryCards from "../components/CategoryCards";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Home.css";

export default function Home() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const filtered = useMemo(() => {
    let result = products;
    if (category && category !== "All") {
      result = result.filter((p) => p.category === category);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [category, search]);

  const heading = search
    ? `Results for "${search}"`
    : category
      ? category
      : null;

  return (
    <div className="home">
      {!category && !search && (
        <>
          <HeroBanner />
          <CategoryCards />
        </>
      )}

      <section className="home__products">
        {heading && <h2 className="home__heading">{heading}</h2>}
        {!heading && <h2 className="home__heading">Recommended for you</h2>}

        {filtered.length === 0 ? (
          <div className="home__no-results">
            <h3>No results found</h3>
            <p>Try a different search or browse our categories above.</p>
          </div>
        ) : (
          <div className="home__grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
