import styled from "styled-components";

const PanelPrice = styled.div`
  .header {
    padding-bottom: 10px;
    text-transform: uppercase;
  }

  .body {
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;

    .hint-text {
      margin-bottom: 5px;
      color: #858585;
      font-size: 13px;
      font-weight: 300;
    }

    .price-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        padding: 0 8px;
        width: 95px;
        height: 30px;
        border: 1px solid #b8b8b8;
        border-radius: 4px;
      }
    }

    .submit {
      margin-top: 8px;
      padding: 5px 15px;
      background-color: #fff;
      color: #69b3fe;
      border: 1px solid #69b3fe;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export { PanelPrice as PanelPriceStyled };
