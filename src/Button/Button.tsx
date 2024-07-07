import React from "react";
import { PropsButton } from "../Types/Types";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const Button = ({ text, actionClick }: PropsButton) => {
  return <StyledButton onClick={actionClick}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 5px 20px;
  border: none;
  outline: none;
  font-size: 1.1em;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px auto;
  background: ${COLORS.blue};
  color: ${COLORS.light};
  font-weight: 700;
`;
