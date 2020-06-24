import React from "react";
import { ProductItemStyled } from "./styles";

import { toVND } from "../../../helpers/formatter";
import { discount } from "../../../helpers/calculator";

const ProductItem = ({ product, ...rest }) => {
  const { id, image, name, price, originalPrice } = product;
  return (
    <ProductItemStyled to={`/products/${id}`} {...rest}>
      <div className="picture">
        <img src={image ? `/images/${image}` : ""} alt="" />
      </div>
      <p className="title">{name}</p>
      <p className="price">
        {toVND(price)}
        {discount(price, originalPrice) ? (
          <>
            <span className="discount">-{discount(price, originalPrice)}%</span>
            <span className="original">{toVND(originalPrice)}</span>
          </>
        ) : null}
      </p>
    </ProductItemStyled>
  );
};

export default ProductItem;
