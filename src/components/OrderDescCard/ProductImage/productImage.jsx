import React from "react";
import ProdImg from "../../../assets/images/productImage.svg";

const ProductImage = () => {
  return (
    <div className="w-full">
      <img src={ProdImg} alt="ProductImage" width="100%" height="100%" />
    </div>
  );
};

export default ProductImage;
