import React from 'react'
import Button from './../../ui/Button';

function CardOrderCompletion() {
  return (
    <div className='flex flex-col max-w-101.75 lg:w-101.75 m-auto mt-15 gap-6 px-1.75 md:px-5 py-4.5'>
        <svg className='hidden md:flex justify-center w-full' width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="89" height="89" rx="44.5" fill="#0E7A3E"/>
          <path d="M27.8125 44.5L38.9375 55.625L61.1875 33.375" stroke="white" stroke-width="4.63542" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg className='flex justify-center md:hidden  w-full' width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="43" height="43" rx="21.5" fill="#0E7A3E"/>
          <path d="M13.4375 21.5L18.8125 26.875L29.5625 16.125" stroke="white" stroke-width="2.23958" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className='flex flex-col text-center gap-2.5 px-5 py-4 min-h-84.25 md:min-h-82.5'>
          <h2 className='text-md font-medium'>Order Placed Successfully!</h2>
          <p className='text-md'>Your delicious Chuks Kitchen meal is on its way!</p>
        </div>
        <span className='text-medium-body font-semibold md:font-medium text-text text-center'>Order #123RGR231567Y Confirmed</span>
        <Button title="Track Order" />
        <button className='color-gray-text font-medium text-gray-text'>Generate Receipt</button>
        <a href="#" className='font-medium text-primary-blue text-center'>Need help with your order?</a>
    </div>
  )
}

export default CardOrderCompletion