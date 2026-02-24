import React from 'react'
import { Link } from 'react-router';

function AnchorBtn({to, title, outline = false}) {
  return (
    <Link className={`btn w-full text-white ${outline ? 'bg-transparent' : 'bg-primary-orange' } font-bold px-14.5 py-3.75 text-md`} to={to}>{title}</Link>
  )
}

export default AnchorBtn