import React, { useState, useEffect } from "react";
import axios from "axios";

import { SectionTitle } from "../components/Section";
import ProductList from "../components/Product/List";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => res.data)
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <SectionTitle>Danh sách sản phẩm</SectionTitle>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
