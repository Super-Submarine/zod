import { Link } from "react-router-dom";
import "./CategoryCards.css";

const cards = [
  {
    title: "Electronics",
    image: "https://picsum.photos/seed/cat-electronics/300/200",
    link: "/?category=Electronics",
  },
  {
    title: "Kitchen & Dining",
    image: "https://picsum.photos/seed/cat-kitchen/300/200",
    link: "/?category=Kitchen",
  },
  {
    title: "Fashion",
    image: "https://picsum.photos/seed/cat-fashion/300/200",
    link: "/?category=Fashion",
  },
  {
    title: "Beauty & Personal Care",
    image: "https://picsum.photos/seed/cat-beauty/300/200",
    link: "/?category=Beauty",
  },
  {
    title: "Books",
    image: "https://picsum.photos/seed/cat-books/300/200",
    link: "/?category=Books",
  },
  {
    title: "Home & Garden",
    image: "https://picsum.photos/seed/cat-home/300/200",
    link: "/?category=Home",
  },
];

export default function CategoryCards() {
  return (
    <div className="category-cards">
      {cards.map((card) => (
        <Link to={card.link} key={card.title} className="category-card">
          <h3 className="category-card__title">{card.title}</h3>
          <div className="category-card__img-wrap">
            <img src={card.image} alt={card.title} loading="lazy" />
          </div>
          <span className="category-card__link">Shop now</span>
        </Link>
      ))}
    </div>
  );
}
