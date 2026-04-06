import { useState } from 'react'
import './Inspiration.scss'

const TABS = ['Popular', 'Arts & culture', 'Outdoors', 'Mountains', 'Beach', 'Unique stays', 'Categories', 'Things to do']

const DESTINATIONS = {
  Popular: [
    { city: 'Canmore', type: 'Holiday rentals' },
    { city: 'Benalmádena', type: 'House rentals' },
    { city: 'Marbella', type: 'Holiday rentals' },
    { city: 'Mijas', type: 'House rentals' },
    { city: 'Prescott', type: 'Holiday rentals' },
    { city: 'Scottsdale', type: 'House rentals' },
    { city: 'Tucson', type: 'Flat rentals' },
    { city: 'Jasper', type: 'Cabin rentals' },
    { city: 'Mountain View', type: 'Holiday rentals' },
    { city: 'Devonport', type: 'Cottage rentals' },
    { city: 'Mallacoota', type: 'Holiday rentals' },
    { city: 'Ibiza', type: 'Holiday rentals' },
    { city: 'Anaheim', type: 'Family-friendly rentals' },
    { city: 'Monterey', type: 'Holiday rentals' },
    { city: 'Paso Robles', type: 'Holiday rentals' },
    { city: 'Santa Barbara', type: 'Beachfront rentals' },
    { city: 'Sonoma', type: 'Rentals with pools' },
  ],
  'Arts & culture': [
    { city: 'Paris', type: 'Holiday rentals' },
    { city: 'Rome', type: 'Apartment rentals' },
    { city: 'Vienna', type: 'Holiday rentals' },
    { city: 'Barcelona', type: 'City rentals' },
    { city: 'Florence', type: 'Villa rentals' },
    { city: 'Prague', type: 'Holiday rentals' },
  ],
  Outdoors: [
    { city: 'Banff', type: 'Cabin rentals' },
    { city: 'Yosemite', type: 'Glamping rentals' },
    { city: 'Zion', type: 'Holiday rentals' },
    { city: 'Queenstown', type: 'Adventure rentals' },
  ],
  Mountains: [
    { city: 'Aspen', type: 'Ski rentals' },
    { city: 'Whistler', type: 'Chalet rentals' },
    { city: 'Chamonix', type: 'Ski-in rentals' },
    { city: 'Zermatt', type: 'Chalet rentals' },
  ],
  Beach: [
    { city: 'Maldives', type: 'Overwater rentals' },
    { city: 'Bali', type: 'Beachfront rentals' },
    { city: 'Santorini', type: 'Villa rentals' },
    { city: 'Tulum', type: 'Beach rentals' },
  ],
  'Unique stays': [
    { city: 'Treehouses', type: 'Unique rentals' },
    { city: 'Yurts', type: 'Glamping rentals' },
    { city: 'Castles', type: 'Luxury rentals' },
    { city: 'Tiny homes', type: 'Eco rentals' },
  ],
  Categories: [
    { city: 'Beachfront', type: 'All rentals' },
    { city: 'Cabins', type: 'All rentals' },
    { city: 'Countryside', type: 'All rentals' },
    { city: 'Luxury', type: 'All rentals' },
  ],
  'Things to do': [
    { city: 'Surfing', type: 'Beach locations' },
    { city: 'Hiking', type: 'Mountain trails' },
    { city: 'Wine tasting', type: 'Vineyard stays' },
    { city: 'Skiing', type: 'Alpine resorts' },
  ],
}

const VISIBLE_COUNT = 17

export default function Inspiration() {
  const [activeTab, setActiveTab] = useState('Popular')
  const [expanded, setExpanded] = useState(false)

  const items = DESTINATIONS[activeTab] || []
  const visibleItems = expanded ? items : items.slice(0, VISIBLE_COUNT)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setExpanded(false)
  }

  return (
    <section className="inspiration">
      <div className="inspiration__inner container">
        <h2 className="inspiration__title">Inspiration for future getaways</h2>

        <div className="inspiration__tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`inspiration__tab ${activeTab === tab ? 'inspiration__tab--active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="inspiration__grid">
          {visibleItems.map((item) => (
            <div className="inspiration__item" key={item.city}>
              <a href="#" className="inspiration__city">{item.city}</a>
              <span className="inspiration__type">{item.type}</span>
            </div>
          ))}
        </div>

        {items.length > VISIBLE_COUNT && (
          <button
            className="inspiration__toggle"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less ↑' : 'Show more ↓'}
          </button>
        )}
      </div>
    </section>
  )
}