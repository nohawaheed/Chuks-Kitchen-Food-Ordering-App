import React from 'react'
import HeroSection from './../../components/hero-section/heroSection';
import PopularMenu from '../../data/PopularMenu.json'
import JollofRiceEntrees from '../../data/JollofRiceEntrees.json'
import SwallowSoups from '../../data/SwallowSoups.json'
import MenuItemCard from '../../components/menu-item-card/MenuItemCard';

function Explore() {
  return (
    <>
      <HeroSection title='Chuks  Kitchen' variant='hero--sm'  image='./images/welcome-2.webp' paragraph='Chuks  Kitchen Nigerian Home Cooking 4.8  (1.2k)' />
      <section className='section py-24 md:py-9.5 px-4 md:px-20.5'>
        <ul className='relative flex flex-col mb-14.25 gap-4.5 py-6.5 md:rounded-t-[14px] bg-white text-black'>
          <h3 className='text-big-title font-medium ps-6.5'>Menu Categories</h3>
          <li className='text-big-title font-medium flex items-center h-14 bg-light-orange before:content-[""] before:absolute before:start-0 ps-6 before:w-1 before:h-14 before:bg-primary-orange'>Popular</li>
          <li className='ps-6 text-big-title font-medium'>Jollof Rice & Entrees</li>
          <li className='ps-6 text-big-title font-medium'>Swallow & Soups</li>
          <li className='ps-6 text-big-title font-medium'>Grills & sides</li>
          <li className='ps-6 text-big-title font-medium'>Beverages</li>
          <li className='ps-6 text-big-title font-medium'>Desserts</li>
        </ul>
        <div className='flex flex-col gap-1 md:gap-5'>
          <h2 className='text-page-heading md:mt-10'>Popular</h2>
          <div className='row'>
            {PopularMenu.map((item) =>
            <MenuItemCard description={item.description}
            image={item.image} title={item.title} price={item.price} key={item.id} />)}
          </div>
        </div>
        <div className='flex flex-col gap-1 md:gap-5'>
          <h2 className='text-page-heading mt-9.25'>Jollof Rice & Entrees</h2>
          <div className='row'>
            {JollofRiceEntrees.map((item) =>
            <MenuItemCard description={item.description}
            image={item.image} title={item.title} price={item.price} key={item.id} />)}
          </div>
        </div>
        <div className='flex flex-col gap-1 md:gap-5'>
          <h2 className='text-page-heading mt-9.25'>Swallow & Soups</h2>
          <div className='row'>
            {SwallowSoups.map((item) =>
            <MenuItemCard description={item.description}
            image={item.image} title={item.title} price={item.price} key={item.id} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Explore