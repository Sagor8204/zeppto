import React, { useState } from "react";
import Question from "./Question";

const Frequently = () => {
  const questions = [
    {
      question: "Is Zeppto a payment service provider?",
      answer:
        "Zeppto is not a payment service provider. Zeppto provides a solution that activates automatic retries with our partner Stripe in order to boost your payment acceptance rate.",
      open: false,
    },
    {
      question: "What will my customers see during an automatic retry?",
      answer:
        "During an automatic retry we notify your customers that a second payment attempt is being undertaken. No action is required on their side. If the second payment payment is successful, your customer will be redirected to your standard confirmation page.",
      open: false,
    },
    {
      question: "Which countries and currencies does Zeppto support?",
      answer:
        "Zeppto supports all countries and all currencies offered by our payment partner.",
      open: false,
    },
    {
      question: "Does Zeppto affect website performance?",
      answer:
        "Zeppto's solution can be loaded asynchronously and therefore does not affect the performance of your website.",
      open: false,
    },
  ];
  const [faqs, setFaqs] = useState(questions);

  const handleClick = (id) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === id) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="containers py-[80px]">
      <h1 className="heading mb-16">Frequently Asked Questions</h1>

      <div>
        {faqs.map((faq, i) => (
          <Question faq={faq} key={i} id={i} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Frequently;
