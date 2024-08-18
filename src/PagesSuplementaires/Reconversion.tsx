import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoxQuestions from "./ComponentsReconversion/BoxQuestions";
import { FaRobot } from "react-icons/fa6";
import { COLORS } from "../styles/styles";
import { Dynamic } from "../Context/ContextDynamic";
import Resume from "./ComponentsReconversion/Resume";
import { toast } from "react-toastify";
import axios from "axios";

const Reconversion = () => {
  const [countIa, setCountIa] = useState<number>(0);
  const { resumeReconversion, setResumeReconversion } = Dynamic();
  const nav = useNavigate();
  const goHome = () => {
    setResumeReconversion([]);
    nav("/");
  };

  const getCount = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}count/reconversion`,
        withCredentials: true,
      });
      // console.log(res);
      if (res.data[0]) {
        setCountIa(res.data[0].numbRequet);
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur est survenue");
    }
  };
  useEffect(() => {
    getCount();
  }, []);
  return (
    <StyledReconversion>
      <h1>Le parcours professionnel commence maintenant</h1>
      <strong>Laissez-vous guider</strong>
      <span className="count-skill">
        {countIa} demande{countIa > 1 ? "s" : ""} depuis le 16/08/2024
      </span>
      <FaRobot className="icon-bot" onClick={() => goHome()} />
      {resumeReconversion && resumeReconversion.length > 0 && <Resume />}
      <BoxQuestions />
    </StyledReconversion>
  );
};

export default Reconversion;

const StyledReconversion = styled.div`
  /* background: grey; */
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: ${COLORS.green};
  }
  strong {
    margin: 10px 0px;
    color: ${COLORS.light};
    font-size: 1.3em;
  }
  span {
    color: ${COLORS.second};
  }
  .icon-bot {
    color: ${COLORS.blue};
    margin-top: 10px;
    font-size: 2.1em;
    cursor: pointer;
  }
  //width =< 42px
  @media screen and (max-width: 429px) {
    margin-top: 25px;
    h1 {
      font-size: 1.6em;
      margin-bottom: 15px;
    }
  }
`;
