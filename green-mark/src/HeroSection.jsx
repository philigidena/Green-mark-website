import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './HeroSection.css';

const carouselImages = [
  '/Hero_image_1.jpg',
  '/Hero_image_2.jpg',
  '/Hero_image_3.jpg',
];

const rightCards = [
  {
    title: 'Hanging Plants',
    desc: 'Adipiscing elit curabitur senectus sem',
    btn: true,
    img: '/Hero_image_2.jpg',
  },
  {
    title: 'Grow Orchids',
    desc: 'Cras pulvinar lorem ipsum dolor conse',
    price: '$379.00',
    img: '/Hero_image_3.jpg',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const priceRef = useRef(null);
  const btnRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );
    gsap.fromTo(
      priceRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.4, ease: 'power3.out' }
    );
    gsap.fromTo(
      btnRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.6, ease: 'power3.out' }
    );
  }, [current]);

  useEffect(() => {
    cardRefs.current.forEach((ref, idx) => {
      if (ref) {
        gsap.set(ref, { y: 40, opacity: 0 });
        gsap.to(ref, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2 + idx * 0.2,
          ease: 'power3.out',
        });
      }
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section full-bg">
      <div className="hero-content-wrapper">
        <div className="hero-left-col">
          <div className="hero-image-container big">
            <img
              src={carouselImages[current]}
              alt={`Inspiration Plant ${current + 1}`}
              className="hero-carousel-img large"
            />
            <div className="hero-overlay-content">
              <span ref={subtitleRef} className="hero-collection">TEAMO BEST COLLECTION</span>
              <h1 ref={titleRef} className="hero-title">Inspiration Plants</h1>
              <div ref={priceRef} className="hero-price">
                <span>New Price:</span>
                <span className="price">$25.00</span>
              </div>
              <button ref={btnRef} className="shop-now-btn">SHOP NOW</button>
            </div>
            <div className="carousel-dots">
              {carouselImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot${idx === current ? ' active' : ''}`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="hero-right-col">
          {rightCards.map((card, idx) => (
            <div className="product-card" key={idx}>
              <img src={card.img} alt={card.title} className="product-img" />
              <div
                className="product-card-content product-card-animated"
                ref={el => (cardRefs.current[idx] = el)}
              >
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
                {card.btn && <button className="shop-now-btn small">SHOP NOW</button>}
                {card.price && <span className="price">{card.price}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
