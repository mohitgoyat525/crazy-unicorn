import React from "react";
import CustomDescription from "../common/CustomDescription";
import RoadmapImg from "../assets/images/png/roadmap-img.png";
import SubHeading from "../common/SubHeading";
import { ROADMAP_LIST } from "../utils/helper";
import UnicornImg from '../assets/images/png/roadmap-unicorn-img.png'

const RoadMap = () => {
  return (
    <div className="relative">
      <SubHeading
        text="ROADMAP"
        myclass="pb-[80px] max-md:pb-[40px] max-sm:pb-5"
      />
      <div className="max-w-[1405px] mx-auto relative pt-24 px-4 max-md:pt-0 max-sm:pt-6">
        <img
          src={RoadmapImg}
          alt="roadmap"
          className="absolute left-[50%] pointer-events-none top-[78%] max-lg:hidden max-xlg:top-[58%] translate-x-[-50%] translate-y-[-50%] max-md:hidden"
        />
        <img
          src={RoadmapImg}
          alt="roadmap"
          className="lg:hidden pointer-events-none absolute left-0 w-full opacity-20 max-md:max-w-full max-md:h-auto max-md:top-0 max-md:hidden"
        />
        <div className="flex flex-col gap-8 max-md:gap-6 max-md:items-center relative">
          <div className="hidden max-md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 transform -translate-x-1/2"></div>
          {ROADMAP_LIST.map((phase, index) => (
            <div
              key={index}
              className={`w-full max-w-[451px] max-2xl:max-w-[390px] max-lg:my-5 max-md:my-3 max-lg:ml-auto max-2xl:relative max-2xl:z-20 bg-transparent max-md:max-w-[90%] max-md:bg-white max-md:rounded-lg max-md:shadow-md max-md:p-4 ${
                index % 2 !== 0 ? "ml-auto max-md:ml-0" : "max-md:ml-0"
              }`}
            >
              <div className="hidden max-md:block size-4 rounded-full absolute -left-6 top-2">
                <img src={UnicornImg} alt="horse"className="w-full max-w-[30px]"/>
              </div>
              <h3 className="text-custom-4xl max-md:text-xl max-sm:text-lg max-md:pb-2 font-normal font-pinkyUnicorn pb-[10px] text-black">
                {phase.title}
              </h3>
              <CustomDescription
                myClass="max-md:text-sm max-sm:text-xs"
                text={phase.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
