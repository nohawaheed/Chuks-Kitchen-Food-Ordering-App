import React from 'react'
import Logo from '../../ui/Logo'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className='bg-blended-brown text-white py-24 px-15 md:px-27.5'>
      <div className='flex flex-wrap gap-15 md:gap-25.25'>
        <div className='max-w-57.25'>
          <img src="./images/chuks-kitchen.webp" alt="chucks kitchen logo" />
          <p className='font-jost text-xl'>
            Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
          </p>
        </div>
        <ul className='font-poppins text-xs'>
          <h4 className='font-jost text-xl'>Quick Links</h4>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/explore'>Explore</Link>
          </li>
          <li>
            <Link to='/my-order'>My Order</Link>
          </li>
          <li>
            <Link to='/account'>Account</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <ul>
          <h4 className='font-jost text-xl'>Contact Us</h4>
          <li>
            <Link to="tel:+2348012345678">+234 801 234 5678</Link>
          </li>
          <li>
            <Link to="mailto:hello@chukskitchen.com">hello@chukskitchen.com</Link>
          </li>
          <li>
            123 Taste Blvd, Lagos, Nigeriat
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
      <p className='copywrite mt-13'>© 2020 Lift Media. All rights reserved.</p>
    </footer>
  )
}

export default Footer