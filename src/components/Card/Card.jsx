import { useState } from 'react';
import './Card.scss';

const icons = import.meta.glob('@/assets/images/Card/*.png', { eager: true });
const getIcon = (filename) => icons[`/src/assets/images/Card/${filename}`]?.default;

const Card = ({
  images = [],
  title = 'Title',
  distance = '',
  dates = '',
  price = '',
  rating = null,
  isFavourite = false,
}) => {
  const [liked, setLiked] = useState(false);
  const [slide, setSlide] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setSlide((s) => (s > 0 ? s - 1 : images.length - 1));
  };

  const next = (e) => {
    e.stopPropagation();
    setSlide((s) => (s < images.length - 1 ? s + 1 : 0));
  };

  return (
    <div className="card">
      <div className="card__media">
        <div
          className="card__slides"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {images.length > 0 ? (
            images.map((src, i) => (
              <div
                key={i}
                className="card__slide"
                style={{ backgroundImage: `url(${getIcon(src)})` }}
              />
            ))
          ) : (
            <div className="card__slide card__slide--empty" />
          )}
        </div>

        {images.length > 1 && (
          <>
            {slide > 0 && (
              <button className="card__arrow card__arrow--prev" onClick={prev}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m20 28-11.293-11.293a1 1 0 0 1 0-1.414L20 4" />
                </svg>
              </button>
            )}
            {slide < images.length - 1 && (
              <button className="card__arrow card__arrow--next" onClick={next}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m12 4 11.293 11.293a1 1 0 0 1 0 1.414L12 28" />
                </svg>
              </button>
            )}
          </>
        )}

        {isFavourite && <span className="card__badge">Guest favourite</span>}

        <button
          className={`card__heart ${liked ? 'card__heart--liked' : ''}`}
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          aria-label="Add to wishlist"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28c7-4.733 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0C2.68 7.42 2 9.2 2 11c0 7 7 12.267 14 17z" />
          </svg>
        </button>

        {images.length > 1 && (
          <div className="card__dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`card__dot ${i === slide ? 'card__dot--active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setSlide(i); }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="card__info">
        <div className="card__row">
          <span className="card__title">{title}</span>
          {rating && (
            <span className="card__rating">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.483-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.126-8.885a1 1 0 0 0-1.815 0z" />
              </svg>
              {rating}
            </span>
          )}
        </div>
        {distance && <p className="card__meta">{distance}</p>}
        {dates && <p className="card__meta">{dates}</p>}
        {price && (
          <p className="card__price">
            <strong>{price}</strong> night
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;