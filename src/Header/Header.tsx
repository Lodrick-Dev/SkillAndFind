import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const Header = () => {
  return (
    <StyledHeader>
      <FaWpexplorer className="icon-header-logo" />
      <h1>{process.env.REACT_APP_NAME}</h1>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  /* background: blue; */
  display: flex;
  padding-top: 10px;
  .icon-header-logo {
    font-size: 2em;
    margin-right: 15px;
    color: ${COLORS.second};
  }
  h1 {
    color: ${COLORS.second};
  }
`;
