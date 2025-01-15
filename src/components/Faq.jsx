import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper'
import { FaqArrowIcon } from '../utils/icons'

const Faq = () => {
  const [active, setActive] = useState(0)
  const toggle = i => {
    setActive(active === i ? null : i)
  }

  return (
    <div className='pt-[147px]'>
      <div className='max-w-[1174px] mx-auto px-4'>
        
        <div className='max-w-[1221px] mx-auto flex flex-col gap-[35px] max-sm:gap-4'>
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 max-sm:p-4 ${
                active === i ? '' : ''
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className={`flex items-center justify-between w-full font-pinkyUnicorn font-normal text-[40px] leading-[46px] ${
                  active === i ? 'pb-4' : ''
                }`}
              >
                {obj.title}
                <span
                  className={`transition-all duration-300 ${
                    active === i ? 'rotate-180' : ''
                  }`}
                >
                  <FaqArrowIcon />
                </span>
              </button>
              <p
                className={`max-w-[831px] font-normal text-[22px] leading-[38.28px] transition-all duration-300 overflow-hidden max-sm:overflow-y-auto text-black ${
                  active === i ? 'max-h-32' : 'max-h-0'
                }`}
              >
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
