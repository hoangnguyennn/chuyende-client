import styled from "styled-components";

const CartItem = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #ddd;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  .picture {
    display: flex;
    margin-right: 20px;
    width: 100px;

    img {
      width: 100%;
    }
  }

  .content {
    flex: 1;
    display: flex;

    .info-wrapper {
      flex: 1;
      padding-right: 24px;

      .title {
        display: flex;
        margin-bottom: 4px;
        color: #4b566b;
        line-height: 20px;
        text-decoration: none;
        text-transform: capitalize;

        :hover {
          color: #69b3fe;
        }
      }

      .brand {
        margin-bottom: 12px;
        font-size: 14px;

        span {
          color: #69b3fe;
          cursor: pointer;

          :hover {
            text-decoration: underline;
          }
        }
      }

      .action-wrapper {
        color: #69b3fe;
        font-size: 14px;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .price-wrapper {
      padding-right: 24px;

      .price {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        text-align: right;
      }

      .original {
        color: #a2a2a2;
        font-size: 12px;
        line-height: 20px;
        text-align: right;
        text-decoration: line-through;
        white-space: nowrap;

        .discount {
          display: inline-block;
          margin-left: 17px;
          font-size: 13px;
          font-weight: 500;
          position: relative;

          ::before {
            content: "";
            width: 1px;
            height: 10px;
            background: #787878;
            position: absolute;
            left: -9px;
            top: 5px;
          }
        }
      }
    }

    .quantity-wrapper {
      select {
        padding: 6px 12px;
        height: 36px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }
  }
`;

export { CartItem as CartItemStyled };
