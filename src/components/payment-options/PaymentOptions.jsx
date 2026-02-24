import React from 'react'
import Button from './../../ui/Button';
import HorizontalLine from './../../ui/HorizontalLine';

function PaymentOptions() {
  return (
    <div className='flex flex-col max-w-157.75 lg:w-157.75 m-auto mt-15 gap-6 px-1.75 md:px-5 py-4.5 rounded-lg bg-white'>
      <div className='flex flex-col gap-6 py-2'>
        <div className='flex flex-col gap-3.5'>
          <h2 className='text-2xl font-bold'>Payment</h2>
          <HorizontalLine />
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-medium-title font-semibold'>Pay With:</h3>
          <div className='flex gap-2.5 p-2.5 justify-between'>
            <div className='flex gap-1.5 md:min-w-45.75'>
              <input type="radio" id="Card" name="paywith" value="Card" checked />
              <label className='text-text font-medium' htmlFor="Card">Card</label>
            </div>
            <div className='flex gap-1.5 md:min-w-45.75'>
              <input type="radio" id="Bank" name="paywith" value="Bank" />
              <label className='text-stroke font-medium' htmlFor="Bank">Bank</label>
            </div>
            <div className='flex gap-1.5 md:min-w-45.75'>
              <input type="radio" id="Transfer" name="paywith" value="Transfer" />
              <label className='text-stroke font-medium' htmlFor="Transfer">Transfer</label>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2.5 py-2.5 font-medium'>
        <div className='flex flex-col gap-4'>
          <h4 className='font-medium text-text'>Card Number</h4>
          <input className='ps-4 py-3 rounded-sm ring-[1px] ring-inset ring-stroke placeholder:text-stroke' placeholder='1234  5678  9101  1121' type="text" />
        </div>
        <div className='grid grid-cols-2 gap-4.5'>
          <div className='flex flex-col gap-4 w-full'>
            <h4 className='font-medium text-text'>Expiration Date</h4>
            <input className='ps-4 py-3 rounded-sm ring-[1px] ring-inset ring-stroke placeholder:text-stroke' placeholder='MM/YY' type="text" />
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <h4 className='font-medium text-text'>CVV</h4>
            <input className='ps-4 py-3 rounded-sm ring-[1px] ring-inset ring-stroke placeholder:text-stroke' placeholder='123' type="text" />
          </div>
        </div>
        <div className='flex gap-4'>
          <input className='rounded-xs ring-[1.5px] ring-inset ring-stroke' type="checkbox" id='saveCard' />
          <label className='text-stroke' htmlFor="saveCard">Save card details</label>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <Button title="Pay ₦9,900" />
        <p className='text-gray text-small font-medium md:font-normal'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
      </div>
    </div>
  )
}

export default PaymentOptions