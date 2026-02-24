import React from 'react'
import HeroSection from '../../components/hero-section/heroSection';
import SpecialItemCard from './../../components/special-item-card/SpecialItemCard';
import popularCategories from '../../data/popularCategories.json'
import ChefSpecials from '../../data/ChefSpecials.json'


function Home() {
  return (
    <>
      <HeroSection title='The Heart of Nigerian Home Cooking' buttonTitle='Discover what’s new' image='./images/welcome.png' paragraph='Handcrafted with passion, delivered with care.' />
      {/* popular categories */}
      <section className='section relative py-24 md:py-34.25 px-4 md:px-13.75'>
      {/* search */}
      <div className='flex items-center gap-1.25 sm:gap-4 rounded-lg px-3.75 py-1.75 sm:p-4 absolute left-1/2 -translate-x-1/2 -top-7.25 sm:-top-5.75 bg-white text-charcoal-black-text shadow-penumbra w-[clamp(320px,80%,1069px)]'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#807373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input type="text" placeholder='What are you craving for today?' className='w-full placeholder-charcoal-black-text' />
      </div>
        <h2 className='title text-section-title font-semibold text-center mb-8.25 sm:mb-12.5'>Popular Categories</h2>
        <div className='row'>
          {
          popularCategories.map((category) =>
          <div key={category.id} className='card card--category'>
            <img src={category.image} alt={category.title} className='w-full'/>
            <h3 className='font-semibold text-small-title'>{category.title}</h3>
          </div>
          )}
        </div>
      </section>
      {/* chef's specials */}
      <section className='section py-24 md:py-29 px-4 md:px-15'>
        <h2 className='title text-center mb-8.25 sm:mb-12.5'>Chef's Specials</h2>
        <div className='row'>
          {ChefSpecials.map((item) =>
          <SpecialItemCard description={item.description}
          image={item.image} title={item.title} price={item.price} key={item.id} />)}
        </div>
      </section>
      <HeroSection variant="hero--md" title='Introducing Our New Menu Additions!' paragraph='Explore exciting new dishes, crafted with the freshest
      ingredients and authentic Nigerian flavors. Limited time
      offer!' heading='h2' image='./images/new-menu.png' buttonTitle='Discover what’s new'/>
    </>
  )
}

export default Home