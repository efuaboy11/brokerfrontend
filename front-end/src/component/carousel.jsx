import React, { useState, useEffect } from "react";
import "../css/componentCss/carousel.css";   // Ensure this file is linked correctly

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentCount = React.Children.count(children);

  // Determine how many items to display based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsToShow(3);
      else if (width >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentCount - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(-${
            (currentIndex * 100) / itemsToShow
          }%)`,
          gridTemplateColumns: `repeat(${contentCount}, 1fr)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="carousel-item" key={index}>
            {child}
          </div>
        ))}
      </div>
      {/* Side Arrows */}
      <button className="carousel-arrow left" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-arrow right" onClick={nextSlide}>
        &gt;
      </button>
      {/* Navigation Dots */}
      <div className="carousel-dots">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
