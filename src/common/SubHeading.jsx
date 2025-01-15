import React from 'react'
import HeadingHorse from '../assets/images/webp/sub-heading-horse.webp'

const SubHeading = ({ text, myclass }) => {
  return (
    <h2
      className={`${myclass} font-pinkyUnicorn text-[70px] max-md:text-4xl max-sm:text-3xl max-sm:leading-8 max-md:leading-10 leading-[80.53px] text-center max-w-max mx-auto relative`}
    >
      {text}
      <img
        src={HeadingHorse}
        alt='horse'
        className='absolute pointer-events-none h-[84px] w-[118px] max-md:w-[90px] max-sm:w-[60px] max-sm:h-[50px] max-md:h-[70px] -right-[53px] -top-[40px] max-md:-right-[35px] max-md:-top-[45px] max-sm:-top-[33px] max-sm:-right-[30px]'
      />
    </h2>
  )
}

export default SubHeading


