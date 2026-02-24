import React from 'react'
import CartItems from '../../data/CartItems.json'
import CartItem from './../../components/cart-item/CartItem';
import OrderSummary from './../../components/order-summary/OrderSummary';
import DeliveryDetails from './../../components/delivery -details/DeliveryDetails';
import PaymentOptions from './../../components/payment-options/PaymentOptions';
import CardOrderCompletion from './../../components/card-order-completion/CardOrderCompletion';

function MyOrders() {
  return (
    <main className='flex flex-col mt-8 xl:mt-25.75 gap-2.75 px-3.25 md:px-11 py-4.25 md:py-5.25'>
      <div className='grid grid-cols-1 m-auto gap-2.25 md:gap-2.75 px-1.75 md:px-2.5 py-4.25 md:py-5.25] rounded-lg md:rounded-md bg-white'>
        <h2 className='hidden md:flex text-page-heading font-semibold md:font-bold'>Your Cart</h2>
        {CartItems.map((item) => <CartItem image={item.image} title={item.title} description={item.description} price={item.price} key={item.id}/>)}
        <div className='flex items-center gap-2.75 px-0.75'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 8.75C17.5 9.02848 17.3894 9.29555 17.1925 9.49246C16.9955 9.68937 16.7285 9.8 16.45 9.8H9.8V16.45C9.8 16.7285 9.68937 16.9955 9.49246 17.1925C9.29555 17.3894 9.02848 17.5 8.75 17.5C8.47152 17.5 8.20445 17.3894 8.00754 17.1925C7.81062 16.9955 7.7 16.7285 7.7 16.45V9.8H1.05C0.771523 9.8 0.504451 9.68937 0.307538 9.49246C0.110625 9.29555 0 9.02848 0 8.75C0 8.47152 0.110625 8.20445 0.307538 8.00754C0.504451 7.81062 0.771523 7.7 1.05 7.7H7.7V1.05C7.7 0.771523 7.81062 0.504451 8.00754 0.307538C8.20445 0.110625 8.47152 0 8.75 0C9.02848 0 9.29555 0.110625 9.49246 0.307538C9.68937 0.504451 9.8 0.771523 9.8 1.05V7.7H16.45C16.7285 7.7 16.9955 7.81062 17.1925 8.00754C17.3894 8.20445 17.5 8.47152 17.5 8.75Z" fill="#1E88E5"/>
          </svg>
          <p className='text-primary-blue text-body font-medium'>Add more items from Chuks Kitchen</p>
        </div>
      </div>
      <OrderSummary />
      <DeliveryDetails />
      <PaymentOptions />
      <CardOrderCompletion />
    </main>
  )
}

export default MyOrders