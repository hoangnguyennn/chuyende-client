import styled from "styled-components";

const FormSearch = styled.form`
  flex: 1;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  max-width: 500px;

  input {
    padding: 10px 40px 10px 16px;
    width: 100%;
    height: 40px;
    color: #4b566b;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 6px;

    :focus {
      border-color: #69b3fe;
      box-shadow: 0 8px 18px -8px #69b3fee6;
      outline: none;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: transparent;
    color: #4b566b;
    border: none;
    cursor: pointer;
  }
`;

export { FormSearch as FormSearchStyled };
