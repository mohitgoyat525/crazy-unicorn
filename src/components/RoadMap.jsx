import React from "react";
import CustomDescription from "../common/CustomDescription";
import RoadmapImg from "../assets/images/png/roadmap-img.png";
import RoadmapMobileImg from "../assets/images/webp/roadmap-mobile.webp";
import SubHeading from "../common/SubHeading";
import { ROADMAP_LIST } from "../utils/helper";
import RightStars from "../assets/images/svg/roadmap-left-stars.svg";
import LeftStars from "../assets/images/svg/roadmap-right-stars.svg";

const RoadMap = () => {
  return (
    <div id="roadmap" className="pt-[231px] pb-[240px] px-5 overflow-hidden max-2xl:pt-48 max-xl:pt-20 max-sm:pt-[60px] max-2xl:pb-52 max-xl:pb-20 relative">
      <img
        className="absolute left-0 -top-10 max-2xl:max-w-96 max-xl:max-w-72 max-md:max-w-[198px] max-md:top-1/4 -z-[1] star-animation"
        src={RightStars}
        alt="start"
      />
      <img
        className="absolute right-0 bottom-0 max-2xl:max-w-60 max-xl:max-w-48 max-md:max-w-[198px] max-md:-bottom-10 -z-[1] star-animation"
        src={LeftStars}
        alt="start"
      />
      <div className="max-w-[1920px] mx-auto">
        <SubHeading text="RoadMap" />
        <div className="pt-[86px] relative flex flex-col justify-center items-center max-2xl:pt-20 max-xl:pt-16 max-lg:pt-14 max-md:pt-8 mx-4">
          <img
            className="max-lg:hidden max-w-[640px] w-full max-2xl:max-w-[580px] max-xl:max-w-[460px] pointer-events-none"
            src={RoadmapImg}
            alt="roadmap"
          />
          <img
            className="lg:hidden max-w-[343px] pointer-events-none"
            src={RoadmapMobileImg}
            alt="roadmap"
          />
          <div className="overflow-x-hidden">
            {ROADMAP_LIST.map((phase, i) => (
              <div
                key={i}
                className={`h-[629px] max-2xl:h-[580px] max-xl:h-[251px] pt-[127px] w-full max-w-[844px] max-2xl:max-w-[770px] max-xl:max-w-[650px] max-2xl:bg-contain bg-roadmap-clouds bg-no-repeat absolute flex justify-center items-center max-xl:pt-20 max-xl:justify-normal max-[575px]:justify-center ${
                  i === 0
                    ? "bg-roadmap-left-bg top-[6%] -left-28 max-2xl:-left-20 max-2xl:top-[8%] max-md:left-0 max-xl:bg-roadmap-left-mobile max-xl:top-[13%] max-lg:left-12 max-xl:left-36"
                    : i === 1
                    ? "bg-roadmap-right-bg top-[24%] -right-28 max-2xl:-right-12 max-md:right-0 max-xl:bg-roadmap-right-mobile max-md:pt-8 max-xl:top-[33%] max-lg:-right-24 max-xl:-right-8"
                    : i === 2
                    ? "bg-roadmap-left-bg top-[43%] -left-24 max-2xl:-left-16 max-md:left-0 max-xl:bg-roadmap-left-mobile max-xl:top-1/2 max-lg:left-12 max-xl:left-48"
                    : i === 3
                    ? "bg-roadmap-right-bg top-[60%] -right-24 max-2xl:-right-4 max-md:right-0 max-xl:bg-roadmap-right-mobile max-md:pt-8 max-xl:top-[69%] max-lg:-right-14 max-xl:-right-8"
                    : "bg-roadmap-left-bg top-[80%] -left-20 max-2xl:-left-12 max-md:left-[22px] max-xl:top-[87%] max-xl:bg-roadmap-left-mobile max-lg:left-12 max-xl:left-48"
                }`}
              >
                <div
                  className={`relative z-10 ${
                    i === 1 || i === 3
                      ? "pt-28 pl-20 max-2xl:pl-7 max-xl:pt-0 max-md:pl-0 max-md:pr-16 max-sm:pr-6 max-[768px]:top-[-18px] max-[768px]:relative"
                      : "pt-20 max-xl:pt-0 max-xl:pl-12 max-md:pl-6 max-sm:pl-6 max-md:pb-3.5 max-[768px]:top-[-18px] max-[768px]:relative"
                  }`}
                >
                  <h3
                    className={`text-custom-4xl max-md:text-2xl max-sm:text-xl max-md:pb-2 font-normal font-pinkyUnicorn pb-[10px] text-black max-lg:text-3xl ${
                      i === 1 || i === 3 ? "max-xl:text-end" : ""
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <CustomDescription
                    text={phase.description}
                    myClass="max-w-[580px] pt-1.5 max-2xl:pt-0.5 max-xl:hidden"
                  />
                  <CustomDescription
                    text={phase.description}
                    myClass={`max-w-[262px] !text-[11px] xl:hidden !leading-[15px] ${
                      i === 1 || i === 3 ? "text-right" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
