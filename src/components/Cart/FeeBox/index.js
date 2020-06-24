import React from "react";
import { FeeBoxStyled } from "./styles";

import { toVND } from "../../../helpers/formatter";
import { cartTotal } from "../../../helpers/calculator";
import Button from "../../Button";

const FeeBox = ({ cart }) => {
  return (
    <FeeBoxStyled>
      <div className="header">Chi tiết</div>
      <div className="body">
        <p className="text">
          Tạm tính: <span>{toVND(cartTotal(cart))}</span>
        </p>
      </div>
      <div className="footer">
        <Button color="primary" block shadow>
          Tiến hành đặt mua
        </Button>
      </div>
    </FeeBoxStyled>
  );
};

export default FeeBox;
