import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const Loading = () => {
  return (
    <StyledLoading>
      <div className="box-before-loader">
        <span className="loader"></span>
      </div>
    </StyledLoading>
  );
};

export default Loading;
const StyledLoading = styled.div`
  /* background: ${COLORS.dark};
  opacity: 0.9; */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  -webkit-transform: translate(50%, -50%);
  .box-before-loader {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: blueviolet; */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  .loader {
    width: 84px;
    height: 84px;
    position: relative;
    overflow: hidden;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    /* background: #fff; */
    background: ${COLORS.second};
    transform: translate(-50%, 100%) scale(0);
    animation: push 2s infinite ease-in;
  }
  .loader:after {
    animation-delay: 1s;
  }
  @keyframes push {
    0% {
      transform: translate(-50%, 100%) scale(1);
    }
    15%,
    25% {
      transform: translate(-50%, 50%) scale(1);
    }
    50%,
    75% {
      transform: translate(-50%, -30%) scale(0.5);
    }
    80%,
    100% {
      transform: translate(-50%, -50%) scale(0);
    }
  }
`;
