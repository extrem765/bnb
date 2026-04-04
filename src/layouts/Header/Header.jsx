import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default (props) => {
  const { url } = props

  const menuItems = [
    { label: 'Stays', href: '/' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Online Experiences', href: '/online' },
  ]

  return (
    <header className="header">
      <div className="header__inner container">
        {/* Логотип */}
        <div className="header__logo-wrapper">
          <Logo className="header__logo" loading="eager" />
        </div>

        {/* Центральне меню */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {menuItems.map(({ label, href }, index) => (
              <li className="header__nav-item" key={index}>
                <a
                  className={clsx(
                    'header__nav-link',
                    href === url && 'is-active'
                  )}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Права частина */}
        <div className="header__actions">
          <a href="/host" className="header__host-link">
            Airbnb your home
          </a>
          <button className="header__lang-button" aria-label="Language">
            <Icon name="globe" /> {/* Переконайся, що іконка globe є в проекті */}
          </button>
          
          <div className="header__profile-menu">
            <button className="header__profile-button">
              <Icon name="burger" />
              <div className="header__user-avatar">
                <Icon name="user" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}