import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  color: #4b566b;
  text-decoration: none;
  border-radius: 8px;

  :hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    z-index: 1;
  }

  .picture {
    display: flex;
    margin-bottom: 12px;
    width: 200px;
    height: 200px;

    img {
      width: 100%;
    }
  }

  .title {
    position: relative;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 40px;
    width: 100%;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: 0.1px;
    text-align: left;
    text-overflow: ellipsis;
    text-transform: capitalize;
    overflow: hidden;
  }

  .price {
    align-self: stretch;
    padding-top: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;

    .discount {
      margin-left: 8px;
      color: #787878;
      font-size: 13px;
      font-weight: 300;
      line-height: 1.6;
    }

    .original {
      display: block;
      color: #787878;
      font-size: 13px;
      font-weight: 300;
      text-decoration: line-through;
    }
  }
`;

export { ProductItem as ProductItemStyled };
