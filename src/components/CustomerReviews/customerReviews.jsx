import React from "react";
import ProfileImage from "../../assets/images/profileImage.svg";
import Star from "../../assets/images/star_filled.svg";
import Verify from "../../assets/images/verify.svg";
import "./customerReviews.scss";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 101,
      name: "Ken T.",
      profileImage: ProfileImage,
      rating: 5,
      verified: true,
      comment: `As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful`,
    },
  ];
  return (
    <div className="customerReviews-wrapper lg:block hidden">
      {reviews.map((review) => (
        <div key={review.id} className="customerReviews-container">
          <div className="customer-profile">
            <div className="customer-profile-image">
              <img
                src={review.profileImage}
                alt="profileImage"
                height="100%"
                width="100%"
              />
            </div>
            <div className="customer-profile-details">
              <div className="flex flex-row">
                {Array.from({ length: review.rating }, (value, index) => (
                  <img src={Star} alt="Star" key={index} />
                ))}
              </div>
              <div className="customer-profile-name">
                <div className="customer-profile-username">{review.name}</div>
                {review.verified && (
                  <React.Fragment>
                    <div className="d-flex">
                      <img
                        src={Verify}
                        alt="Verify"
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="customer-profile-verified">
                      Verified Customer
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          <div className="customer-comment">“{review.comment}”</div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
