import { Product } from "../types";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow p-4 flex flex-col">
      {/* Product image */}
      <div className="flex items-center justify-center h-48 mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform cursor-pointer"
        />
      </div>

      {/* Product info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-sm text-gray-800 hover:text-amazon-orange cursor-pointer line-clamp-2 mb-1">
          {product.title}
        </h3>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        {/* Price */}
        <div className="mt-2">
          <span className="text-xs align-top">$</span>
          <span className="text-2xl font-medium">{Math.floor(product.price)}</span>
          <span className="text-xs align-top">
            {(product.price % 1).toFixed(2).substring(1)}
          </span>
        </div>

        {/* Prime badge */}
        {product.prime && (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs bg-amazon-blue text-white px-1.5 py-0.5 rounded font-bold">
              prime
            </span>
            <span className="text-xs text-gray-600">FREE Delivery</span>
          </div>
        )}

        {/* Add to cart */}
        <button
          onClick={() => onAddToCart(product)}
          className="mt-auto pt-3 w-full bg-gradient-to-b from-amazon-yellow to-amazon-orange text-sm font-medium py-2 px-4 rounded-full hover:from-amazon-orange hover:to-amazon-orange transition-all shadow-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
