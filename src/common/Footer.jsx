import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FooterLogo from '../assets/images/webp/footer-logo.webp'
import { SOCIAL_LINKS } from '../utils/helper'
import { MailIcon } from '../utils/icons'
import CustomButton from './CustomButton'
import StarFirst from '../assets/images/webp/footer-stars-first.webp'
import StarSecond from '../assets/images/webp/footer-stars-second.webp'
import Rainbow from '../assets/images/webp/footer-rainbow.webp'
import Cloud from '../assets/images/webp/footer-cloud.webp'
import SecondCloud from '../assets/images/webp/footer-second-cloud.webp'
import ThirdCloud from '../assets/images/webp/footer-third-cloud.webp'

const Footer = () => {
  const [formValue, setFormValue] = useState({
    email: ''
  })
  const SERVICE_ID = 'service_7hygphk'
  const TEMPLATE_ID = 'template_bj6dsyy'
  const USER_ID = 'WQwoCN3QeNexwmXQ_'

  const handleSubmit = e => {
    e.preventDefault()
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formValue, USER_ID)
      .then(() => {
        toast.success('Submit Successfully')
        setFormValue({ email: '' })
      })
      .catch(error => {
        toast.error('Submission Failed')
        console.error('Error:', error)
      })
  }
  return (
    <footer className='flex items-center flex-col justify-center max-lg:pt-[60px] max-sm:pt-0 relative overflow-hidden'>
      <img
        src={StarFirst}
        alt='stars'
        className='absolute bottom-[250px] left-0 -z-10 max-md:h-[300px] star-animation pointer-events-none'
      />
      <img
        src={StarSecond}
        alt='stars'
        className='absolute bottom-0 left-0 -z-10 max-md:w-[300px] star-animation pointer-events-none'
      />
      <img
        src={Rainbow}
        alt='rainbow'
        className='absolute right-0 bottom-10 h-[667px] max-md:h-[300px] star-animation -z-10 pointer-events-none'
      />
      <img
        src={Cloud}
        alt='clouds'
        className='absolute h-[303px] bottom-20 right-0 cloud-animation -z-10 pointer-events-none max-md:!h-[100px]'
      />
      <img
        src={SecondCloud}
        alt='clouds'
        className='absolute h-[241px] bottom-40 right-0 cloud-animation-right -z-10 pointer-events-none opacity-50 max-md:!h-[100px]'
      />
      <img
        src={ThirdCloud}
        alt='clouds'
        className='absolute h-[347px] bottom-40 right-0 cloud-animation-right -z-10 pointer-events-none opacity-50 max-md:!h-[100px]'
      />
      <div className='max-w-[856px] mx-auto px-4'>
        <ToastContainer />
        <h2 className='font-pinkyUnicorn text-custom-7xl leading-[105px] text-center max-md:text-4xl max-sm:text-3xl max-sm:leading-8 max-md:leading-10'>
          Sign up for the latest news
        </h2>
        <p className='text-custom-2xl leading-[38px] text-center max-md:text-lg pb-[33px] max-lg:pb-5 max-sm:pb-3 max-w-[659px] mx-auto max-sm:pt-1'>
          Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed
          aenean egestas ut sit.
        </p>
        <div className='bg-gradient-to-r from-purple to-dark-purple rounded-[10px] max-w-[523px] mx-auto p-[1px]'>
          <form
            onSubmit={handleSubmit}
            action='#'
            className='bg-white py-2 pl-[19px] pr-[9px] rounded-[10px] w-full flex items-center'
          >
            <MailIcon />
            <input
              required
              value={formValue.email}
              onChange={e =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              id='email'
              type='email'
              placeholder='Your email'
              className='px-[9px] h-full w-[60%] py-[15px] outline-none'
            />
            <CustomButton
              text='subscribe'
              buttonClass='!py-[9px] !mt-1 max-sm:!px-4 !px-[28.6px] !text-[25px] max-sm:!text-xl !leading-[28.76px]'
              myClass='!h-[50px] !w-[156px] max-sm:!w-[115px] !ml-auto'
            />
          </form>
        </div>
        <a href='/'>
          <img
            src={FooterLogo}
            alt='footer-logo'
            className='max-w-[172px] max-sm:max-w-[100px] pt-[287px] max-lg:pt-[200px] max-md:pt-[140px] max-sm:pt-20 mx-auto pointer-events-none'
          />
        </a>
        <div className='flex items-center gap-[21px] max-md:gap-4 justify-center pt-[60px] max-lg:pt-10 max-md:pt-6'>
          {SOCIAL_LINKS.map((obj, i) => (
            <a key={i}
              className='hover:scale-110 duration-300 transition-all'
              href={obj.link}
              target='_blank'
            >
              <div key={i}>{obj.social}</div>
            </a>
          ))}
        </div>
        <p className='text-center text-xl max-md:text-base leading-[23px] opacity-70 py-[63px] max-lg:py-10 max-md:py-5 max-sm:py-4'>
          Copyright@CrazyUnicorn.com
        </p>
      </div>
    </footer>
  )
}

export default Footer
