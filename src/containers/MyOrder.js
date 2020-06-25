import React, { useState, useEffect } from "react";
import axios from "axios";

import { SectionTitle } from "../components/Section";
import OrderedTable from "../components/OrderedTable";

const MyOrder = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    axios
      .get("/api/orders")
      .then((res) => res.data)
      .then((res) => setOrders(res.data))
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  return (
    <div>
      <SectionTitle>Đơn hàng của tôi</SectionTitle>
      <OrderedTable orders={orders} />
    </div>
  );
};

export default MyOrder;
