import styled from "styled-components";

const OrderedTableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      background-color: rgb(246, 252, 255);

      td {
        padding: 20px 15px;
        border-top: 1px solid #ddd;

        :last-child {
          text-align: right;
        }
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 20px 15px;
        border-top: 1px solid #eee;

        &.text-center {
          text-align: center !important;
        }

        span {
          display: block;
        }

        a {
          color: #69b3fe;
          text-decoration: none;
        }

        :last-child {
          text-align: right;
        }
      }

      :not(.no-data):hover {
        background-color: rgb(246, 252, 255);
      }
    }
  }
`;

export { OrderedTableStyled };
