import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { SectionTitle } from "../components/Section";
import CheckoutReviewForm from "../components/CheckoutReviewForm";

import { LoadingContext } from "../contexts/loading.context";
import { CartContext } from "../contexts/cart.context";

const Review = () => {
  document.title = "Xác nhận và đặt hàng - Chuyên đề tốt nghiệp";
  const { setLoading } = useContext(LoadingContext);
  const { cart, setCart } = useContext(CartContext);
  const [cartInfo, setCartInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const productsPromise = cart.map((item) =>
        axios
          .get(`/api/products/${item.productId}`)
          .then((res) => res.data)
          .then((res) => res.data)
      );

      let products = await Promise.all(productsPromise);
      products = products
        .map((product, index) => ({
          ...product,
          amount: cart[index].amount
        }))
        .filter((item) => item.status === "Selling");

      if (products.length !== cart.length) {
        setCart(
          products.map((product) => ({ ...product, productId: product.id }))
        );
      }
      setCartInfo(products);
      setLoading(false);
    }

    fetchData();
  }, [cart, setCart, setLoading]);

  return (
    <div>
      <SectionTitle>Xác nhận đặt hàng</SectionTitle>
      <CheckoutReviewForm cartInfo={cartInfo} />
    </div>
  );
};

export default Review;
