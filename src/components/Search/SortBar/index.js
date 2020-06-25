import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { SortBarStyled } from "./styles";

const SortBar = () => {
  const location = useLocation();
  const history = useHistory();
  const [order, setOrder] = useState("none");

  useEffect(() => {
    setOrder(new URLSearchParams(location.search).get("order") || "none");
  }, [location]);

  const sortByPrice = (e) => {
    let searchParams = new URLSearchParams(location.search);
    switch (e.target.value) {
      case "asc":
        searchParams.set("order", "asc");
        break;
      case "desc":
        searchParams.set("order", "desc");
        break;
      default:
        searchParams.delete("order");
    }

    history.push({
      pathname: "/search",
      search: searchParams.toString()
    });
  };

  return (
    <SortBarStyled>
      <div className="label">Sắp xếp theo</div>
      <div className="option">
        <select className="price" defaultValue={order} onChange={sortByPrice}>
          <option value="none">Giá: Mặc định</option>
          <option value="asc">Giá: Thấp đến Cao</option>
          <option value="desc">Giá: Cao đến Thấp</option>
        </select>
      </div>
    </SortBarStyled>
  );
};

export default SortBar;
