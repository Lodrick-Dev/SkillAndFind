import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const SendLoaderMail = () => {
  return (
    <StyledSendLoaderMail>
      <div className="box-before-send-loader">
        <span>Envoie en cours...</span>
        <span className="loader"></span>
      </div>
    </StyledSendLoaderMail>
  );
};

export default SendLoaderMail;
const StyledSendLoaderMail = styled.div`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  -webkit-transform: translate(50%, -50%);
  .box-before-send-loader {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: blueviolet; */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    span {
      text-align: center;
      font-weight: 800;
      font-size: 1.5em;
      color: ${COLORS.light};
      margin-bottom: 15px;
    }
  }
  .loader {
    width: 100px;
    height: 75px;
    margin: 0 auto;
    background: #fff;
    position: relative;
    border-radius: 100%;
  }
  .loader:before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    border: 15px solid transparent;
    border-top: 25px solid #fff;
    transform: rotate(45deg);
    top: 50px;
    left: -15px;
  }

  .loader:after {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #ff3d00;
    box-shadow: 20px 0 #ff3d00, -20px 0 #ff3d00;
    animation: flash 0.5s ease-out infinite alternate;
  }

  @keyframes flash {
    0% {
      background-color: rgba(255, 60, 0, 0.25);
      box-shadow: 20px 0 rgba(255, 60, 0, 0.25), -20px 0 #ff3d00;
    }
    50% {
      background-color: #ff3d00;
      box-shadow: 20px 0 rgba(255, 60, 0, 0.25), -20px 0 rgba(255, 60, 0, 0.25);
    }
    100% {
      background-color: rgba(255, 60, 0, 0.25);
      box-shadow: 20px 0 #ff3d00, -20px 0 rgba(255, 60, 0, 0.25);
    }
  }
`;
