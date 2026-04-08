import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Icon from '@/components/Icon'

export default function Header({ url }) {
  const menuItems = [
    { label: 'Stays', href: '/' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Online Experiences', href: '/online' },
  ]

  return (
    <header className="header">
      <div className="header__inner container">

        <div className="header__logo-wrapper">
          <Logo className="header__logo" loading="eager" />
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {menuItems.map(({ label, href }, index) => (
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
            Airbnb your home
          </a>
<button className="header__lang-button" aria-label="Language">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2C12 2 8 7 8 12s4 10 4 10M12 2c0 0 4 5 4 10s-4 10-4 10M2 12h20" />
  </svg>
</button>

<button className="header__profile-button" aria-label="Menu">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</button>
        </div>

      </div>
    </header>
  )
}