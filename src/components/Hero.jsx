import React from "react";
import Slider from "react-slick";
import phone from "../assets/phone.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";

const Hero = ({ dark }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 5000,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="py-[80px]">
      <div className="containers">
        <div className="flex justify-between mb-6 hero_wrap">
          <div className="w-[50%] hero__content">
            <h1 className="text-[58px] font-medium leading-[72px] mb-8 text-[#191919]">
              <span id="line__img">Boost sales</span> with 1-click checkouts
            </h1>
            <p className="text-[24px] mb-10 text-[#52596d]">
              Activate 1-click checkouts on any <br />
              CMS and payment service provider
            </p>

            <div className="flex items-center hero_button_wrap">
              <button className="button">Start now</button>
              <p className="px-2">or</p>
              <button className="transform duration-500 hover:text-[#2C50BB]">
                talk to an expert
              </button>
            </div>
          </div>
          <div className="w-[50%] hero_img">
            <img src={phone} alt="phone" />
          </div>
        </div>

        <div className="overflow-hidden">
          <Slider {...settings}>
            <div className="brand_img">
              <img src={c1} alt="" />
            </div>
            <div className="brand_img">
              <img src={c2} alt="" />
            </div>
            <div className="brand_img">
              <img src={c3} alt="" />
            </div>
            <div className="brand_img">
              <img src={c4} alt="" />
            </div>
            <div className="brand_img">
              <img src={c5} alt="" />
            </div>
            <div className="brand_img">
              <img src={c1} alt="" />
            </div>
            <div className="brand_img">
              <img src={c2} alt="" />
            </div>
            <div className="brand_img">
              <img src={c3} alt="" />
            </div>
            <div className="brand_img">
              <img src={c4} alt="" />
            </div>
            <div className="brand_img">
              <img src={c5} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
