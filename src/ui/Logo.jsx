import React from 'react';
import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/">
      <picture>
        <source
          srcSet="./images/chuks-kitchen.webp"
          media="(min-width: 1280px)"
          className="w-full max-w-165.25 min-h-265.25 mt-22.5"
        />
        <img
          src="./images/chuks-kitchen-mobile.webp"
          alt="chucks kitchen logo"
          className="w-full h-full"
        />
      </picture>
    </Link>
  )
}

export default Logo