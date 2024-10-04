import React from "react";
import Benifit from "./Benifit";
import Checkout from "./Checkout";

const ChckoutBenifit = () => {
  return (
    <div>
      <div className="containers py-[80px] checkout__benifit">
        <Checkout />
        <Benifit />
      </div>
    </div>
  );
};

export default ChckoutBenifit;
