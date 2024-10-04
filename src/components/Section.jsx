import React from "react";
import bg_img from "../assets/bg_img.svg";

const Section = () => {
  return (
    <div id="section" className="bg__linear relative z-0">
      <div className="flex items-center justify-between containers bg-[#4169E1] pb-[60px] pt-[100px] rounded-tr-2xl rounded-br-2xl z-50">
        <div className="w-[40%]">
          <h1 className="heading text-white">
            Set up 1-click checkouts on your website
          </h1>
        </div>
        <div className="w-[50%] pr-20 section_content">
          <p className="text-[24px] leading-[36px] text-white  mb-14">
            nterested in activating 1-click checkouts on your website?
          </p>
          <button className="button bg-[#191919] hover:bg-[#191919]">
            Start now
          </button>
        </div>
      </div>
      <img
        className="absolute left-0 top-[-40px] z-[-1] w-[30%] h-[90px] object-cover"
        src={bg_img}
        alt="bg_img"
      />
    </div>
  );
};

export default Section;
