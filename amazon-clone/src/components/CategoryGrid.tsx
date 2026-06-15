import { categories } from "../data";

interface CategoryGridProps {
  onCategoryClick: (category: string) => void;
}

export default function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  return (
    <section className="px-4 py-6 -mt-8 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onCategoryClick(cat.name)}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow text-center"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-24 object-cover rounded mb-2"
            />
            <p className="text-sm font-medium text-gray-800">{cat.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
