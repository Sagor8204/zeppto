import React from "react";

const CheckoutList = ({ list, id, handleClick }) => {
  return (
    <div
      className={`mt-5 bg-white py-5 px-12 mb-[60px] rounded-lg cursor-pointer border-l-[6px] border-transparent ${
        list.active ? "border_active_color" : ""
      }`}
      onClick={() => handleClick(id)}
    >
      <h1 className="text-[1.3em] font-medium text-[#191919] mb-4">
        {list.title}
      </h1>
      <p className="text-[#52596d] leading-[25px] font-[500]">
        {list.description}
      </p>
    </div>
  );
};

export default CheckoutList;
