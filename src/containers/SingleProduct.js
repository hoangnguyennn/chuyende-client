import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductSummary from "../components/Product/Summary";
import ProductSummaryLoader from "../components/Product/Summary/loader";

const SingleProduct = () => {
  document.title = "Sản phẩm - Chuyên đề tốt nghiệp";
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => res.data)
      .then((res) => {
        setProduct(res.data);
        document.title = `${res.data.name} - Chuyên đề tốt nghiệp`;
      });
  }, [id]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <ProductSummaryLoader />
      ) : (
        <ProductSummary product={product} />
      )}
    </>
  );
};

export default SingleProduct;
