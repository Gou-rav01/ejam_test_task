import React from "react";
import "./orderSteps.scss";
import check_mark from "../../assets/images/check_mark.svg";

const OrderSteps = () => {
  const steps = [
    {
      title: "Cart Review",
      status: "COMPLETED",
    },
    {
      title: "Checkout",
      status: "COMPLETED",
    },
    {
      title: "Special Offer",
      status: "IN_PROGRESS",
    },
    {
      title: "Confirmation",
      status: "PENDING",
    },
  ];

  const getStepStatus = (status, index) => {
    if (status === "COMPLETED") {
      return (
        <img src={check_mark} alt="check mark" height="100%" width="100%" />
      );
    } else if (status === "IN_PROGRESS") {
      return (
        <div className="orderSteps-inProgress h-5 w-5 lg:h-10 lg:w-10">
          <div className="text-white">{index}</div>
        </div>
      );
    } else {
      return (
        <div className="orderSteps-pending h-5 w-5 lg:h-10 lg:w-10">
          <div className="text-primary">{index}</div>
        </div>
      );
    }
  };
  return (
    <div className="orderSteps-wrapper my-6 lg:mb-10 lg:mt-[60px]">
      {steps.map((step, i) => (
        <div
          key={i}
          className="orderSteps-item flex-col lg:flex-row gap-2 lg:gap-5"
        >
          <div className="orderSteps-item-status h-5 w-5 lg:h-10 lg:w-10">
            {getStepStatus(step.status, i + 1)}
          </div>
          <div
            className={`orderSteps-item-title text-xs lg:text-xl ${
              step.status === "IN_PROGRESS" ? "orderSteps-item-title-bold" : ""
            }`}
          >
            <span className="orderSteps-item-count hidden lg:contents">
              Step {i + 1} :
            </span>{" "}
            <span>{step.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderSteps;
