import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { LoadingContext } from "./loading.context";

export const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const { setLoading } = useContext(LoadingContext);
  const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(initialCart);
  const [isInProcess, setInProcess] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (productId) => {
    if (isInProcess) {
      return toast.error("Thao tác quá nhanh, vui lòng thử lại");
    }

    setInProcess(true);
    setLoading(true);
    let product;
    try {
      product = await axios
        .get(`/api/products/${productId}`)
        .then((res) => res.data)
        .then((res) => res.data);
    } catch (e) {
      console.log(e.response);
      setInProcess(false);
      setLoading(false);
      return toast.error("Không tìm thấy sản phẩm");
    }

    if (product.status === "Stop business") {
      setInProcess(false);
      setLoading(false);
      return toast.error("Sản phẩm hiện tại không còn kinh doanh");
    }

    if (product.quantity === 0) {
      setInProcess(false);
      setLoading(false);
      return toast.error("Sản phẩm hiện hết hàng");
    }

    const pos = cart.map((item) => item.productId).indexOf(productId);
    if (pos === -1) {
      setCart([...cart, { productId, amount: 1 }]);
      setInProcess(false);
      setLoading(false);
      return toast.success("Thêm vào giỏ hàng thành công");
    }

    if (cart[pos].amount >= 5) {
      setInProcess(false);
      setLoading(false);
      return toast.error("Chỉ mua tối đa 5 sản phẩm mỗi lần");
    }

    if (product.quantity > cart[pos].amount) {
      setCart([
        ...cart.slice(0, pos),
        {
          ...cart[pos],
          amount: cart[pos].amount + 1
        },
        ...cart.slice(pos + 1)
      ]);
      setInProcess(false);
      setLoading(false);
      return toast.success("Thêm vào giỏ hàng thành công");
    }

    setInProcess(false);
    setLoading(false);
    return toast.error(`Hiện tại chỉ còn ${product.quantity} sản phẩm`);
  };

  const removeFromCart = (productId) => {
    const pos = cart.map((item) => item.productId).indexOf(productId);

    if (pos === -1) {
      return toast.error("Sản phẩm không có trong giỏ hàng");
    }

    setCart([...cart.slice(0, pos), ...cart.slice(pos + 1)]);
    return toast.info("Sản phẩm đã rơi khỏi giỏ hàng");
  };

  const changeAmount = async (productId, newAmount) => {
    if (isInProcess) {
      return toast.error("Thao tác quá nhanh, vui lòng thử lại");
    }

    const pos = cart.map((item) => item.productId).indexOf(productId);

    if (pos === -1) {
      return toast.error("Sản phẩm không có trong giỏ hàng");
    }

    setInProcess(true);
    setLoading(true);
    let product;
    try {
      product = await axios
        .get(`/api/products/${productId}`)
        .then((res) => res.data)
        .then((res) => res.data);
    } catch (e) {
      console.log(e.response);
      setInProcess(false);
      setLoading(false);
      return toast.error("Không tìm thấy sản phẩm");
    }

    if (product.status === "Stop business") {
      setInProcess(false);
      setLoading(false);
      setCart([...cart.slice(0, pos), ...cart.slice(pos + 1)]);
      return toast.error("Sản phẩm hiện tại không còn kinh doanh");
    }

    if (isNaN(newAmount)) {
      setInProcess(false);
      setLoading(false);
      return toast.error("Số lượng không hợp lệ");
    }

    if (newAmount > 5) {
      setInProcess(false);
      setLoading(false);
      return toast.error("Chỉ mua tối đa 5 sản phẩm mỗi lần");
    }

    if (product.quantity >= newAmount) {
      setCart([
        ...cart.slice(0, pos),
        {
          ...cart[pos],
          amount: newAmount
        },
        ...cart.slice(pos + 1)
      ]);
      setInProcess(false);
      setLoading(false);
      return toast.info("Thay đổi số lượng thành công");
    }

    setInProcess(false);
    setLoading(false);
    return toast.error(`Hiện tại chỉ còn ${product.quantity} sản phẩm`);
  };

  const context = { cart, setCart, addToCart, removeFromCart, changeAmount };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
