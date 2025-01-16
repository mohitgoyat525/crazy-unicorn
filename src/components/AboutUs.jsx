import React from 'react'
import AboutUsImg from '../assets/images/webp/about-us-unicorn-img.webp'
import SubHeading from '../common/SubHeading';
import CustomDescription from '../common/CustomDescription';
import CustomButton from '../common/CustomButton';
import AboutStarImg from '../assets/images/png/about-us-right-img.png'
import AboutStarLeftImg from '../assets/images/png/about-star-left-img.png'
const AboutUs = () => {

  return (
    <div id='about' className="relative">
      <img
        src={AboutStarImg}
        alt="stars"
        className="absolute right-0 w-full max-w-[200px] top-0 star-animation max-sm:hidden"
      />
      <img
        src={AboutStarLeftImg}
        alt="stars"
        className="max-sm:hidden absolute left-0 w-full max-w-[200px] bottom-0 star-animation"
      />
      <div className="max-w-[1352px] mx-auto px-4 pt-[196px] max-2xl:pt-36 max-xlg:pt-[60px] max-md:py-0">
        <div className="flex item-center gap-[83px] max-xl:gap-16 max-xlg:gap-12 max-md:gap-16 max-lg:flex-wrap max-lg:justify-center">
          <div className="w-6/12 max-lg:w-full">
            <img
              src={AboutUsImg}
              alt="unicorns"
              className="w-full max-w-[661px] max-lg:mx-auto pointer-events-none"
            />
          </div>
          <div className="w-6/12 max-lg:w-full pt-[121px] max-2xl:pt-24 max-customxl:pt-20 max-xlg:pt-0 max-lg:relative max-lg:z-20">
            <SubHeading text="ABOUT US" myclass="!m-0 pb-6 max-xlg:!mx-auto" />
            <CustomDescription
              myClass="text-start max-xlg:text-center"
              text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. "
            />
            <CustomDescription
              myClass="pt-[10px] max-xlg:text-center"
              text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris."
            />
            <CustomButton
              text="mint now"
              myClass="mt-[53px] max-lg:mt-10 max-sm:mt-7 max-lg:!mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs

