import './Footer.scss'

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2C12 2 8 7 8 12s4 10 4 10M12 2c0 0 4 5 4 10s-4 10-4 10M2 12h20" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const FOOTER_LINKS = {
  Support: [
    'Help Centre', 'AirCover', 'Anti-discrimination',
    'Disability support', 'Cancellation options', 'Report neighbourhood concern',
  ],
  Hosting: [
    'Airbnb your home', 'AirCover for Hosts', 'Hosting resources',
    'Community forum', 'Hosting responsibly',
  ],
  Airbnb: [
    'Newsroom', 'New features', 'Careers',
    'Investors', 'Airbnb.org emergency stays',
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">

        <div className="footer__columns">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div className="footer__col" key={title}>
              <p className="footer__col-title">{title}</p>
              <ul>
                {links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <span>© 2024 Airbnb, Inc.</span>
            {['Privacy', 'Terms', 'Sitemap', 'Company details'].map((item) => (
              <span key={item}>
                <span className="footer__dot">·</span>
                <a href="#">{item}</a>
              </span>
            ))}
          </div>

          <div className="footer__bottom-right">
            <button className="footer__locale">
              <GlobeIcon /> English (IN)
            </button>
            <button className="footer__locale">₹ INR</button>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}