import React from "react";
import BenifitList from "./BenifitList";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

const Benifit = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto flex items-center justify-between pt-[100px] benifit_wrap">
        <div className="w-[40%]">
          <h1 className="heading">Benefits</h1>
        </div>
        <div className="w-[60%] benifit_content">
          <p className="text-[24px] leading-[36px] text-[#191919]">
            Enable fast checkouts with Zeppto to boost your mobile conversion
            rate by 20%
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex items-center justify-between flex-wrap mt-[100px]">
        <BenifitList
          icon={icon1}
          title="Increase mobile conversions"
          desc="Boost your mobile conversion rate with 1-click checkouts."
        />
        <BenifitList
          fixed
          icon={icon2}
          title="Fast and simple to activate"
          desc="Quickly enable express checkouts on your e-commerce with a JavaScript Library ('tag')."
        />
        <BenifitList
          icon={icon3}
          title="Guaranteed performance"
          desc="Zeppto’s performance is backed by A/B testing and detailed reporting."
        />
        <BenifitList
          icon={icon4}
          title="Guaranteed performance"
          desc="Zeppto’s performance is backed by A/B testing and detailed reporting."
        />
      </div>
    </div>
  );
};

export default Benifit;
