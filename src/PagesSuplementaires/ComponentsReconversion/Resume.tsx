import React, { useState } from "react";
import { Dynamic } from "../../Context/ContextDynamic";
import styled from "styled-components";
import { COLORS } from "../../styles/styles";
import Button from "../../Button/Button";
import ReponseReconversion from "../../IA/ReponseReconversion";
import { toast } from "react-toastify";
import axios from "axios";
import { DataToResume } from "../../Types/Types";

const Resume = () => {
  const [reponse, setReponse] = useState<DataToResume[]>([]);
  const { resumeReconversion, setLoader } = Dynamic();
  const handleAnalyse = async () => {
    try {
      setLoader(true);
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API}analyse/reconversion`,
        withCredentials: true,
        data: { resumeReconversion },
      });
      if (res.data.suggestion) {
        setLoader(false);
        setReponse(res.data.suggestion);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      toast.error("Une erreur est survenue");
    }
  };
  return (
    <StyledResume>
      <h3>Résumé</h3>
      {resumeReconversion &&
        resumeReconversion.length > 0 &&
        resumeReconversion.map((info, index) => (
          <div key={index} className="div-resume">
            {info.passion && (
              <div>
                {" "}
                <strong>Passion :</strong>
                <p>{info.passion}</p>
              </div>
            )}
            {info.job && (
              <div>
                {" "}
                <strong>Poste actuel :</strong>
                <p>{info.job}</p>
              </div>
            )}
            {info.skills && (
              <div>
                <strong>Compétences :</strong>
                <p>{info.skills}</p>
              </div>
            )}
            {info.why && (
              <div>
                <strong>Raison :</strong>
                <p>{info.why}</p>
              </div>
            )}
            {info.sector && (
              <div>
                <strong>Secteur :</strong>
                <p>{info.sector}</p>
              </div>
            )}
            {info.wish && (
              <div>
                <strong>Environnement souhaité :</strong>
                <p>{info.wish}</p>
              </div>
            )}
            {info.interetPerso && (
              <div>
                <strong>Centres d'intérêt :</strong>
                <p>{info.interetPerso}</p>
              </div>
            )}
            {info.interetPro && (
              <div>
                <strong>Intérêt pro :</strong>
                <p>{info.interetPro}</p>
              </div>
            )}
            {info.softSkill && (
              <div>
                <strong>Soft-skills :</strong>
                <p>{info.softSkill}</p>
              </div>
            )}
            {info.hardSkill && (
              <div>
                <strong>Hard-skills : </strong>
                <p>{info.hardSkill}</p>
              </div>
            )}
          </div>
        ))}
      {resumeReconversion.length === 5 && (
        <Button text="Lancer l'analyse" actionClick={handleAnalyse} />
      )}
      {reponse && reponse.length > 0 && (
        <ReponseReconversion reponse={reponse} />
      )}
    </StyledResume>
  );
};

export default Resume;

const StyledResume = styled.div`
  /* background: red; */
  margin-top: 20px;
  width: 50%;
  border: solid 2px ${COLORS.blue};
  padding: 15px;
  border-radius: 5px;
  h3 {
    color: ${COLORS.green};
  }
  .div-resume {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border-top: solid 1px ${COLORS.light};
      padding: 5px;
      strong {
        margin: 0px;
        margin-right: 10px;
        width: 100%;
      }
      p {
        margin-top: 3px;
        color: ${COLORS.light};
      }
    }
  }
  //width =< 42px
  @media screen and (max-width: 429px) {
    width: 95%;
    .div-resume {
      width: 100%;
      div {
        strong {
          /* background: pink; */
          font-size: 1em;
        }
      }
    }
  }
`;
