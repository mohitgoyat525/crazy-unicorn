import React from "react";

const CustomButton = ({ title, className }) => {
  return (
    <button
      className={`${className} lg:py-[17px] md:py-3 py-2 xl:px-12 lg:px-10 md:px-8 px-6 rounded-xl border border-black bg-white lg:text-[35px] !leading-[115%]`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
