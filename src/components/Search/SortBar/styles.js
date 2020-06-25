import styled from "styled-components";

const SortBar = styled.div`
  padding: 12px 20px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  z-index: 1;

  .label {
    margin-right: 15px;
  }

  .option {
    .price {
      height: 34px;
      font-size: 14px;
      padding: 0 10px;
      border-color: #ddd;
      border-radius: 4px;

      option {
        height: 34px;
      }
    }
  }
`;

export { SortBar as SortBarStyled };
