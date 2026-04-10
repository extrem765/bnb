import './Header.scss'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Logo from '@/components/Logo'

const LANGUAGES = [
  { code: 'en-US', label: 'English', region: 'United States' },
  { code: 'en-GB', label: 'English', region: 'United Kingdom' },
  { code: 'uk', label: 'Українська', region: 'Україна' },
  { code: 'de', label: 'Deutsch', region: 'Deutschland' },
  { code: 'fr', label: 'Français', region: 'France' },
  { code: 'es', label: 'Español', region: 'España' },
  { code: 'it', label: 'Italiano', region: 'Italia' },
  { code: 'pl', label: 'Polski', region: 'Polska' },
  { code: 'pt', label: 'Português', region: 'Portugal' },
  { code: 'nl', label: 'Nederlands', region: 'Nederland' },
  { code: 'tr', label: 'Türkçe', region: 'Türkiye' },
  { code: 'ja', label: '日本語', region: '日本' },
  { code: 'ko', label: '한국어', region: '대한민국' },
  { code: 'zh', label: '中文', region: '中国' },
  { code: 'cs', label: 'Čeština', region: 'Česká republika' },
  { code: 'sk', label: 'Slovenčina', region: 'Slovensko' },
  { code: 'hu', label: 'Magyar', region: 'Magyarország' },
  { code: 'ro', label: 'Română', region: 'România' },
  { code: 'da', label: 'Dansk', region: 'Danmark' },
  { code: 'fi', label: 'Suomi', region: 'Suomi' },
  { code: 'no', label: 'Norsk', region: 'Norge' },
  { code: 'sv', label: 'Svenska', region: 'Sverige' },
  { code: 'el', label: 'Ελληνικά', region: 'Ελλάδα' },
  { code: 'he', label: 'עברית', region: 'ישראל' },
  { code: 'ar', label: 'العربية', region: 'السعودية' },
  { code: 'hi', label: 'हिन्दी', region: 'भारत' },
  { code: 'bn', label: 'বাংলা', region: 'বাংলাদেশ' },
  { code: 'id', label: 'Bahasa Indonesia', region: 'Indonesia' },
  { code: 'vi', label: 'Tiếng Việt', region: 'Việt Nam' },
  { code: 'th', label: 'ไทย', region: 'ประเทศไทย' },
  { code: 'ms', label: 'Bahasa Melayu', region: 'Malaysia' },
  { code: 'bg', label: 'Български', region: 'България' },
  { code: 'hr', label: 'Hrvatski', region: 'Hrvatska' },
  { code: 'sr', label: 'Српски', region: 'Србија' },
  { code: 'sl', label: 'Slovenščina', region: 'Slovenija' },
  { code: 'et', label: 'Eesti', region: 'Eesti' },
  { code: 'lv', label: 'Latviešu', region: 'Latvija' },
  { code: 'lt', label: 'Lietuvių', region: 'Lietuva' },
  { code: 'ru', label: 'Русский', region: 'Россия' },
  { code: 'ca', label: 'Català', region: 'Catalunya' },
]

const RECOMMENDED = ['en-US', 'en-GB', 'uk']

export default function Header({ url }) {
  const { t, i18n } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset'
  }, [isModalOpen])

  const currentLang = i18n.language || 'en'

  const handleLangChange = async (code) => {
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

            <button
              type="button"
              className="header__lang-button"
              onClick={() => setIsModalOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2C12 2 8 7 8 12s4 10 4 10M12 2c0 0 4 5 4 10s-4 10-4 10M2 12h20" />
              </svg>
            </button>

            <button className="header__profile-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div
          className="lang-modal__overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="lang-modal" onClick={(e) => e.stopPropagation()}>

            <div className="lang-modal__top">
              <button
                className="lang-modal__close"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
              <div className="lang-modal__tabs">
                <button className="lang-modal__tab is-active">
                  {t('modal.langTab')}
                </button>
                <button className="lang-modal__tab">
                  {t('modal.currencyTab')}
                </button>
              </div>
            </div>

            <div className="lang-modal__body">
              <div className="lang-modal__translate">
                <div className="lang-modal__translate-left">
                  <div className="lang-modal__translate-title">
                    {t('modal.translateTitle')}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 8l6 6" /><path d="M4 14s1-1 2-1 2 1 3 1 2-1 3-1" />
                      <line x1="2" y1="5" x2="12" y2="5" /><line x1="7" y1="2" x2="7" y2="5" />
                      <path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
                    </svg>
                  </div>
                  <div className="lang-modal__translate-desc">
                    {t('modal.translateDesc')}
                  </div>
                </div>
                <button className="lang-modal__toggle" />
              </div>

              <p className="lang-modal__section-title">{t('modal.recommended')}</p>
              <div className="lang-modal__grid">
                {LANGUAGES.filter(({ code }) => RECOMMENDED.includes(code)).map(({ code, label, region }) => (
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

              <div className="lang-modal__divider" />

              <p className="lang-modal__section-title">{t('modal.allLangs')}</p>
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
        </div>
      )}
    </>
  )
}