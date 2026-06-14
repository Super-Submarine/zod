import { Link } from "react-router-dom";
import "./SubHeader.css";

function SubHeader() {
  return (
    <div className="subheader">
      <div className="subheader__links">
        <Link to="/" className="subheader__link">Today&apos;s Deals</Link>
        <Link to="/" className="subheader__link">Customer Service</Link>
        <Link to="/" className="subheader__link">Registry</Link>
        <Link to="/" className="subheader__link">Gift Cards</Link>
        <Link to="/" className="subheader__link">Sell</Link>
      </div>
    </div>
  );
}

export default SubHeader;
