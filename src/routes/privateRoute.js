import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const [isAuthenticated, authenticate] = useState(null);

  useEffect(() => {
    authenticate(true);
  }, []);

  if (isAuthenticated === null) return null;
  return isAuthenticated ? (
    <Route
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      {...rest}
    />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
