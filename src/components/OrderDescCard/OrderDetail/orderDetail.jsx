import React from "react";
import ProdImg from "../../../assets/images/productImage2.svg";
import BlueDot from "../../../assets/images/blue_dot.svg";
import Tick from "../../../assets/images/tick-circle.svg";
import Star from "../../../assets/images/star_filled.svg";
import Discount from "../../../assets/images/discount_percent.svg";
import Arrow from "../../../assets/images/right_arrow_line.svg";
import guaranteeIcon from "../../../assets/images/guarantee_icon.svg";
import Visa from "../../../assets/images/visa.svg";
import ShopPay from "../../../assets/images/shop_pay.svg";
import Paypal from "../../../assets/images/paypal.svg";
import Mastercard from "../../../assets/images/mastercard.svg";
import Gpay from "../../../assets/images/gpay.svg";
import ApplePay from "../../../assets/images/apple_pay.svg";
import Amex from "../../../assets/images/amex.svg";
import Lock from "../../../assets/images/lock_dark.svg";

import "./orderDetail.scss";

const OrderDetail = () => {
  return (
    <div className="orderDetail-wrapper">
      <div className="orderDetail-desc gap-4 lg:gap-6">
        <div className="w-20 h-20 lg:w-32 lg:h-32 flex-shrink-0">
          <img src={ProdImg} alt="Product Image" height="100%" width="100%" />
        </div>
        <div className="orderDetail-desc-body gap-3 lg:gap-2">
          <div className="orderDetail-desc-body-title">
            <div className="orderDetail-product-name text-sm lg:text-xl">
              Clarifion Air Ionizer
            </div>
            <div className="orderDetail-product-price gap-2 lg:gap-3">
              <div className="orderDetail-product-price-striked text-[10px] lg:text-base">
                $180
              </div>
              <div className="orderDetail-product-price-actual text-sm lg:text-[22px]">
                $84
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            {Array.from({ length: 5 }, (value, index) => (
              <img src={Star} alt="Star" key={index} />
            ))}
          </div>
          <div className="orderDetail-desc-stock text-xs lg:text-base">
            <div className="h-3 w-3 lg:h-4 lg:w-4">
              <img src={BlueDot} alt="Blue dot" height="100%" width="100%" />
            </div>
            12 left in Stock
          </div>
          <div className="md:block hidden product-instruction-text text-base">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </div>
        </div>
      </div>
      <div className="md:hidden block product-instruction-text text-xs text-center">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </div>
      <div className="orderDetail-features">
        <div className="orderDetail-feature-item">
          <div className="h-4 w-4 lg:h-[22px] lg:w-[22px]">
            <img src={Tick} alt="Tick" height="100%" width="100%" />
          </div>
          <div className="orderDetail-feature-item-title text-xs lg:text-base">
            Negative Ion Technology may <span>help with allergens</span>
          </div>
        </div>
        <div className="orderDetail-feature-item">
          <div className="h-4 w-4 lg:h-[22px] lg:w-[22px]">
            <img src={Tick} alt="Tick" height="100%" width="100%" />
          </div>
          <div className="orderDetail-feature-item-title text-xs lg:text-base">
            Designed for <span>air rejuvenation</span>
          </div>
        </div>
        <div className="orderDetail-feature-item">
          <div className="h-4 w-4 lg:h-[22px] lg:w-[22px]">
            <img src={Tick} alt="Tick" height="100%" width="100%" />
          </div>
          <div className="orderDetail-feature-item-title text-xs lg:text-base">
            <span>Perfect for every room</span> in all types of places.
          </div>
        </div>
      </div>

      <div className="orderDetail-discount">
        <div className="orderDetail-discount-container">
          <div className="orderDetail-discount-icon">
            <img src={Discount} alt="Discount" height="100%" width="100%" />
          </div>
          <div className="orderDetail-discount-text">
            Save <span>53%</span> and get <span>6 extra Clarifision</span> for
            only <span>$14 Each</span>.
          </div>
        </div>
      </div>

      <div className="orderDetail-footer">
        <div className="claim-discount">
          <div className="claim-discount-button">
            <div className="claim-discount-button-text text-sm lg:text-sm">
              Yes - Claim my discount
            </div>
            <div className="claim-discount-button-arrow w-auto lg:w-4 h-3 lg:h-auto">
              <img
                src={Arrow}
                alt="Arrow"
                height="100%"
                width="100%"
                className="d-flex"
              />
            </div>
          </div>
        </div>

        <div className="shippingDetail lg:flex-nowrap flex-wrap sm:justify-between justify-around p-2 lg:py-2 lg:px-4">
          <div className="">Free shipping</div>
          <div className="flex gap-2 align-middle h-[16px] border-l border-[#cfcfcf]"></div>
          <div className="flex gap-2 align-middle">
            <div className="secure-icon">
              <img src={Lock} alt="Lock" height="100%" width="100%" />
            </div>
            Secure 256-bit SSL encryption
          </div>
          <div className="flex gap-2 align-middle h-[16px] border-l border-[#cfcfcf] hidden lg:block"></div>
          <div className="md:w-auto w-full text-center flex flex-wrap justify-center paycard">
            <img
              className="payment-logo"
              src={Visa}
              alt="Visa"
              height="100%"
              width="100%"
            />
            <img
              className="payment-logo"
              src={ShopPay}
              alt="ShopPay"
              height="100%"
              width="100%"
            />
            <img
              className="payment-logo"
              src={Paypal}
              alt="Paypal"
              height="100%"
              width="100%"
            />
            <img
              className="payment-logo"
              src={Mastercard}
              alt="Mastercard"
              height="100%"
              width="100%"
            />
            <img
              className="payment-logo"
              src={Gpay}
              alt="Gpay"
              height="100%"
              width="100%"
            />
            <img
              className="payment-logo"
              src={ApplePay}
              alt="ApplePay"
              height="100%"
              width="100%"
            />
            <img
              className="payment-logo"
              src={Amex}
              alt="Amex"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        <div className="no-thanks-div text-xs lg:text-lg">
          No thanks, I don’t want this.
        </div>
      </div>

      <div className="satisfaction-guarantee mt-3">
        <img
          src={guaranteeIcon}
          alt="guaranteeIcon"
          className="h-12 w-12 lg:h-[88px] lg:w-[88px]"
        />
        <div className="satisfaction-guarantee-message text-xs lg:text-base">
          If you are not completely thrilled with your Clarifion - We have a{" "}
          <span>30 day satisfaction guarantee</span>. Please refer to our return
          policy at the bottom of the page for more details.
          <br />
          Happy Shopping!
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
