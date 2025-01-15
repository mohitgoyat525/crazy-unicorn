import React from 'react'
import FooterLogo from '../assets/images/webp/footer-logo.webp'
import { SOCIAL_LINKS } from '../utils/helper'
import { MailIcon } from '../utils/icons'

const Footer = () => {
  return (
    <div className='flex items-center flex-col justify-center'>
      <div className=''>
        <h2 className='font-pinkyUnicorn text-[70px] leading-[105px] text-center'>
          Sign up for the latest news
        </h2>
        <p className='text-[22px] leading-[38px] text-center'>
          Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed
          aenean egestas ut sit.
        </p>
        <form>
          <input type='text' className='outline-none' />
          <MailIcon />
        </form>
        <a href='#footerlogo'>
          <img
            src={FooterLogo}
            alt='footer-logo'
            className='max-w-[172px] pt-[287px] mx-auto pointer-events-none'
          />
        </a>
        <div className='flex items-center gap-[21px] justify-center pt-[60px]'>
          {SOCIAL_LINKS.map((obj, i) => (
            <a
              className='hover:scale-110 duration-300 transition-all'
              href={obj.link}
              target='_blank'
            >
              <div>{obj.social}</div>
            </a>
          ))}
        </div>
        <p className='text-center text-xl leading-[23px] opacity-70 py-[63px]'>
          Copyright@CrazyUnicorn.com
        </p>
      </div>
    </div>
  )
}

export default Footer
