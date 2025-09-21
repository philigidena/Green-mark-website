import React from 'react';
import './DealOfTheDay.css';

const products = [
  {
    discount: '-22%',
    image: '/Hero_image_1.jpg',
    timer: { days: 460, hours: 3, mins: 57, secs: 4 },
    name: 'MONSTERA SUBPINNATA',
    rating: 5,
    oldPrice: 320,
    newPrice: 250,
  },
  {
    discount: '-14%',
    image: '/Hero_image_2.jpg',
    timer: { days: 229, hours: 2, mins: 57, secs: 4 },
    name: 'ASPIDISTRA ELIATOR',
    rating: 5,
    oldPrice: 150,
    newPrice: 129,
  },
  {
    discount: '-16%',
    image: '/Hero_image_3.jpg',
    timer: { days: 447, hours: 3, mins: 57, secs: 4 },
    name: 'CRETAN BRAKE FERN',
    rating: 4,
    oldPrice: 250,
    newPrice: 210,
  },
  {
    discount: '-13%',
    image: '/Hero_image_1.jpg',
    timer: { days: 279, hours: 2, mins: 57, secs: 4 },
    name: 'CANARY DATE PALM',
    rating: 5,
    oldPrice: 310,
    newPrice: 269,
  },
];

const renderStars = (count) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <span key={i} style={{ color: i < count ? '#FFC107' : '#e0e0e0', fontSize: '1.1rem' }}>★</span>
  ));
};

const icons = [
  // Favorite (Heart)
  <svg key="fav" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.9 1-.9-1A5.5 5.5 0 0 0 3.4 12l9.7 9.7 9.7-9.7a5.5 5.5 0 0 0-2-7.4z"/></svg>,
  // Share
  <svg key="share" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 3.9M15.4 6.6l-6.8 3.8"/></svg>,
  // Search
  <svg key="search" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  // Cart
  <svg key="cart" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
];

const DealOfTheDay = () => {
  return (
    <section className="deal-section">
      <h2 className="deal-title">DEAL OF THE DAY</h2>
      <div className="deal-title-underline"></div>
      <div className="deal-cards-row">
        {products.map((p, idx) => (
          <div className={`deal-card${idx === 0 ? ' featured' : ''}`} key={idx}>
            <div className="deal-discount-badge">{p.discount}</div>
            <div className="deal-img-wrap">
              <img src={p.image} alt={p.name} className="deal-img" />
              <div className="deal-card-actions">
                {icons}
              </div>
            </div>
            <div className="deal-timer-row">
              <div className="deal-timer-box"><span>{p.timer.days}</span><small>DAYS</small></div>
              <div className="deal-timer-box"><span>{String(p.timer.hours).padStart(2, '0')}</span><small>HOURS</small></div>
              <div className="deal-timer-box"><span>{String(p.timer.mins).padStart(2, '0')}</span><small>MINS</small></div>
              <div className="deal-timer-box"><span>{String(p.timer.secs).padStart(2, '0')}</span><small>SECS</small></div>
            </div>
            <div className="deal-name">{p.name}</div>
            <div className="deal-rating">{renderStars(p.rating)}</div>
            <div className="deal-prices">
              <span className="deal-old-price">${p.oldPrice.toFixed(2)}</span>
              <span className="deal-new-price">${p.newPrice.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="deal-carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default DealOfTheDay;
