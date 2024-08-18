import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/styles";
import { MdCancel } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { PropsBoxSecond } from "../../Types/Types";
import { Dynamic } from "../../Context/ContextDynamic";
import { toast } from "react-toastify";

const BoxThird = ({ ordreQuestion, setOrdreQuestion }: PropsBoxSecond) => {
  const [interet, setInteret] = useState([
    "Arts et créativité",
    "Technologie",
    "Communication",
    "Sciences",
    "Aide des autres",
    "Sport",
    "Bien-être",
    "Affaires",
    "Cuisine",
    "Gastronomie",
    "Voyages",
    "Découvertes",
    "Bricolage",
    "Artisanat",
  ]);
  const [choisi, setChoisi] = useState<string[]>([]);
  const { setResumeReconversion } = Dynamic();
  // demandé à l'ia d'envoyé les hard skill pour un domaine choisi

  const selectInterect = (e: string) => {
    setChoisi((prev) => [...prev, e]);
  };

  const changeOrdre = () => {
    if (ordreQuestion !== 3) {
      if (!choisi || choisi.length < 1) {
        toast.error("Selectionnez au moins un intérêt personnelle");
        return;
      } else {
        const va = choisi.join(" ,");
        let val = { interetPerso: va };
        setResumeReconversion((prev) => [...prev, val]);
        setOrdreQuestion(ordreQuestion + 1);
      }
    }
  };
  return (
    <StyledBoxThirds>
      <div className="interet-perso">
        <h3>Centres d'intérêt</h3>
        {interet &&
          interet.map((int, index) => (
            <span key={index} onClick={() => selectInterect(int)}>
              {int}
            </span>
          ))}
      </div>
      {choisi && choisi.length > 0 && (
        <div className="interet-selected">
          <div className="box-h4-n-icon">
            <h4>
              Intéret{choisi.length > 1 ? "s" : ""} choisi
              {choisi.length > 1 ? "s" : ""}
            </h4>
            <MdCancel className="cancel-icon" onClick={() => setChoisi([])} />
          </div>
          {choisi.map((interet, index) => (
            <span key={index}>{interet}</span>
          ))}
        </div>
      )}
      <GrLinkNext className="icon-next" onClick={() => changeOrdre()} />
    </StyledBoxThirds>
  );
};

export default BoxThird;

const StyledBoxThirds = styled.div`
  /* background: red; */
  /* height: 30vh; */
  .interet-perso {
    h3 {
      width: 100%;
      color: ${COLORS.second};
      margin-bottom: 10px;
    }
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    span {
      margin: 5px;
      background: ${COLORS.blue};
      color: ${COLORS.light};
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
    span:active {
      background: ${COLORS.green};
    }
  }

  .interet-selected {
    margin-top: 10px;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    .box-h4-n-icon {
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      h4 {
        color: ${COLORS.second};
        margin-right: 10px;
      }
      .cancel-icon {
        color: ${COLORS.orange};
        cursor: pointer;
      }
    }
    span {
      padding: 5px;
      margin: 5px;
      border-radius: 5px;
      background: ${COLORS.green};
      color: ${COLORS.blue};
    }
  }
`;
