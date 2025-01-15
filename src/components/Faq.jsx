import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper'
import { FaqArrowIcon } from '../utils/icons'
import SubHeading from '../common/SubHeading'
import StarsFirst from '../assets/images/webp/faq-stars-first.webp'

const Faq = () => {
  const [active, setActive] = useState(0)
  const toggle = i => {
    setActive(active === i ? null : i)
  }

  return (
    <div className='pb-[265px] max-lg:py-20 max-md:py-[60px] bg-faq-bg bg-center bg-cover relative'>
      <img src={StarsFirst} alt='stars' className='absolute left-0 top-[-40%]' />
      <div className='max-w-[1221px] mx-auto px-4'>
        <SubHeading text={'FAQs'} />
        <div className='flex flex-col gap-[35px] max-sm:gap-5 pt-[88px] max-lg:pt-12 max-md:pt-10'>
          {FAQ_LIST.map((obj, i) => (
            <div key={i} className={` ${active === i ? '' : ''}`}>
              <button
                onClick={() => toggle(i)}
                className={`flex items-center justify-between w-full font-pinkyUnicorn font-normal text-[40px] max-lg:text-4xl max-md:text-3xl max-md:leading-9 max-sm:text-[18px] max-sm:leading-[18px] leading-[46px] text-left ${
                  active === i ? 'pb-[10px]' : ''
                }`}
              >
                {obj.title}
                <span
                  className={`transition-all duration-300 ${
                    active === i ? 'rotate-180' : ''
                  }`}
                >
                  <FaqArrowIcon myClass={'max-sm:w-4'} />
                </span>
              </button>
              <p
                className={`max-w-[769px] font-normal text-[22px] max-md:text-base max-lg:text-xl max-sm:text-sm leading-[38.28px] transition-all duration-300 overflow-hidden text-black ${
                  active === i
                    ? 'max-h-32 border-b border-black pb-[22px] max-lg:pb-5 max-md:pb-3'
                    : 'max-h-0'
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
