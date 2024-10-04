import React, { useState } from "react";
import video from "../assets/video.mp4";
import CheckoutList from "./CheckoutList";
import video_img from "../assets/videotran.png";

const Checkout = () => {
  const lists = [
    {
      title: "Digital wallets",
      description:
        "Activate popular digital wallets such as Apple Pay, Google Pay, Amazon Pay and PayPal in order to enable your customers to check out in 1 click.",
      active: true,
    },
    {
      title: "New customers",
      description:
        "Boost your customer acquisition with a simplified checkout optimised for mobile.",
      active: false,
    },
    {
      title: "Customers with an account",
      description:
        "Save card information and leverage data contained in your customers' accounts to allow them to check out in just 1 click.",
      active: false,
    },
  ];
  const [checkList, setCheckList] = useState(lists);

  const handleClick = (id) => {
    setCheckList(
      checkList.map((list, i) => {
        if (i === id) {
          list.active = true;
        } else {
          list.active = false;
        }
        return list;
      })
    );
  };
  return (
    <div>
      <h1 className="text-center mb-[60px] heading">
        Activate express checkouts with
      </h1>
      <div className="flex justify-between px-10 checkout_wrap">
        <div className="w-[50%] video_wrap">
          <div className="max-w-[330px] mx-auto relative">
            <video autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
            <img
              className="absolute top-0 left-0 w-full h-full"
              src={video_img}
              alt="video_img"
            />
          </div>
        </div>
        <div className="w-[50%] checkout_list_wrap px-10">
          {checkList.map((list, i) => (
            <CheckoutList
              list={list}
              key={i}
              id={i}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
