import React, { useState } from "react";
import "./featureCarousal.scss";
import Checkmark from "../../assets/images/checkmark_starburst.svg";
import Truck from "../../assets/images/truck_light.svg";
import Heart from "../../assets/images/cards_heart.svg";
import ArrowCheckmark from "../../assets/images/arrow_sync_checkmark.svg";
import ChevronLeft from "../../assets/images/chevron_left.svg";
import ChevronRight from "../../assets/images/chevron_right.svg";

function FeatureCarousal() {
  const features = [
    {
      title: "30-DAY SATISFACTION GUARANTEE",
      icon: Checkmark,
    },
    {
      title: "Free delivery on orders over $40.00",
      icon: Truck,
    },
    {
      title: "350.000+ HAPPY CUSTOMERS",
      icon: Heart,
    },
    {
      title: "100% Money Back Guarantee",
      icon: ArrowCheckmark,
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  const scrollLeft = () => {
    if (currentFeature > 0) {
      setCurrentFeature((prevState) => prevState - 1);
    }
  };
  const scrollRight = () => {
    if (currentFeature < features.length - 1) {
      setCurrentFeature((prevState) => prevState + 1);
    }
  };

  return (
    <React.Fragment>
      <div className="block lg:hidden absolute inset-0 top-3 pl-4">
        <img
          src={ChevronLeft}
          alt="ChevronLeft"
          height={20}
          width={20}
          onClick={() => {
            scrollLeft();
          }}
        />
      </div>
      <div className="flex lg:hidden featureCarousal-wrapper-mobile">
        <div className="">
          <img
            src={features[currentFeature].icon}
            alt={features[currentFeature].icon}
            height="100%"
            width="100%"
          />
        </div>
        <div>{features[currentFeature].title}</div>
      </div>
      <div className="featureCarousal-wrapper hidden lg:flex">
        {features.map((feature, i) => (
          <div key={i} className="featureCarousal-list">
            <div className="featureCarousal-list-icon">
              <img
                src={feature.icon}
                alt={feature.icon}
                height="100%"
                width="100%"
              />
            </div>
            <div>{feature.title}</div>
          </div>
        ))}
      </div>
      <div className="block lg:hidden absolute right-0 top-3 pr-4">
        <img
          src={ChevronRight}
          alt="ChevronRight"
          height={20}
          width={20}
          onClick={() => {
            scrollRight();
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default FeatureCarousal;
