import React from "react";
import add from "../assets/add.svg";

const Question = ({ faq, id, handleClick }) => {
  return (
    <div
      className={`mx-12 mb-9 question_single px-3 py-4 shadow-md ${
        faq.open ? "active_question" : "disable_question"
      }`}
      onClick={() => handleClick(id)}
    >
      <div className="flex items-start justify-between cursor-pointer">
        <h3 className="text-[21px] w-[90%] font-medium text-[#191919] question_title">
          {faq.question}
        </h3>
        <img className="w-4 mt-[6px]" src={add} alt="add" />
      </div>
      <p className="text-[#52596d] leading-[28px]">{faq.answer}</p>
    </div>
  );
};

export default Question;
