import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      {...rest}
    />
  );
};

export default PublicRoute;
