import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import styled from "styled-components";
import { COLORS } from "../styles/styles";
import { PropsAvis } from "../Types/Types";

const Header = ({ setSendAvis }: PropsAvis) => {
  return (
    <StyledHeader>
      <FaWpexplorer className="icon-header-logo" />
      <h1>{process.env.REACT_APP_NAME} - IA</h1>
      <button onClick={() => setSendAvis(true)}>Un avis ?</button>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  /* background: blue; */
  display: flex;
  justify-content: flex-start !important;
  padding-top: 10px;
  .icon-header-logo {
    font-size: 2em;
    margin-right: 15px;
    color: ${COLORS.second};
  }
  h1 {
    color: ${COLORS.second};
  }
  button {
    padding: 0px 15px;
    margin-left: 15px;
    border-radius: 10px;
    outline: none;
    border: none;
    background: ${COLORS.blue};
    color: ${COLORS.light};
    font-weight: 800;
    cursor: pointer;
  }
`;
