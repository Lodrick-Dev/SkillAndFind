import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const PopUp = () => {
  const accept = () => {
    const date = new Date();
    date.setTime(date.getTime() + 90 * 24 * 60 * 60 * 1000); // Convertir les jours en millisecondes
    const expires = "expires=" + date.toUTCString();
    document.cookie =
      "acceptSkillXp" + "=" + "okAcceptToSKillXP" + ";" + expires + ";path=/";
    window.location.reload();
  };
  const redirectToGoogle = () => {
    window.location.href = "https://www.google.com";
  };
  return (
    <StyledPopUp>
      <div>
        <p>
          En naviguant sur SkillXP, vous acceptez nos conditions d'utilisation
          et notre politique de confidentialité.
        </p>
        <button onClick={accept}>Oui</button>
        <button className="red-btn" onClickCapture={redirectToGoogle}>
          Non
        </button>
      </div>
    </StyledPopUp>
  );
};

export default PopUp;
const StyledPopUp = styled.div`
  background: ${COLORS.transparent};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  position: fixed;
  z-index: 13;
  height: 100vh;
  width: 100%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    p {
      color: ${COLORS.light};
    }
    button {
      margin-top: 10px;
      width: 20%;
      border: none;
      border-radius: 3px;
      background: ${COLORS.blue};
      color: ${COLORS.light};
      font-size: 1em;
      padding: 3px;
      cursor: pointer;
    }
    .red-btn {
      background: ${COLORS.second} !important;
    }
  }
  //width =< 42px
  @media screen and (max-width: 428px) {
    width: 100%;
    height: 100vh;
    > div {
      padding: 20px;
    }
  }
`;
