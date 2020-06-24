import styled from "styled-components";

const UserItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
  }

  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    width: 80px;
    line-height: 20px;
    overflow: hidden;

    small {
      display: block;
    }
  }

  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    padding: 16px;
    width: 240px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    display: none;

    .dropdown-item {
      display: flex;
      color: #69b3fe;
      text-decoration: none;

      :not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }

  :hover .dropdown {
    display: block;
  }
`;

export { UserItem as UserItemStyled };
