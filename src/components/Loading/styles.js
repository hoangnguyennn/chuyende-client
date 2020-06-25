import styled, { keyframes } from "styled-components";

const spin1 = keyframes`
  from { transform: rotate(0);}
  to { transform: rotate(1turn);}
`;

const spin2 = keyframes`
  from { transform: rotate(0);}
  to { transform: rotate(-2turn);}
`;

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .circle {
    width: 120px;
    height: 120px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${spin1} 2s linear infinite;

    ::before,
    ::after {
      content: "";
      position: absolute;
      border: 5px solid #fff;
      border-radius: 50%;
    }

    ::before {
      width: 80%;
      height: 80%;
      border-top-color: transparent;
      animation: ${spin2} 2s linear infinite;
    }

    ::after {
      width: 60%;
      height: 60%;
      border-right-color: transparent;
    }
  }
`;

export { Loading as LoadingStyled };
