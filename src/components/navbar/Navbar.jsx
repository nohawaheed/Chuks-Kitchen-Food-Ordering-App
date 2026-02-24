import React, { useState } from 'react'
import Logo from '../../ui/Logo'
import Button from '../../ui/Button'
import NavItem from './../../ui/NavItem';
import AnchorBtn from '../../ui/AnchorBtn';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
      <>
        <nav className='flex items-center justify-between gap-11.25 min-h-10.25 px-4.75 xl:px-12 py-0 xl:py-4.5 fixed top-0 start-0 end-0 z-20 bg-white'>
          <div className='min-w-27 xl:min-w-45.75'>
            <Logo />
          </div>
          {/* Desktop Navigation */}
          <ul className='hidden xl:flex justify-between items-center gap-2.5 2xl:min-w-227.75'>
            <NavItem to="/" title="Home"/>
            <NavItem to="/explore" title="Explore"/>
            <NavItem to="/my-orders" title="My Order"/>
            <NavItem to="/account" title="Account"/>
          </ul>
          <div className='hidden xl:flex'>
            <AnchorBtn to="/login" title="Login"/>
          </div>
          <img onClick={() => setIsOpen(true)} aria-label="Open menu" className='flex xl:hidden cursor-pointer' src="./images/menu.svg" alt="menu" />
        </nav>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 xl:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 start-0 end-0 z-40 bg-white xl:hidden transform transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between px-4.75 py-4 border-b border-stroke">
            <Logo />
            <button className='cursor-pointer' onClick={() => setIsOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </div>

          <ul className="flex flex-col gap-4 px-4.75 py-6">
            <NavItem to="/" title="Home" onClick={() => setIsOpen(false)} />
            <NavItem to="/explore" title="Explore" onClick={() => setIsOpen(false)} />
            <NavItem to="/my-orders" title="My Order" onClick={() => setIsOpen(false)} />
            <NavItem to="/account" title="Account" onClick={() => setIsOpen(false)} />
          </ul>

          <div className="px-4.75 pb-6 w-full">
            <AnchorBtn to="/login" title="Login" />
          </div>
        </div>
      </>
  )
}

export default Navbar