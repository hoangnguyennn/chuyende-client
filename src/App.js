import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import { LoadingProvider } from "./contexts/loading.context";
import Loading from "./components/Loading";

function App() {
  return (
    <LoadingProvider>
      <Routes />
      <ToastContainer autoClose={2000} />
      <Loading />
    </LoadingProvider>
  );
}

export default App;
