'use client'

import { useState } from 'react'
import Hero from '@/sections/Hero'
import CategoryBar from '@/components/CategoryBar'
import Inspiration from '@/layouts/Section/Inspiration'
import Card from '@/components/Card'
import cardsData from '@/components/Card/Card.json'
import '../i18n'

export default function HomePage() {
  const [filtersOpen, setFiltersOpen] = useState(false)

  return (
    <>
      <Hero />
      <div style={{ paddingTop: '50px' }}>
        <CategoryBar
          onCategoryChange={(id) => console.log(id)}
          onFilterClick={() => setFiltersOpen(true)}
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '24px',
          padding: '24px 80px',
        }}>
          {cardsData.cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
        <Inspiration />
      </div>
    </>
  )
}