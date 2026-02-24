import React from 'react'

function FoodDetailList({id, title, items}) {
  const style = {
    default: 'flex gap-[8.39px] items-center before:w-7 before:h-7 before:ring-inset px-2.75 py-2 rounded-lg ring-[1px] ring-inset ring-stroke',
    coloredRing: 'before:content-[""] before:rounded-[13px] xl:boreder:rounded-[16.56px] before:ring-[5.04px] before:ring-primary-orange before:bg-white before:p-[5.04px]',
    simpleRing: 'before:content-[""] before:ring-stroke before:ring-[1px] before:rounded-xl'
  }
  return (
    <ul className='flex flex-col gap-4.75 py-2.5'>
      <li>
        <h2 className='text-big-title font-semibold md:font-medium'>{title}</h2>
      </li>
      {items.map((item) =>
        <li className={`${style.default} ${id === 1 ? style.coloredRing : style.simpleRing}`}>
          {item.choice}
          <span className='ms-auto'>{item.price}</span>
        </li>
      )}
    </ul>
  )
}

export default FoodDetailList