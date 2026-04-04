import { useRef, useState, useEffect } from 'react'
import './CategoryBar.scss'

// Імпорт іконок у форматі PNG
import beachfrontIcon from '@/assets/images/1.png'
import viewsIcon from '@/assets/images/2.png'
import cabinsIcon from '@/assets/images/3.png'
import lakefrontIcon from '@/assets/images/4.png'
import yurtsIcon from '@/assets/images/5.png'
import treehousesIcon from '@/assets/images/6.png'
import domesIcon from '@/assets/images/7.png'
import omgIcon from '@/assets/images/8.png'
import mansionsIcon from '@/assets/images/9.png'
import nationalparksIcon from '@/assets/images/10.png'
import castlesIcon from '@/assets/images/11.png'
import trendingIcon from '@/assets/images/12.png'
import houseboatsIcon from '@/assets/images/13.png'

const categories = [
  { id: 'beachfront', icon: beachfrontIcon, label: 'Beachfront' },
  { id: 'views', icon: viewsIcon, label: 'Amazing views' },
  { id: 'cabins', icon: cabinsIcon, label: 'Cabins' },
  { id: 'lakefront', icon: lakefrontIcon, label: 'Lakefront' },
  { id: 'yurts', icon: yurtsIcon, label: 'Yurts' },
  { id: 'treehouses', icon: treehousesIcon, label: 'Treehouses' },
  { id: 'domes', icon: domesIcon, label: 'Domes' },
  { id: 'omg', icon: omgIcon, label: 'OMG!' },
  { id: 'mansions', icon: mansionsIcon, label: 'Mansions' },
  { id: 'nationalparks', icon: nationalparksIcon, label: 'National parks' },
  { id: 'castles', icon: castlesIcon, label: 'Castles' },
  { id: 'trending', icon: trendingIcon, label: 'Trending' },
  { id: 'houseboats', icon: houseboatsIcon, label: 'Houseboats' },
]

// Компоненти іконок стрілок та фільтрів
const ChevronLeft = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const FiltersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
)

export default function CategoryBar({ onCategoryChange, onFilterClick }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState('beachfront')
  const [taxes, setTaxes] = useState(false)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const SCROLL_STEP = 300

  const checkScroll = () => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 0)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (dir) => {
    trackRef.current?.scrollBy({
      left: dir * SCROLL_STEP,
      behavior: 'smooth'
    })
  }

  const handleSelect = (id) => {
    setActive(id)
    onCategoryChange?.(id)
  }

  return (
    <div className="category-bar">
      {/* Стрілка вліво */}
      {canLeft && (
        <button className="category-bar__arrow" onClick={() => scroll(-1)} aria-label="Scroll left">
          <ChevronLeft />
        </button>
      )}

      {/* Контейнер категорій */}
      <div className="category-bar__track-wrapper">
        <div className="category-bar__track" ref={trackRef}>
          {categories.map(({ id, icon, label }) => (
            <div
              key={id}
              className={`category-bar__item ${active === id ? 'category-bar__item--active' : ''}`}
              onClick={() => handleSelect(id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(id)}
            >
              <img className="category-bar__icon" src={icon} alt={label} />
              <span className="category-bar__label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Стрілка вправо */}
      {canRight && (
        <button className="category-bar__arrow" onClick={() => scroll(1)} aria-label="Scroll right">
          <ChevronRight />
        </button>
      )}

      {/* Права панель з фільтрами та перемикачем */}
      <div className="category-bar__right">
        <button className="category-bar__filters" onClick={onFilterClick}>
          <FiltersIcon />
          <span>Filters</span>
        </button>

        <label className="category-bar__toggle">
          <span>Display total before taxes</span>
          <div className="category-bar__switch">
            <input
              type="checkbox"
              checked={taxes}
              onChange={(e) => setTaxes(e.target.checked)}
            />
            <span className="category-bar__switch-track" />
          </div>
        </label>
      </div>
    </div>
  )
}