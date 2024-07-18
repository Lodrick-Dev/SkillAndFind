import React from "react";
import styled from "styled-components";
import { PropsFooter } from "../Types/Types";
import { COLORS } from "../styles/styles";

const Footer = ({ setPopFooter }: PropsFooter) => {
  const chooseOne = (value: string) => {
    setPopFooter(value);
  };
  return (
    <StyledFooter>
      <ul>
        <li onClick={() => chooseOne("politique")}>
          Politique de confidentialité
        </li>
        <li onClick={() => chooseOne("condition")}>
          Conditions d'utilisations
        </li>
        <li onClick={() => chooseOne("mention")}>Mention légale</li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
const StyledFooter = styled.footer`
  margin-top: 30px;
  padding: 10px;
  ul > li {
    cursor: pointer;
    color: ${COLORS.blue};
  }
`;
