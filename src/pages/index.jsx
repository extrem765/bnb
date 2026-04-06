import Hero from '@/sections/Hero'
import CategoryBar from '@/components/CategoryBar'
import Inspiration from '@/layouts/Section/Inspiration'
 
export const metadata = {
  title: 'Home',
}
 
export default () => {
  return (
    <>
      <Hero />
      {/* додай padding-top: ~50px до наступної секції щоб компенсувати виступ SearchBar */}
      <CategoryBar
  onCategoryChange={(id) => console.log(id)}
  onFilterClick={() => setFiltersOpen(true)}
/>
     <Inspiration />
    </>
  )
}
 