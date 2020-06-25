import React from "react";
import { ProductListStyled } from "./styles";
import ProductItem from "../Item";
import ProductItemLoader from "../Item/Loader";

const ProductList = ({ products, numColumns = 5 }) => {
  const handleLoader = () => {
    return Array.from(new Array(numColumns)).map((item, index) => (
      <ProductItemLoader
        key={index}
        style={{ width: `${100 / numColumns}%` }}
      />
    ));
  };

  return (
    <ProductListStyled>
      {products ? (
        products.map((product, index) => (
          <ProductItem
            key={index}
            product={product}
            style={{ width: `${100 / numColumns}%` }}
          />
        ))
      ) : (
        <>{handleLoader()}</>
      )}
    </ProductListStyled>
  );
};

export default ProductList;
