import React from "react";
import { SectionTitle } from "../components/Section/index";

import CartWrapper from "../components/Cart/Wrapper";

const Cart = () => {
  return (
    <div>
      <SectionTitle>
        Giỏ hàng <span>(2 sản phẩm)</span>
      </SectionTitle>
      <CartWrapper />
    </div>
  );
};

export default Cart;
