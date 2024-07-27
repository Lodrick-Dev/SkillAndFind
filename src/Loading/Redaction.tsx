import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const Redaction = () => {
  return (
    <StyledRedaction>
      <span className="loader"></span>
    </StyledRedaction>
  );
};

export default Redaction;

const StyledRedaction = styled.div`
  background: ${COLORS.transparent};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  height: 100%;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid ${COLORS.light};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
