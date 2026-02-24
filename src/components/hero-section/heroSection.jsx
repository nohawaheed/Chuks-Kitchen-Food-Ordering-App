import React from 'react'
import Button from '../../ui/Button'

function heroSection({title, paragraph, image, buttonTitle = '', heading = 'h1', variant = 'default'}) {
    const heroPresets = {
    "default": {
      section: 'h-196.5 md:h-235.25',
      heading: ' font-bold md:max-w-165.5',
      paragraph: 'text-page-heading font-medium md:font-bold',
      textGroup: 'md:max-w-230.5'
    },
    "hero--md": {
      section: 'h-164 md:h-152.5',
      heading: 'w-full font-extrabold',
      paragraph: 'text-medium-body font-semibold md:max-w-158'
    },
    "hero--sm": {
      section: 'h-124 md:h-173.25',
      heading: 'w-full font-extrabold',
      paragraph: 'text-small-title font-semibold md:max-w-158'
    }
  }[variant]
  const HeadingTag = heading;
  return (
    <main className={`relative w-full bg-cover bg-center px-5 md:px-12 ${heroPresets.section}`} style={{ backgroundImage: `url(${image})` }}>
      <div className={`relative z-10 flex flex-col justify-center gap-5 md:gap-10.5 h-full ${heroPresets.textGroup} md:px-12 text-white`}>
        <HeadingTag className={`text-page-title ${heroPresets.heading}`}>{title}</HeadingTag>
        <p className={`${heroPresets.paragraph}`}>{paragraph}</p>
        {buttonTitle &&  <Button title={buttonTitle} size='lg'/>}
      </div>
      <div className="absolute inset-0 bg-overlay"></div>
    </main>
  )
}

export default heroSection