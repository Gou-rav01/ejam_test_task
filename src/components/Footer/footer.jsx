import React from "react";
import "./footer.scss";
import Lock from "../../assets/images/lock.svg";

function Footer() {
  return (
    <footer className="footer p-5 lg:py-6 lg:px-32">
      <div className="footer-content text-xs lg:text-base flex-col lg:flex-row gap-4 lg:gap-0">
        <div className="copyright-text">
          <div className="copyright-subtext1 border-r pr-3 border-white">
            Copyright (c) 2023
          </div>
          <div className="copyright-subtext2">
            Clarifionsupport@clarifion.com
          </div>
        </div>
        <div className="ssl-encryption">
          <div className="ssl-encryption-icon">
            <img src={Lock} alt="Lock" height="100%" width="100%" />
          </div>
          Secure 256-bit SSL encryption.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
