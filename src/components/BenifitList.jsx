import React from "react";

const BenifitList = ({ icon, title, desc, fixed }) => {
  return (
    <div className="w-[26%] mb-10 single_benifit">
      <img
        className={`w-10 h-10 mb-4 ${fixed && "mt-5"}`}
        src={icon}
        alt="icon"
      />
      <h3 className="text-[22px] font-[500] text-[#191919] mb-5">{title}</h3>
      <p className="text-[#52596d] text-[15px]">{desc}</p>
    </div>
  );
};

export default BenifitList;
