import React from "react";
import Logo from "../../assets/images/clarifion_logo.svg";
import Mcafee from "../../assets/images/mcafee_secure_logo.svg";
import Norton from "../../assets/images/norton_antivirus_logo.svg";
import "./header.scss";
import FeatureCarousal from "../FeatureCarousal/featureCarousal";

const Header = () => {
  return (
    <div className="header-wrapper">
      <FeatureCarousal></FeatureCarousal>
      <div className="header-container">
        <div className="header-logos my-5 mx-auto lg:my-6 lg:mx-32 px-5 lg:px-0">
          <div className="w-24 lg:w-48 h-5 lg:h-auto">
            <img src={Logo} alt="logo" height="100%" width="100%" />
          </div>
          <div className="header-sub-logos gap-4 lg:gap-8">
            <div className="w-[44px] lg:w-[88px] h-4 lg:h-auto">
              <img src={Mcafee} alt="Mcafee" height="100%" width="100%" />
            </div>
            <div className="w-[41px] lg:w-[82px] h-4 lg:h-auto">
              <img src={Norton} alt="Norton" height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
