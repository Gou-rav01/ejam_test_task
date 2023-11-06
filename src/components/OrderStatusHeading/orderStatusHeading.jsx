import React from "react";
import "./orderStatusHeading.scss";

const OrderStatusHeading = () => {
  return (
    <div className="orderStatus-wrapper">
      <div className="orderStatus-container gap-6 font-normal capitalize">
        <div className="text-[32px] lg:text-5xl leading-[140%] lg:leading-[100%]">
          Wait ! your order in progress.
        </div>
        <div className="orderStatus-subtitle text-base lg:text-2xl leading-[140%] lg:leading-[100%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
      </div>
    </div>
  );
};

export default OrderStatusHeading;
