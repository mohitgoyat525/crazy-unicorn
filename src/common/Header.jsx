import React, { useEffect, useState } from 'react'
import headerLogo from '../assets/images/svg/header-logo-icon.svg'
import { NAVBAR_LIST } from '../utils/helper';

const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const handler = () => {
        setIsOpen(!isOpen);
      };
      useEffect(() => {
        const handleOverflow = () => {
          if (isOpen && window.innerWidth < 1024) {
            document.body.classList.add("overflow-hidden");
          } else {
            document.body.classList.remove("overflow-hidden");
          }
        };

        handleOverflow();
        window.addEventListener("resize", handleOverflow);

        return () => {
          document.body.classList.remove("overflow-hidden");
          window.removeEventListener("resize", handleOverflow);
        };
      }, [isOpen]);
  return (
    <nav className="flex items-center justify-between">
      <a href="/">
        <img src={headerLogo} alt="logo" className="pt-[6px]" />
      </a>
      <div
        className={`flex items-center gap-4 max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-black max-lg:z-[90] transition-transform duration-300 ${
          isOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"
        }`}
      >
        <ul className="flex items-center gap-9 max-lg:flex-col max-lg:gap-6">
          {NAVBAR_LIST.map((obj, i) => (
            <li key={i}>
              <a
                href={obj.link}
                onClick={handler}
                className="text-[22px] leading-[25px] font-normal text-black transition-all ease-linear duration-300 font-pinkyUnicorn"
              >
                {obj.name}
              </a>
            </li>
          ))}
          <li className='lg:hidden'>icon</li>
        </ul>
      </div>
      <div className="flex items-center gap-4 max-lg:hidden">icon</div>
      <button
        onClick={handler}
        className="flex flex-col justify-center items-center z-[100] gap-1 lg:hidden relative size-6"
      >
        <span
          className={`h-1 w-full bg-black rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </button>
    </nav>
  );
}

export default Header