 import React from 'react'
import Button from '../../ui/Button'

 function SpecialItemCard({title, description, image, price}) {
   return (
      <div className="card card--special">
        <img src={image} alt={title} className='w-full' />
        <div className='card__text-group'>
          <h3 className="special-card__title">{title}</h3>
          <p className="special-card__desc">{description}</p>
        </div>
        <div className="special-card__action">
          <span className='text-primary-orange'>₦{price}</span>
          <Button title='Add to cart' size='sm'/>
        </div>
      </div>
   )
 }

 export default SpecialItemCard