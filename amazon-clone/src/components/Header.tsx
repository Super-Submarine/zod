import { CartItem } from "../types";

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ cartItems, onCartClick, searchQuery, onSearchChange }: HeaderProps) {
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-amazon sticky top-0 z-50">
      {/* Main header */}
      <div className="flex items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center mr-4 cursor-pointer">
          <span className="text-white text-2xl font-bold">
            amazon<span className="text-amazon-yellow">.clone</span>
          </span>
        </div>

        {/* Deliver to */}
        <div className="hidden md:flex items-center text-white mr-4 cursor-pointer">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="text-xs text-gray-300">Deliver to</p>
            <p className="text-sm font-bold">United States</p>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 mx-2">
          <select className="hidden sm:block bg-gray-100 border-none rounded-l-md px-2 text-sm text-gray-700 focus:outline-none">
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>Clothing</option>
            <option>Kitchen</option>
            <option>Home</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon Clone"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 px-4 py-2 text-sm focus:outline-none border-none sm:rounded-none rounded-l-md"
          />
          <button className="bg-amazon-yellow hover:bg-amazon-orange px-4 rounded-r-md transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Account */}
        <div className="hidden md:flex flex-col text-white mx-3 cursor-pointer hover:outline hover:outline-1 hover:outline-white p-1 rounded">
          <span className="text-xs">Hello, sign in</span>
          <span className="text-sm font-bold">Account & Lists</span>
        </div>

        {/* Orders */}
        <div className="hidden md:flex flex-col text-white mx-3 cursor-pointer hover:outline hover:outline-1 hover:outline-white p-1 rounded">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>

        {/* Cart */}
        <button
          onClick={onCartClick}
          className="flex items-center text-white mx-2 relative hover:outline hover:outline-1 hover:outline-white p-1 rounded"
        >
          <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amazon-yellow text-amazon text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="ml-1 font-bold text-sm">Cart</span>
        </button>
      </div>

      {/* Sub-header navigation */}
      <nav className="bg-amazon-light px-4 py-1 flex items-center gap-4 text-white text-sm overflow-x-auto">
        <button className="flex items-center gap-1 font-bold hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded whitespace-nowrap">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          All
        </button>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded whitespace-nowrap">Today's Deals</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded whitespace-nowrap">Customer Service</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded whitespace-nowrap">Registry</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded whitespace-nowrap">Gift Cards</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded whitespace-nowrap">Sell</a>
      </nav>
    </header>
  );
}
