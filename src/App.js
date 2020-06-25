import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import { CartProvider } from "./contexts/cart.context";

function App() {
  return (
    <CartProvider>
      <Routes />
      <ToastContainer autoClose={2000} />
    </CartProvider>
  );
}

export default App;
