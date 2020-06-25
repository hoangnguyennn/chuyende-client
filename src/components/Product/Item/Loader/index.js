import React from "react";
import Skeleton from "react-loading-skeleton";
import ContentLoader from "react-content-loader";

import { ProductItemLoaderStyled } from "./styles";

const ProductItem = ({ ...rest }) => {
  return (
    <ProductItemLoaderStyled {...rest}>
      <div className="picture">
        <ContentLoader width="200" height="200">
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </ContentLoader>
      </div>
      <p className="title">
        <Skeleton />
      </p>
      <p className="price">
        <Skeleton />
        <span className="original">
          <Skeleton />
        </span>
      </p>
    </ProductItemLoaderStyled>
  );
};

export default ProductItem;
