import { useState } from 'react'
import './ListingCard.scss'

export default function ListingCard({ location, sublocation, distance, dates, price, rating, badge }) {
  const [liked, setLiked] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const TOTAL_IMGS = 5

  return (
    <article className="card">
      <div className="card__image-wrap">
        <div className="card__image" />

        {badge && <span className="card__badge">{badge}</span>}

        <button
          className={`card__like ${liked ? 'card__like--active' : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label="Add to wishlist"
        >
          <svg viewBox="0 0 32 32" width="16" height="16">
            <path
              d="M16 28C16 28 3 19.5 3 11a7 7 0 0 1 13-3.5A7 7 0 0 1 29 11c0 8.5-13 17-13 17z"
              fill={liked ? '#ff385c' : 'rgba(0,0,0,0.5)'}
              stroke={liked ? '#ff385c' : 'white'}
              strokeWidth="2"
            />
          </svg>
        </button>

        <div className="card__dots">
          {Array.from({ length: TOTAL_IMGS }).map((_, i) => (
            <button
              key={i}
              className={`card__dot ${i === imgIndex ? 'card__dot--active' : ''}`}
              onClick={() => setImgIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="card__info">
        <div className="card__row">
          <span className="card__location">{location}</span>
          {rating
            ? <span className="card__rating">★ {rating}</span>
            : <span className="card__new">New</span>
          }
        </div>
        {sublocation && <p className="card__sublocation">{sublocation}</p>}
        <p className="card__distance">{distance}</p>
        <p className="card__dates">{dates}</p>
        <p className="card__price"><strong>{price}</strong> night</p>
      </div>
    </article>
  )
}