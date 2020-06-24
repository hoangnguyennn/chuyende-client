import React from "react";
import { ProductListStyled } from "./styles";
import ProductItem from "../Item";

const ProductList = ({ products, numColumns = 5 }) => {
  return (
    <ProductListStyled>
      {products
        ? products.map((product, index) => (
            <ProductItem
              key={index}
              product={product}
              style={{ width: `${100 / numColumns}%` }}
            />
          ))
        : null}
    </ProductListStyled>
  );
};

export default ProductList;
