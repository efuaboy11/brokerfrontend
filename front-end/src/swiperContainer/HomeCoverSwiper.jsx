import React, { useState, useEffect } from "react";
import '../css/swiperContainerCss/homeCoverSwiper.css'
import cover1 from '../img/cover1.jpg'
import cover2 from '../img/cover2.jpg'
import cover3 from '../img/cover3.jpg'
import { Link } from "react-router-dom";
const slides = [
  {
    image: cover1,
    title: "Learn to invest properly with best trader",
    text: "Enjoy free webniars and professional trading tool  Analyze and Invest wisely with amanilight",
    subtitle: 'TRADE FOREX TODAY',
  },
  {
    image: cover2,
    title: "Your Trusted Partner in Wealth Growth",
    subtitle: "Smart and Safe Investing",
    text: "Unlock the potential of your money with diversified investment plans and expert guidance."
  },
  {
    image: cover3,
    title: "Empower Your Financial Future with Expert Investment Solutions",
    subtitle: "Tailored Plans for Success",
    text:'Explore tailored plans, maximize your returns, and achieve your investment goals with confidence'
  },
];

export const HomeCoverCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-cover-carousel-container">
      <div className="home-cover-carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`home-cover-carousel-slide ${
              currentIndex === index ? "active" : "inactive"
            } `}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="home-cover-carousel-overlay"></div>
            <div className="home-cover-carousel-content">
              <div className="home-cover-carousel-content-width">
                <p className="home-cover-carousel-sub-text site-primary-text">{slide.subtitle}</p>
                <h1 className="home-cover-carousel-header py-2">{slide.title}</h1>
                <p className="light-text home-cover-carousel-text-content-width  pb-4">{slide.text}</p>
                <Link className="site-btn px-4">Open Live Account</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="home-cover-carousel-buttons">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`home-cover-carousel-button ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

