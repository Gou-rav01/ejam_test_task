import React from "react";
import "./orderDescCard.scss";
import ProductImage from "./ProductImage/productImage";
import Discount from "./Discount/discount";
import OrderDetail from "./OrderDetail/orderDetail";
import CustomerReviews from "../CustomerReviews/customerReviews";

const OrderDescCard = () => {
  return (
    <div className="orderDescCard-wrapper p-0 lg:p-10">
      <div className="orderDescCard-container flex-col lg:flex-row lg:flex-nowrap flex-wrap gap-6 lg:gap-10">
        <div className="orderDescCard-column-1 w-full lg:w-auto">
          <ProductImage></ProductImage>
          <CustomerReviews></CustomerReviews>
        </div>
        <div className="orderDescCard-column-2 contents lg:inline-flex w-full lg:w-auto">
          <div className="orderDescCard-discount-section">
            <Discount></Discount>
          </div>
          <div className="orderDescCard-detail-section">
            <OrderDetail></OrderDetail>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDescCard;
