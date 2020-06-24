import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CartWrapperStyled } from "./styles";

import CartItem from "../Item";
import FeeBox from "../FeeBox";

import { CartContext } from "../../../contexts/cart.context";

const CartWrapper = () => {
  const { cart } = useContext(CartContext);
  const [cartInfo, setCartInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsPromise = cart.map((item) =>
        axios
          .get(`/api/products/${item.productId}`)
          .then((res) => res.data)
          .then((res) => res.data)
      );

      let products = await Promise.all(productsPromise);
      products = products.map((product, index) => ({
        ...product,
        amount: cart[index].amount
      }));

      setCartInfo(products);
    }

    fetchData();
  }, [cart]);

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
