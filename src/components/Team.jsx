import React from 'react'
import SubHeading from '../common/SubHeading'
import { TEAM_DATA_LIST } from '../utils/helper'

const Team = () => {
  return (
    <div className='pt-[83px] pb-[100px] max-lg:py-[60px]'>
      <div className='max-w-[1353px] mx-auto px-4'>
        <SubHeading text={'Team'} />;
        <div className='flex gap-[23.64px] max-xl:flex-wrap max-xl:justify-center max-xl:px-5'>
          {TEAM_DATA_LIST.map((obj, i) => (
            <div
              key={i}
              className='max-w-[424px] group hover:scale-y-110 cursor-pointer origin-bottom transition-all duration-300 p-[1px] bg-gradient-to-r from-purple to-dark-purple w-full rounded-[25px]'
            >
              <div className='bg-white justify-center items-center flex flex-col pb-5 rounded-[25px]'>
                <img
                  className='max-w-[312px] -mt-9 group-hover:scale-[1.20] origin-bottom transition-all duration-300'
                  src={obj.image}
                  alt='team-image'
                />
                <h3 className='text-custom-4xl font-pinkyUnicorn max-lg:text-4xl max-md:text-3xl max-sm:text-2xl text-center'>
                  {obj.title}
                </h3>
                <p className='text-custom-2xl leading-[38px]'>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
