import React, { useState } from "react";

export const LoadingContext = React.createContext();
export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const context = { isLoading, setLoading };
  return (
    <LoadingContext.Provider value={context}>
      {children}
    </LoadingContext.Provider>
  );
};
