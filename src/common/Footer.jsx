import React from 'react'
import FooterLogo from '../assets/images/webp/footer-logo.webp'

const Footer = () => {
  return (
    <div className='bg'>
      <div className=''>
        <h2 className='font-pinkyUnicorn text-[70px] leading-[105px] text-center'>
          Sign up for the latest news
        </h2>
        <p className='text-[22px] leading-[38px] text-center'>
          Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed
          aenean egestas ut sit.
        </p>
        <form action=''>
          <input type='text' />
        </form>
        <img src={FooterLogo} alt='footer-logo' className='max-w-[172px] pt-[287px] mx-auto' />
      </div>
    </div>
  )
}

export default Footer
