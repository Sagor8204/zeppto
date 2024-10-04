import React from "react";
import card from "../assets/card.svg";
import check from "../assets/check.svg";
import seven from "../assets/seven.svg";
import brand1 from "../assets/brand1.svg";
import brand2 from "../assets/brand2.svg";
import brand3 from "../assets/brand3.svg";
import brand4 from "../assets/brand4.svg";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import brand7 from "../assets/brand7.png";
import brand8 from "../assets/brand8.png";

const Multiple = () => {
  return (
    <div>
      {/* payment section start */}
      <div id="maximum">
        <div className="containers flex items-center justify-between py-[80px] maximum_wrap">
          <div className="w-[50%] maximum_content">
            <img className="w-[70%] mx-auto" src={card} alt="card" />
          </div>
          <div className="w-[50%] maximum_content">
            <h1 className="heading mb-12">Maximum payment security</h1>
            <ul>
              <li className="flex items-center py-2">
                <img className="w-[30px] mr-4" src={check} alt="check" />
                <p className="text-[22px] text-[#52596d]">
                  Compatible with any fraud detection software
                </p>
              </li>
              <li className="flex items-center py-2">
                <img className="w-[30px] mr-4" src={check} alt="check" />
                <p className="text-[22px] text-[#52596d]">
                  Compatible with 3-D secure
                </p>
              </li>
              <li className="flex items-center py-2">
                <img className="w-[30px] mr-4" src={check} alt="check" />
                <p className="text-[22px] text-[#52596d]">
                  Zeppto is certified PCI DSS level 1
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* payment section end */}

      {/* zeppto user section start */}
      <div className="containers bg-[#F5FAFF] relative py-[50px]">
        <div className="lg:pl-[130px] z-50 seven_content">
          <h1 className="heading mb-8">Zeppto users see</h1>
          <h1 className="text-[70px] font-medium">
            <span>+</span>20%
          </h1>
          <p className="text-[#52596d] text-[22px] mb-10">
            mobile conversion rate
          </p>
          <p className="text-[#52596d]">
            based on average mobile conversion rate across different industries
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[50%]">
          <img
            className="w-full h-full opacity-60 z-[-1]"
            src={seven}
            alt="seven"
          />
        </div>
      </div>
      {/* zeppto user section end */}

      {/* brand section start */}
      <div className="containers flex items-center justify-between py-[90px] brand_wrap_content">
        <div className="w-[50%]">
          <h1 className="heading">
            Compatible with all e-commerce and payment platforms
          </h1>
        </div>
        <div className="flex items-center justify-between flex-wrap brand_wrap w-[50%]">
          <div>
            <img src={brand1} alt="brand1" />
          </div>
          <div>
            <img src={brand2} alt="brand2" />
          </div>
          <div>
            <img src={brand3} alt="brand3" />
          </div>
          <div>
            <img src={brand4} alt="brand4" />
          </div>
          <div>
            <img src={brand5} alt="brand5" />
          </div>
          <div>
            <img src={brand6} alt="brand6" />
          </div>
          <div>
            <img src={brand7} alt="brand7" />
          </div>
          <div>
            <img src={brand8} alt="brand8" />
          </div>
        </div>
      </div>
      {/* brand section end */}
    </div>
  );
};

export default Multiple;
