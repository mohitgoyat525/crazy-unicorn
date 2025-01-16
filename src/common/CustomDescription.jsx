import React from 'react'

const CustomDescription = ({ text, myClass }) => {
  return (
    <p
      className={`font-normal text-custom-2xl text-black leading-[38px] max-md:text-xl max-sm:text-lg ${myClass}`}>
      {text}
    </p>
  );
};

export default CustomDescription