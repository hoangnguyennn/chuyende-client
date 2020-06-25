import React from "react";
import { CartWrapperStyled } from "./styles";

import CartItem from "../Item";
import FeeBox from "../FeeBox";

const CartWrapper = ({ cartInfo }) => {
  return (
    <CartWrapperStyled>
      <div className="list">
        {cartInfo.map((item, index) => (
          <CartItem key={index} product={item} />
        ))}
      </div>
      <FeeBox cart={cartInfo} />
    </CartWrapperStyled>
  );
};

export default CartWrapper;
