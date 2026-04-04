import SearchBar from '@/components/SearchBar'
import './Hero.scss'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" />

      <div className="hero__inner container">
        {/* фонове фото або контент hero */}
      </div>

      <div className="hero__search">
        <SearchBar />
      </div>
    </section>
  )
}