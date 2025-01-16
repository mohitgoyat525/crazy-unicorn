import React, { useEffect, useState } from 'react'
import { FAQ_LIST } from '../utils/helper'
import { FaqArrowIcon } from '../utils/icons'
import SubHeading from '../common/SubHeading'
import StarsFirst from '../assets/images/webp/faq-stars-first.webp'
import StarsSecond from '../assets/images/webp/faq-stars-second.webp'
import AOS from "aos";
const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);
  const [active, setActive] = useState(0)
  const toggle = i => {
    setActive(active === i ? null : i)
  }

  return (
    <div
      id="faqs"
      className="pb-[265px] pt-[107px] max-lg:py-[60px] max-sm:py-10 relative"
    >
      <img
        src={StarsFirst}
        alt="stars"
        className="absolute left-0 top-[-20%] -z-10 max-md:h-[400px] star-animation pointer-events-none"
      />
      <img
        src={StarsSecond}
        alt="stars"
        className="absolute right-0 top-24 -z-10 max-md:h-[400px] star-animation pointer-events-none"
      />

      <div className="max-w-[1221px] mx-auto px-4">
        <SubHeading text={"FAQs"} />
        <div
          className="flex flex-col gap-[35px] max-sm:gap-5 pt-[88px] max-lg:pt-12 max-md:pt-10"
          data-aos="zoom-in"
        >
          {FAQ_LIST.map((obj, i) => (
            <div key={i} className={` ${active === i ? "" : ""}`}>
              <button
                onClick={() => toggle(i)}
                className={`flex items-center justify-between w-full font-pinkyUnicorn font-normal text-custom-4xl max-lg:text-4xl max-md:text-3xl max-md:leading-9 max-sm:text-xl max-sm:leading-[28px] leading-[46px] text-left ${
                  active === i ? "pb-[10px]" : ""
                }`}
              >
                {obj.title}
                <span
                  className={`transition-all duration-300 ${
                    active === i ? "rotate-180" : ""
                  }`}
                >
                  <FaqArrowIcon myClass={"max-sm:w-4"} />
                </span>
              </button>
              <p
                className={`max-w-[769px] font-normal text-custom-2xl max-md:text-base max-lg:text-xl max-sm:text-base leading-[38.28px] transition-all duration-300 overflow-hidden text-black ${
                  active === i
                    ? "max-h-32 border-b border-black border-opacity-30 pb-[22px] max-lg:pb-5 max-md:pb-3"
                    : "max-h-0"
                }`}
              >
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq
