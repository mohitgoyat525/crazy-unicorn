import React from "react";
import CustomDescription from "../common/CustomDescription";
import RoadmapImg from "../assets/images/png/roadmap-img.png";
import SubHeading from "../common/SubHeading";
import { ROADMAP_LIST } from "../utils/helper";

const RoadMap = () => {
  return (
    <div className="relative">
      <SubHeading text="ROADMAP" myclass="pb-[80px] max-md:pb-[40px] max-sm:pb-5" />
      <div className="max-w-[1405px] mx-auto relative pt-24 px-4 max-md:pt-12 max-sm:pt-6">
        <img
          src={RoadmapImg}
          alt="roadmap"
          className="absolute left-[50%] top-[78%] max-lg:hidden max-xlg:top-[58%] translate-x-[-50%] translate-y-[-50%] max-md:hidden"
        />
        <img
          src={RoadmapImg}
          alt="roadmap"
          className="lg:hidden absolute left-0 w-full max-w-[400px] max-md:max-w-[300px] mx-auto"
        />
        <div className="flex flex-col gap-8 max-md:gap-6">
          {ROADMAP_LIST.map((phase, index) => (
            <div
              key={index}
              className={`w-full max-w-[451px] max-2xl:max-w-[390px] max-lg:my-5 max-lg:ml-auto max-2xl:relative max-2xl:z-20 bg-transparent max-md:max-w-full ${
                index % 2 !== 0 ? "ml-auto" : ""
              }`}
            >
              <h3 className="text-custom-4xl max-md:text-2xl max-sm:text-xl max-md:pb-2 font-normal font-pinkyUnicorn pb-[10px] text-black">
                {phase.title}
              </h3>
              <CustomDescription
                myClass="max-md:text-base max-sm:text-sm"
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
