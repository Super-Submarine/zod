import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./HeroBanner.css";

const slides = [
  {
    id: 1,
    bg: "#1a3a5c",
    title: "Shop deals in every category",
    subtitle: "Find today's best deals, limited time offers & more",
    cta: "Shop All Deals",
  },
  {
    id: 2,
    bg: "#2d6a4f",
    title: "New arrivals in Electronics",
    subtitle: "Discover the latest gadgets and gear",
    cta: "Shop Electronics",
  },
  {
    id: 3,
    bg: "#7f4f24",
    title: "Home essentials under $50",
    subtitle: "Refresh your home without breaking the bank",
    cta: "Explore Now",
  },
  {
    id: 4,
    bg: "#6a1b4d",
    title: "Fashion favorites up to 40% off",
    subtitle: "Top-rated styles for the whole family",
    cta: "Shop Fashion",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="hero">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`hero__slide ${idx === current ? "hero__slide--active" : ""}`}
          style={{ background: slide.bg }}
        >
          <div className="hero__content">
            <h2 className="hero__title">{slide.title}</h2>
            <p className="hero__subtitle">{slide.subtitle}</p>
            <button className="hero__cta">{slide.cta}</button>
          </div>
        </div>
      ))}

      <button className="hero__arrow hero__arrow--left" onClick={prev}>
        <FiChevronLeft size={40} />
      </button>
      <button className="hero__arrow hero__arrow--right" onClick={next}>
        <FiChevronRight size={40} />
      </button>

      <div className="hero__dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot ${idx === current ? "hero__dot--active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      <div className="hero__fade" />
    </div>
  );
}
