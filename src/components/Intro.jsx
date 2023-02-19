import React from "react";
import IntroMobileIcon from "../assets/images/image-web-3-mobile.jpg";

export const Intro = () => {
  return (
    <div className="mt-8 lg:col-span-2 lg:mt-0 lg:content-between lg:grid">
      <img src={IntroMobileIcon} alt="Web 3 Image" className="w-full lg:object-fill lg:h-72" />
      <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:items-center md:gap-x-8 gap-y-4 mt-6">
        <h1 className="font-extrabold text-[2.75rem] leading-[3rem] text-neutral-very-dark-blue md:row-span-3 md:text-[3.5rem] md:leading-[3.5rem]">
          The Bright Future of Web 3.0?
        </h1>
        <p className="text-neutral-darkish-blue leading-7 my-6 md:my-0 md:row-span-2">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. but is it
          really fulfilling its promise?
        </p>
        <button className="text-neutral-white uppercase bg-primary-red w-[55%] h-14 tracking-[0.4rem] transition-colors duration-200 hover:bg-neutral-very-dark-blue">
          READ MORE
        </button>
      </div>
    </div>
  );
};
