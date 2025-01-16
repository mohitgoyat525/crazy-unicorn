import React from 'react'
import AboutUsImg from '../assets/images/webp/about-us-unicorn-img.webp'
import SubHeading from '../common/SubHeading';
import CustomDescription from '../common/CustomDescription';
import CustomButton from '../common/CustomBtn';
import AboutStarImg from '../assets/images/png/about-us-right-img.png'
import AboutStarLeftImg from '../assets/images/png/about-star-left-img.png'
const AboutUs = () => {
  return (
    <div className="relative">
      <img
        src={AboutStarImg}
        alt="stars"
        className="absolute right-0 w-full max-w-[200px] top-0 star-animation max-sm:hidden"
      />
      <img src={AboutStarLeftImg} alt="stars"  className='max-sm:hidden absolute left-0 w-full max-w-[200px] bottom-0 star-animation'/>
      <div className="max-w-[1352px] mx-auto px-4 py-[221px] max-2xl:py-36 max-xlg:py-28 max-md:py-20 max-sm:py-10">
        <div className="flex item-center gap-[83px] max-customxl:gap-16 max-xlg:gap-12 max-md:gap-16 max-lg:flex-wrap max-lg:justify-center">
          <div className="w-6/12 max-lg:w-full">
            <img
              src={AboutUsImg}
              alt="unicorns"
              className="w-full max-w-[661px] max-lg:mx-auto"
            />
          </div>
          <div className="w-6/12 max-lg:w-full">
            <SubHeading text="ABOUT US" myclass="!m-0 pb-6 max-xlg:!mx-auto" />
            <CustomDescription
              myClass="text-start max-xlg:text-center"
              text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. "
            />
            <CustomDescription
              myClass="pt-[10px] max-xlg:text-center"
              text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris."
            />
            <div className="border-linear-gradient max-w-max rounded-xl ml-2 max-xl:mx-auto mt-[53px] max-xlg:mx-auto">
              <CustomButton
                className="uppercase md:-translate-x-2 -translate-x-1 md:-translate-y-2 -translate-y-1 !bg-white"
                title="mint now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs