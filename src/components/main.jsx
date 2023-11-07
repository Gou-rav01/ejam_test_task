import React from "react";
import Header from "./Header/header";
import OrderStatusHeading from "./OrderStatusHeading/orderStatusHeading";
import "./main.scss";
import OrderSteps from "./OrderSteps/orderSteps";
import Footer from "./Footer/footer";
import OrderDescCard from "./OrderDescCard/orderDescCard";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="main-wrapper mb-8">
        <div className="main-container my-auto mx-5 lg:my-0 lg:mx-32">
          <OrderStatusHeading></OrderStatusHeading>
          <OrderSteps></OrderSteps>
          <OrderDescCard></OrderDescCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
