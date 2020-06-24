import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";

import { MainLayout } from "../components/Layouts";
import { Home, SingleProduct, Cart, Shipping, Review } from "../containers";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Home} layout={MainLayout} />
        <PublicRoute
          path="/products/:id"
          exact
          component={SingleProduct}
          layout={MainLayout}
        />
        <PublicRoute path="/cart" exact component={Cart} layout={MainLayout} />
        <PrivateRoute path="/checkout/shipping" exact component={Shipping} />
        <PrivateRoute path="/checkout/review" exact component={Review} />
      </Switch>
    </Router>
  );
};

export default Routes;
