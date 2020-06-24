import React from "react";
import { Link } from "react-router-dom";
import { CartItemStyled } from "./styles";

import { toVND } from "../../../helpers/formatter";
import { discount } from "../../../helpers/calculator";

const CartItem = ({ product }) => {
  const { id, image, name, brandName, price, originalPrice, amount } = product;

  return (
    <CartItemStyled>
      <div className="picture">
        <img src={image ? `/images/${image}` : ""} alt="" />
      </div>
      <div className="content">
        <div className="info-wrapper">
          <Link to={`/products/${id}`} className="title">
            {name}
          </Link>
          <p className="brand">
            Thương hiệu: <span>{brandName}</span>
          </p>
          <div className="action-wrapper">
            <span>Xóa</span>
          </div>
        </div>

        <div className="price-wrapper">
          <p className="price">{toVND(price)}</p>
          {discount(price, originalPrice) && (
            <>
              <p className="original">
                {toVND(originalPrice)}
                <span className="discount">
                  {discount(price, originalPrice)}%
                </span>
              </p>
            </>
          )}
        </div>

        <div className="quantity-wrapper">
          <select
            defaultValue={amount}
            // onChange={(e) => changeAmount(id, +e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
