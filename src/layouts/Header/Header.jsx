import './Header.scss'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Logo from '@/components/Logo'

const LANGUAGES = [
  { code: 'en', label: 'English', region: 'United States' },
  { code: 'uk', label: 'Українська', region: 'Україна' },
  { code: 'de', label: 'Deutsch', region: 'Deutschland' },
  // Додай ресурси для цих мов у i18n.js, інакше вони не працюватимуть
  { code: 'fr', label: 'Français', region: 'France' },
]

export default function Header({ url }) {
  const { t, i18n } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Використовуємо useEffect для блокування скролу при відкритій модалці
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const currentLang = i18n.language || 'en'

  const handleLangChange = async (code) => {
    console.log('Changing language to:', code) // Для дебагу
    await i18n.changeLanguage(code)
    setIsModalOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="header__inner container">
          <div className="header__logo-wrapper">
            <Logo className="header__logo" loading="eager" />
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {[
                { label: t('nav.stays'), href: '/' },
                { label: t('nav.experiences'), href: '/experiences' },
                { label: t('nav.online'), href: '/online' },
              ].map(({ label, href }, index) => (
                <li key={index} className="header__nav-item">
                  <a href={href} className={clsx('header__nav-link', href === url && 'is-active')}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a href="/host" className="header__host-link">
              {t('header.host')}
            </a>

            {/* Кнопка відкриття модалки */}
            <button
              type="button"
              className="header__lang-button"
              onClick={() => {
                console.log('Opening modal...') // Для дебагу
                setIsModalOpen(true)
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2C12 2 8 7 8 12s4 10 4 10M12 2c0 0 4 5 4 10s-4 10-4 10M2 12h20" />
              </svg>
            </button>

            <button className="header__profile-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div 
          className="lang-modal__overlay" 
          style={{ display: 'flex' }} // Переконайся, що overlay не має display: none в CSS
          onClick={() => setIsModalOpen(false)}
        >
          <div className="lang-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lang-modal__header">
              <h2 className="lang-modal__title">{currentLang === 'uk' ? 'Мова та регіон' : 'Language and region'}</h2>
              <button className="lang-modal__close" onClick={() => setIsModalOpen(false)}>✕</button>
            </div>

            <div className="lang-modal__grid">
              {LANGUAGES.map(({ code, label, region }) => (
                <button
                  key={code}
                  type="button"
                  className={clsx('lang-modal__item', currentLang.startsWith(code) && 'is-active')}
                  onClick={() => handleLangChange(code)}
                >
                  <span className="lang-modal__item-lang">{label}</span>
                  <span className="lang-modal__item-region">{region}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}