import React from "react";
import styled from "styled-components";
import { PropsPopFooter } from "../Types/Types";
import { COLORS } from "../styles/styles";
import PolitiqueConfidentialite from "./PolitiqueConfidentialite";
import Conditions from "./Conditions";
import Mentions from "./Mentions";

const PopFooter = ({ popFooter, setPopFooter }: PropsPopFooter) => {
  const displayOne = () => {
    switch (popFooter) {
      case "politique":
        return <PolitiqueConfidentialite />;
      case "condition":
        return <Conditions />;
      case "mention":
        return <Mentions />;

      default:
        return <PolitiqueConfidentialite />;
    }
  };
  return (
    <StyledPopFooter onClick={() => setPopFooter("")}>
      <div className="box-to-one-info" onClick={(e) => e.stopPropagation()}>
        {popFooter && displayOne()}
      </div>
    </StyledPopFooter>
  );
};

export default PopFooter;

const StyledPopFooter = styled.div`
  position: absolute;
  z-index: 15;
  background: ${COLORS.transparent};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  height: 100vh;
  width: 100%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .box-to-one-info {
    cursor: auto;
    margin-top: 50px;
    height: 70%;
    width: 70%;
    background: ${COLORS.dark};
    border-radius: 5px;
    overflow-y: scroll;
  }
  //width =< 42px
  @media screen and (max-width: 429px) {
    .box-to-one-info {
      margin-top: 0px;
      width: 90%;
    }
  }
`;
