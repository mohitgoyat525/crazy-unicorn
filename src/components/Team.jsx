import React from 'react'
import SubHeading from '../common/SubHeading'
import StarsImage from '../assets/images/webp/team-stars.webp'
import { TEAM_LIST } from '../utils/helper'

const Team = () => {
  return (
    <div className='pt-[749px] pb-[100px] max-lg:py-[60px] relative'>
      <img
        src={StarsImage}
        alt='star-image'
        className='absolute right-0 top-28 -z-10 star-animation max-md:hidden pointer-events-none'
      />
      <div className='max-w-[1353px] mx-auto px-4'>
        <SubHeading text={'Team'} />
        <div className='flex gap-[23.64px] max-sm:gap-8 max-lg:flex-wrap max-xl:justify-center max-xl:px-5 pt-[190px] max-lg:pt-[125px] max-md:pt-[60px] max-sm:pt-10'>
          {TEAM_LIST.map((obj, i) => (
            <div
              key={i}
              className='max-w-[424px] max-md:max-w-[350px] max-sm:w-[240px] cursor-pointer p-[1px] bg-team-card w-full rounded-[25px] group hover:scale-y-110 origin-bottom transition-all duration-300'
            >
              <div className='bg-white justify-center items-center flex flex-col pb-5 rounded-[25px]'>
                <img
                  className='max-w-[312px] max-md:max-w-[250px] max-sm:w-[160px] -mt-9 max-md:-mt-7 max-sm:-mt-5 group-hover:scale-[1.20] max-md:group-hover:scale-[1] origin-bottom transition-all duration-300 pointer-events-none'
                  src={obj.image}
                  alt='team-image'
                />
                <h3 className='text-custom-4xl font-pinkyUnicorn max-lg:text-4xl max-md:text-3xl max-sm:text-2xl text-center leading-[46px]'>
                  {obj.title}
                </h3>
                <p className='text-custom-2xl max-md:text-base leading-[38px] max-sm:text-sm  pt-[13px] max-lg:pt-2'>
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
