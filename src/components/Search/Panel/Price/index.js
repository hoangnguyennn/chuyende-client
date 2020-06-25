import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { PanelPriceStyled } from "./styles";

const PanelPrice = () => {
  const location = useLocation();
  const history = useHistory();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    setFrom(new URLSearchParams(location.search).get("minPrice") || "");
    setTo(new URLSearchParams(location.search).get("maxPrice") || "");
  }, [location]);

  const changeFrom = (e) => {
    if (e.target.value === "") {
      setFrom("");
      return;
    }

    if (!isNaN(+e.target.value)) {
      setFrom(+e.target.value);
    }
  };

  const changeTo = (e) => {
    if (e.target.value === "") {
      setTo("");
      return;
    }

    if (!isNaN(+e.target.value)) {
      setTo(+e.target.value);
    }
  };

  const validateAndSubmit = () => {
    let searchParams = new URLSearchParams(location.search);
    if (from) {
      searchParams.set("minPrice", from);
    } else {
      searchParams.delete("minPrice");
    }

    if (to) {
      searchParams.set("maxPrice", to);
    } else {
      searchParams.delete("maxPrice");
    }

    history.push({
      pathname: "/search",
      search: searchParams.toString()
    });
  };

  return (
    <PanelPriceStyled>
      <div className="header">Giá</div>
      <div className="body">
        <p className="hint-text">Chọn khoảng giá</p>
        <div className="price-wrapper">
          <input placeholder="min" value={from} onChange={changeFrom} />
          <span>-</span>
          <input placeholder="max" value={to} onChange={changeTo} />
        </div>
        <button className="submit" onClick={validateAndSubmit}>
          Áp dụng
        </button>
      </div>
    </PanelPriceStyled>
  );
};

export default PanelPrice;
