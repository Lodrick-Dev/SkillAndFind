import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const SearchLoading = () => {
  return (
    <StyledSearchLoading>
      <strong>Collecte des compétences en cours...</strong>
      <span className="loader"></span>
    </StyledSearchLoading>
  );
};

export default SearchLoading;

const StyledSearchLoading = styled.div`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  strong {
    color: ${COLORS.orange};
    font-size: 1.5em;
  }
  .loader {
    width: 48px;
    height: 48px;
    display: block;
    margin: 20px auto;
    position: relative;
    border: 3px solid ${COLORS.orange};
    border-radius: 50%;
    box-sizing: border-box;
    animation: animloader 2s linear infinite;
  }
  .loader::after {
    content: "";
    box-sizing: border-box;
    width: 6px;
    height: 24px;
    background: ${COLORS.orange};
    transform: rotate(-45deg);
    position: absolute;
    bottom: -20px;
    left: 46px;
  }

  @keyframes animloader {
    0% {
      transform: translate(-10px, -10px);
    }
    25% {
      transform: translate(-10px, 10px);
    }
    50% {
      transform: translate(10px, 10px);
    }
    75% {
      transform: translate(10px, -10px);
    }
    100% {
      transform: translate(-10px, -10px);
    }
  }
`;
