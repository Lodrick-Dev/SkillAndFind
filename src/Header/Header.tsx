import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";
import { PropsAvis } from "../Types/Types";
import { useNavigate } from "react-router-dom";

const Header = ({ setSendAvis }: PropsAvis) => {
  const nav = useNavigate();
  return (
    <StyledHeader>
      <img
        src="./assets/skillXp.png"
        alt="logo skillxp"
        onClick={() => nav("/")}
      />
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
  align-items: center;
  padding-top: 10px;
  img {
    display: block;
    cursor: pointer;
    width: 4%;
  }
  .icon-header-logo {
    font-size: 2em;
    margin-right: 15px;
    color: ${COLORS.second};
  }
  h1 {
    color: ${COLORS.second};
  }
  button {
    height: 5vh;
    padding: 0px 15px;
    margin-left: 20px;
    border-radius: 10px;
    outline: none;
    border: none;
    background: ${COLORS.blue};
    color: ${COLORS.light};
    font-weight: 800;
    cursor: pointer;
  }
  //width =< 425px
  @media screen and (max-width: 429px) {
    img {
      width: 10%;
    }
  }
`;
