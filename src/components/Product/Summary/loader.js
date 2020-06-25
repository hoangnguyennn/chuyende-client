import React from "react";
import Skeleton from "react-loading-skeleton";
import ContentLoader from "react-content-loader";

import { ProductSummaryStyled } from "./styles";

const ProductSummary = () => {
  return (
    <ProductSummaryStyled>
      <div className="picture">
        <ContentLoader width="400" height="400">
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </ContentLoader>
      </div>
      <div className="content">
        <h2 className="title">
          <Skeleton />
        </h2>
        <div className="price-wrapper">
          <p className="price">
            <Skeleton width="30%" />
          </p>
          <p className="saving">
            <Skeleton width="30%" />
          </p>
          <p className="original">
            <Skeleton width="30%" />
          </p>
        </div>
        <div className="feature-wrapper">
          <Skeleton count={11} width="60%" />
        </div>
        <div className="action-wrapper">
          <ContentLoader width="120" height="43">
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
          </ContentLoader>
        </div>
      </div>
    </ProductSummaryStyled>
  );
};

export default ProductSummary;
