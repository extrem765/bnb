import { useRef, useState, useEffect } from 'react';
import './CategoryBar.scss';
// ❌ Зараз (неправильно)

// ✅ Має бути
import categoriesData from './categories.json';

// Vite: динамічно імпортуємо всі картинки з папки
const icons = import.meta.glob('@/assets/images/*.jpg', { eager: true });
const getIcon = (filename) => icons[`/src/assets/images/${filename}`]?.default;

export default function CategoryBar({ onCategoryChange, onFilterClick }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState('beachfront');
  const [taxes, setTaxes] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const categories = categoriesData.categories; // ✅ виправлено

  const checkScroll = () => {
    const el = trackRef.current;
    if (el) {
      setShowLeft(el.scrollLeft > 10);
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    checkScroll();
    el?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 350, behavior: 'smooth' });
  };

  return (
    <div className="category-bar">
      <div className="category-bar__main">
        {showLeft && (
          <button className="category-bar__arrow category-bar__arrow--left" onClick={() => scroll(-1)}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display:'block',fill:'none',height:'12px',width:'12px',stroke:'currentColor',strokeWidth:'5.33',overflow:'visible'}}><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></svg>
          </button>
        )}

        <div className="category-bar__track" ref={trackRef}>
          <div className="category-bar__track-inner">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`category-bar__item ${active === cat.id ? 'active' : ''}`}
                onClick={() => { setActive(cat.id); onCategoryChange?.(cat.id); }}
              >
                <img src={getIcon(cat.icon)} alt={cat.label} /> {/* ✅ виправлено */}
                <span>{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {showRight && (
          <button className="category-bar__arrow category-bar__arrow--right" onClick={() => scroll(1)}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display:'block',fill:'none',height:'12px',width:'12px',stroke:'currentColor',strokeWidth:'5.33',overflow:'visible'}}><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></svg>
          </button>
        )}
      </div>

      <div className="category-bar__actions">
        <button className="btn-filter" onClick={onFilterClick}>
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{display:'block',height:'14px',width:'14px',fill:'currentColor'}} aria-hidden="true" role="presentation" focusable="false"><path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
          <span>Filters</span>
        </button>

        <div className="btn-tax" onClick={() => setTaxes(!taxes)}>
          <span>Display total before taxes</span>
          <div className={`switch ${taxes ? 'on' : ''}`}>
            <div className="handle" />
          </div>
        </div>
      </div>
    </div>
  );
}