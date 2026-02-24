import React from 'react'
import HorizontalLine from './../../ui/HorizontalLine';

function DeliveryDetails() {
  return (
      <div className='flex flex-col max-w-216 lg:w-216 m-auto mt-15 gap-4.5 px-1.75 md:px-4.5 py-9 rounded-lg bg-white'>
        <h2 className='text-2xl font-bold md:font-semibold'>Delivery Details</h2>
        <HorizontalLine />
        <div className='flex justify-between gap-4.75 text-area'>
          <p>Home: 123 Main Street, Victoria Island, Lagos <br/> Apt 4B, Opposite Mega Plaza</p>
          <button className='text-primary-blue text-small-body min-w-23.75'>Change Address</button>
        </div>
        <div className='flex flex-col gap-4.75'>
          <h3 className='text-medium-title font-semibold'>Delivery Time</h3>
          <input className='px-2.5 pt-2.5 pb-6.5 rounded-lg ring-[1px] ring-inset ring-stroke placeholder:text-black' type="text" placeholder='ASAP(30-25)'/>
        </div>
        <div className='flex flex-col gap-4.75'>
          <h3 className='text-medium-title font-semibold'>Delivery Instructions (Optional)</h3>
          <textarea className='text-area' name="" id="" placeholder='E.g leave at the front of the door, knock twice...................'></textarea>
        </div>
        <div className='flex flex-col gap-4.75'>
          <h3 className='text-medium-title font-semibold'>Contact Address</h3>
          <input className='px-2.5 pt-2.5 pb-6.5 rounded-lg ring-[1px] ring-inset ring-stroke placeholder:text-black' type="text" placeholder='+234 801 234 5678' />
        </div>
      </div>
  )
}

export default DeliveryDetails