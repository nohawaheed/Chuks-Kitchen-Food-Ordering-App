import React from 'react'
import { NavLink } from 'react-router'

function NavItem({to, title}) {
  return (
    <NavLink className={({ isActive }) => `min-w-45 2xl:min-w-53.75 font-medium  ${isActive ? 'text-primary-orange' : 'text-charcoal-black-text'}`} to={to}>{title}</NavLink>
  )
}

export default NavItem