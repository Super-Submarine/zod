export default function Footer() {
  return (
    <footer className="mt-8">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full bg-amazon-light hover:bg-opacity-90 text-white text-sm py-3"
      >
        Back to top
      </button>

      {/* Links section */}
      <div className="bg-amazon-light text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-3">Get to Know Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">About Amazon Clone</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Make Money with Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Sell products</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Advertise</a></li>
              <li><a href="#" className="hover:underline">Self-Publish</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Payment Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Business Card</a></li>
              <li><a href="#" className="hover:underline">Shop with Points</a></li>
              <li><a href="#" className="hover:underline">Reload Your Balance</a></li>
              <li><a href="#" className="hover:underline">Currency Converter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Let Us Help You</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Your Account</a></li>
              <li><a href="#" className="hover:underline">Your Orders</a></li>
              <li><a href="#" className="hover:underline">Shipping Rates</a></li>
              <li><a href="#" className="hover:underline">Returns & Replacements</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-amazon text-white text-center py-4 text-sm">
        <p>&copy; 2024 Amazon Clone. This is a demo project, not affiliated with Amazon.</p>
      </div>
    </footer>
  );
}
