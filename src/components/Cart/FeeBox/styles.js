import styled from "styled-components";

const FeeBox = styled.div`
  position: sticky;
  top: 76px;
  align-self: flex-start;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

  .header {
    padding-bottom: 16px;
    font-style: italic;
    text-transform: uppercase;
    border-bottom: 1px solid #ddd;
  }

  .body {
    padding: 16px 0;
    border-bottom: 1px solid #ddd;

    .text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      span {
        font-size: 22px;
      }
    }
  }

  .footer {
    padding-top: 16px;
  }
`;

export { FeeBox as FeeBoxStyled };
