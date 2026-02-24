import React from 'react'
import Button from './../../ui/Button';
import HorizontalLine from './../../ui/HorizontalLine';

function OrderSummary() {
  return (
    <div className='flex flex-col max-w-216 lg:w-216 m-auto mt-15 gap-5.75 px-2.25 md:px-4 py-5 rounded-sm bg-white'>
      <div className='flex flex-col gap-3.5 py-2'>
        <h2 className='text-2xl font-bold'>Order Summary</h2>
        <HorizontalLine />
      </div>
      <div className='flex flex-col gap-2.5 py-2.5'>
        <h3 className='text-small-title font-semibold md:font-medium'>Add a Promo Code</h3>
        <div className='flex gap-2.5'>
          <input className='w-full placeholder:text-black px-2.5 py-3.75 ring ring-inset ring-stroke rounded-lg' type="text" placeholder='Enter Code here' />
          <Button title="Login" size='md'/>
        </div>
      </div>
      <div className='flex flex-col gap-2.5'>
        <ul className='flex flex-col gap-2.5 text-dark-gray-text font-medium'>
          <li className='flex justify-between'>Subtotal<span>₦9,200</span></li>
          <li className='flex justify-between'>Delivery Fee<span>₦500</span></li>
          <li className='flex justify-between'>Service Fee<span>₦200</span></li>
          <li className='flex justify-between'>Tax<span>₦0</span></li>
        </ul>
        <HorizontalLine />
      </div>
      <div className='flex justify-between text-big-title font-semibold text-charcoal-black-text'>
        <h3>Total</h3>
        <span>₦9,900</span>
      </div>
      <div className='flex w-full'>
        <button className='w-1/2 text-white bg-primary-orange px-2.5 py-3.75 rounded-tl-lg rounded-bl-lg'>Delivery</button>
        <button className='w-1/2 text-white bg-stroke px-2.5 py-3.75 rounded-tr-lg rounded-br-lg'>Pick up</button>
      </div>
      <div className='flex flex-col gap-2.5'>
        <h3 className='text-small-title font-semibold md:font-medium'>Special Instructions for Restaurant</h3>
        <textarea className='text-area' name="" id="" placeholder='E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty'></textarea>
      </div>
      <Button title="Proceed to Checkout" />
    </div>
  )
}

export default OrderSummary