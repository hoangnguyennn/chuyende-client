import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

import { SectionTitle } from "../components/Section";
import SearchEmpty from "../components/Search/Empty";
import PanelList from "../components/Search/Panel/List";
import SortBar from "../components/Search/SortBar";
import ProductList from "../components/Product/List";

const Search = () => {
  document.title = "Tìm kiếm - Chuyên đề tốt nghiệp";
  const [products, setProducts] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.search === "" || location.search === "?q=") {
      history.push("/");
    } else {
      axios
        .get(`/api/products${location.search}`)
        .then((res) => res.data)
        .then((res) => {
          setProducts(res.data);
          document.title = `Tìm thấy ${res.total} sản phẩm phù hợp - Chuyên đề tốt nghiệp`;
        });
    }
  }, [history, location]);

  return (
    <div>
      <SectionTitle>Kết quả tìm kiếm</SectionTitle>
      {products === null || products.length !== 0 ? (
        <div style={{ display: "flex" }}>
          <PanelList />
          <div style={{ flex: 1 }}>
            <SortBar />
            <ProductList products={products} numColumns={4} />
          </div>
        </div>
      ) : (
        <SearchEmpty />
      )}
    </div>
  );
};

export default Search;
