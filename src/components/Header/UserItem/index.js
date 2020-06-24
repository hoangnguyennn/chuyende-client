import React from "react";
import { Link } from "react-router-dom";
import { UserItemStyled } from "./styles";
import Button from "../../Button";

const UserItem = () => {
  return (
    <UserItemStyled>
      <div className="icon-box">
        <span className="material-icons">person</span>
      </div>
      <div className="title">
        Đăng nhập
        <small>Tài khoản</small>
      </div>
      <div className="dropdown">
        <Link to="/customer/order" className="dropdown-item">
          Đơn hàng của tui
        </Link>
        <Link to="/customer/account" className="dropdown-item">
          Tài khoản của tui
        </Link>
        <Button block color="primary" shadow>
          Đăng xuất
        </Button>
        {/* <Button block color="primary" shadow>
          Đăng nhập
        </Button> */}
      </div>
    </UserItemStyled>
  );
};

export default UserItem;
