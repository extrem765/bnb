'use client'

import { useState } from 'react'
import Hero from '@/sections/Hero'
import CategoryBar from '@/components/CategoryBar'
import Inspiration from '@/layouts/Section/Inspiration'

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
        <Inspiration />
      </div>
    </>
  )
}