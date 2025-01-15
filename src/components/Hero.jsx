import React from 'react'
import Header from '../common/Header'
import HeroImg from '../assets/images/png/crazy-unicorm-hero-img.png'
import StarLeftImg from '../assets/images/png/hero-stars-img-left.png'
import StarRightImg from '../assets/images/png/hero-stars-img-right.png'
import CloudImg from '../assets/images/png/cloud-img.png'
import HorseImg from '../assets/images/png/hero-uniconrn-img.png'

const Hero = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-hero-bg relative overflow-hidden max-md:h-screen">
      <div className="max-w-[1361px] mx-auto px-4">
        <Header />
      </div>
      <img
        src={StarLeftImg}
        alt="starImg"
        className="absolute left-0 w-[150px] sm:w-[200px] md:w-[265px] star-animation top-[100px] max-md:top-4 pointer-events-none"
      />
      <img
        src={StarRightImg}
        alt="starImg"
        className="absolute right-0 w-[200px] sm:w-[250px] md:w-[390px] bottom-0 z-30 star-animation max-sm:hidden pointer-events-none"
      />
      <div className="relative pt-[165px] max-xlg:pt-[120px] max-lg:pt-20 max-md:pt-10">
        <img
          src={CloudImg}
          alt="cloud"
          className="w-full absolute h-[150px] sm:h-[200px] md:h-[333px] bottom-0 pointer-events-none"
        />
        <div className="flex items-center justify-center flex-col relative">
          <img
            src={CloudImg}
            alt="cloud"
            className="w-full absolute h-[150px] sm:h-[200px] md:h-[333px] top-[25%] md:top-[29%] cloud-animation-right pointer-events-none"
          />
          <img
            src={HeroImg}
            alt="hero-img"
            className="w-full sm:w-[90%] md:max-w-[1130px]  max-xlg:max-w-none relative pointer-events-none"
          />
          <img
            src={HorseImg}
            alt="horse-img"
            className="absolute w-full max-w-[600px] max-md:max-w-[400px] max-lg:max-w-[450px] pointer-events-none max-sm:h-[101px] max-customxl:h-[258px] max-xlg:h-[230px] max-lg:h-[200px] max-md:h-[170px] max-sm:max-w-[200px] z-30 h-[288px] bottom-[14%] max-md:bottom-[16%]
"
          />
          <img
            src={CloudImg}
            alt="cloud"
            className="w-full absolute h-[150px] sm:h-[200px] md:h-[333px] bottom-0 cloud-animation pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero