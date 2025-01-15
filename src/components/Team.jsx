import React from 'react'
import SubHeading from '../common/SubHeading'
import { TEAM_DATA_LIST } from '../utils/helper'

const Team = () => {
  return (
    <div className='pt-[83px] pb-[100px]'>
      <div className='max-w-[1353px] mx-auto px-4'>
        <SubHeading text={'Team'} />
        <div className='flex items-center justify-center gap-6 max-xl:flex-wrap pt-[190px] max-lg:pt-20'>
          {TEAM_DATA_LIST.map((obj, i) => (
            <div
              className='px-[56px] rounded-[25px] group pb-5 text-center bg-white pink-border'
              key={i}
            >
              <div className='rounded-[25px]'>
                <img
                  className='pointer-events-none max-w-[312px] mx-auto -mt-9 transition-all ease-in-out duration-300'
                  src={obj.image}
                  alt='team-image'
                />
                <h2 className='text-center font-pinkyUnicorn text-[40px] leading-[46px] pb-[13px] pt-7'>
                  {obj.title}
                </h2>
              </div>
              <p className='text-center text-[22px] leading-[38px]'>
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
