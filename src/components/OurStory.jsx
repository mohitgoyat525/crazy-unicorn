import React, { useEffect } from "react";
import SubHeading from "../common/SubHeading";
import CustomDescription from "../common/CustomDescription";
import RightStars from "../assets/images/png/our-story-star-left.png";
import AOS from "aos";

const OurStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      id="story"
      className="pt-[157px] relative max-2xl:pt-28 max-xlg:pt-24 max-lg:pt-20 max-md:py-16 max-sm:py-10 "
    >
      <img
        src={RightStars}
        alt="stars"
        className="w-full max-w-[200px] absolute left-0 top-0 star-animation max-sm:hidden"
      />
      <div className="max-w-[1361px] mx-auto px-4">
        <SubHeading text="Our Story" />
        <div className="pt-[22px]">
          <CustomDescription
            myClass="text-center"
            text="Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante."
          />
          <CustomDescription
            myClass="text-center"
            text="Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet, sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed amet. At bibendum egestas in maecenas."
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
