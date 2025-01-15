import React from 'react'
import AboutUsImg from '../assets/images/webp/about-us-unicorn-img.webp'
import SubHeading from '../common/SubHeading';
import CustomDescription from '../common/CustomDescription';
import CustomButton from '../common/CustomBtn';

const AboutUs = () => {
  return (
    <div className="max-w-[1352px] mx-auto px-4 pt-[221px]">
      <div className="flex gap-[83px] max-customxl:gap-16 max-xlg:gap-12 max-md:gap-8 max-sm:gap-5">
        <div className="w-6/12 max-lg:w-full">
          <img
            src={AboutUsImg}
            alt="unicorns"
            className="w-full max-w-[661px]"
          />
        </div>
        <div className="w-6/12 max-lg:w-full">
          <SubHeading text="ABOUT US" myclass="!m-0 pb-6" />
          <CustomDescription
            myClass="text-start"
            text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. "
          />
          <CustomDescription
            myClass="pt-[10px]"
            text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris."
          />
          <div className="border-linear-gradient max-w-max rounded-xl ml-2 max-xl:mx-auto mt-[53px]">
            <CustomButton
              className="uppercase md:-translate-x-2 -translate-x-1 md:-translate-y-2 -translate-y-1 !bg-white"
              title="mint now"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs