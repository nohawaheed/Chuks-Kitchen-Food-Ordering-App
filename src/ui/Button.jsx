import React from 'react'

function Button({title,weight = 'font-semibold',size = 'full'}) {
    const sizeClass = {
    sm: "btn--sm",
    md: "btn--md",
    lg: "btn--lg",
    full: "btn--full"
  }[size];
  return (
    <button className={`btn ${sizeClass} hover:cursor-pointer text-white bg-primary-orange ${weight} text-md`}>{title}</button>
  )
}

export default Button