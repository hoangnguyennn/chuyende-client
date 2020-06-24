import styled from "styled-components";

const handleColor = (color) => {
  switch (color) {
    case "primary":
      return `color: #fff; background-color: #69b3fe;`;
    case "danger":
      return `color: #fff; background-color: #fe696a;`;
    case "success":
      return `color: #fff; background-color: #42d697;`;
    case "warning":
      return `color: #fff; background-color: #fea569;`;
    default:
      return "";
  }
};

const handleColorHover = (color) => {
  switch (color) {
    case "primary":
      return `background-color: #43a0fe;`;
    case "danger":
      return `background-color: #fe4344;`;
    case "success":
      return `background-color: #2bc784;`;
    case "warning":
      return `background-color: #fe8e43;`;
    default:
      return "";
  }
};

const handleShadow = (shadow, color) => {
  if (shadow) {
    switch (color) {
      case "primary":
        return `box-shadow: 0 7px 10px -5px #69b3fee6;`;
      case "danger":
        return `box-shadow: 0 7px 10px -5px #fe696ae6;`;
      case "success":
        return `box-shadow: 0 7px 10px -5px #42d697e6;`;
      case "warning":
        return `box-shadow: 0 7px 10px -5px #fea569e6;`;
      default:
        return "";
    }
  }
};

const Button = styled.button`
  padding: 12px 20px;
  ${({ block }) => (block ? "width: 100%;" : "")}
  ${({ color }) => handleColor(color)}
  font-size: 16px;
  border: none;
  border-radius: 6px;
  ${({ shadow, color }) => handleShadow(shadow, color)}
  cursor: pointer;

  :hover {
    ${({ color }) => handleColorHover(color)};
    box-shadow: none;
  }
`;

export { Button as ButtonStyled };
