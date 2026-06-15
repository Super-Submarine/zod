import { useState, useMemo } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import CategoryGrid from "./components/CategoryGrid";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { products } from "./data";
import { Product, CartItem } from "./types";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid onCategoryClick={handleCategoryClick} />

        {/* Products section */}
        <section className="px-4 py-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {selectedCategory
                ? `${selectedCategory}`
                : "Featured Products"}
            </h2>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline"
              >
                Show All
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="mt-2 text-amazon-blue hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </section>

        {/* Deal of the day */}
        <section className="px-4 py-6 max-w-7xl mx-auto">
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Deal of the Day
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img
                src="https://placehold.co/400x300/f8f8f8/333?text=Deal+of+the+Day"
                alt="Deal of the Day"
                className="w-full md:w-64 h-48 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-2">
                  Up to 40% off select electronics
                </h3>
                <p className="text-gray-600 mb-4">
                  Limited time offer on top-rated items. Shop now before the deal ends!
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 text-2xl font-bold">40% off</span>
                  <span className="text-sm text-gray-500">Deal ends in 12:34:56</span>
                </div>
                <button className="mt-4 bg-gradient-to-b from-amazon-yellow to-amazon-orange py-2 px-6 rounded-full font-medium hover:from-amazon-orange hover:to-amazon-orange transition-all">
                  Shop this deal
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}
