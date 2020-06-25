import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
