import React from "react";
import { Link } from "react-router-dom";
import { OrderedTableStyled } from "./styles";

import { toVND, toNativeDate } from "../../helpers/formatter";

const OrderedTable = ({ orders }) => {
  return (
    <OrderedTableStyled>
      <thead>
        <tr>
          <td>Mã đơn hàng</td>
          <td>Ngày mua</td>
          <td>Sản phẩm</td>
          <td>Tổng tiền</td>
          <td>Trạng thái đơn hàng</td>
        </tr>
      </thead>
      <tbody>
        {orders ? (
          orders.length ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/customer/order/${order.id}`}>{order.id}</Link>
                </td>
                <td>{toNativeDate(order.orderDate)}</td>
                <td>
                  {order.details.map((detail, index) => (
                    <span key={index}>{detail.productName}</span>
                  ))}
                </td>
                <td>{toVND(order.total)}</td>
                <td>{order.status}</td>
              </tr>
            ))
          ) : (
            <tr className="no-data">
              <td colSpan={5} className="text-center">
                Chưa có đơn hàng nào
              </td>
            </tr>
          )
        ) : (
          <>
            <tr>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
            </tr>
            <tr>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
            </tr>
          </>
        )}
      </tbody>
    </OrderedTableStyled>
  );
};

export default OrderedTable;
