import React, { useState } from 'react';
import CartItems from '../../data/CartItems.json';
import CartItem from './../../components/cart-item/CartItem';
import OrderSummary from './../../components/order-summary/OrderSummary';
import DeliveryDetails from './../../components/delivery -details/DeliveryDetails';
import PaymentOptions from './../../components/payment-options/PaymentOptions';
import CardOrderCompletion from './../../components/card-order-completion/CardOrderCompletion';
import Button from '../../ui/Button';

function MyOrders() {
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState(CartItems);
  // const addItem = (newItem) => {
  //   setCartItems((prev) => {
  //     const existing = prev.find((item) => item.id === newItem.id);

  //     if (existing) {
  //       return prev.map((item) =>
  //         item.id === newItem.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item,
  //       );
  //     }

  //     return [...prev, { ...newItem, quantity: 1 }];
  //   });
  // };
  const decrementItem = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const incrementItem = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <main className="flex flex-col mt-8 xl:mt-25.75 gap-2.75 px-3.25 md:px-11 py-4.25 md:py-5.25">
      {step === 1 && (
        <div className="grid grid-cols-1 m-auto gap-2.25 md:gap-2.75 px-1.75 md:px-2.5 py-4.25 md:py-5.25] rounded-lg md:rounded-md bg-white">
          <h2 className="hidden md:flex text-page-heading font-semibold md:font-bold">
            Your Cart
          </h2>
          {cartItems.map((item) => (
            <CartItem
              {...item}
              key={item.id}
              totalPrice={total}
              onIncrement={() => incrementItem(item.id)}
              onDecrement={() => decrementItem(item.id)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
          <div className="flex items-center gap-2.75 px-0.75">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 8.75C17.5 9.02848 17.3894 9.29555 17.1925 9.49246C16.9955 9.68937 16.7285 9.8 16.45 9.8H9.8V16.45C9.8 16.7285 9.68937 16.9955 9.49246 17.1925C9.29555 17.3894 9.02848 17.5 8.75 17.5C8.47152 17.5 8.20445 17.3894 8.00754 17.1925C7.81062 16.9955 7.7 16.7285 7.7 16.45V9.8H1.05C0.771523 9.8 0.504451 9.68937 0.307538 9.49246C0.110625 9.29555 0 9.02848 0 8.75C0 8.47152 0.110625 8.20445 0.307538 8.00754C0.504451 7.81062 0.771523 7.7 1.05 7.7H7.7V1.05C7.7 0.771523 7.81062 0.504451 8.00754 0.307538C8.20445 0.110625 8.47152 0 8.75 0C9.02848 0 9.29555 0.110625 9.49246 0.307538C9.68937 0.504451 9.8 0.771523 9.8 1.05V7.7H16.45C16.7285 7.7 16.9955 7.81062 17.1925 8.00754C17.3894 8.20445 17.5 8.47152 17.5 8.75Z"
                fill="#1E88E5"
              />
            </svg>
            <div className="w-full flex justify-between items-center">
              <p className="text-primary-blue text-body font-medium">
                Add more items from Chuks Kitchen
              </p>
              <Button onClick={() => setStep(2)} title="Review Order" />
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <OrderSummary totalPrice={total} onClick={() => setStep(3)} />
      )}
      {step === 3 && <DeliveryDetails onClick={() => setStep(4)} />}
      {step === 4 && <PaymentOptions onClick={() => setStep(5)} />}
      {step === 5 && <CardOrderCompletion />}
    </main>
  );
}

export default MyOrders;
