import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { COLORS } from "../../styles/styles";
import Communication from "./SoftSkills/Communication";
import { MdCancel } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Thinks from "./SoftSkills/Thinks";
import { Gestions } from "./SoftSkills/Gestions";
import Leader from "./SoftSkills/Leader";
import Attitude from "./SoftSkills/Attitude";
import Emotions from "./SoftSkills/Emotions";
import Creatives from "./SoftSkills/Creatives";
import Apprentissage from "./SoftSkills/Apprentissage";
import SensEthique from "./SoftSkills/SensEthique";
import Numerik from "./SoftSkills/Numerik";
import Commercial from "./SoftSkills/Commercial";
import { Dynamic } from "../../Context/ContextDynamic";

export const BoxFourth = () => {
  const [categories, setCategorie] = useState<string[]>([
    "Communication et relationnel",
    "Pensée critique",
    "Organisation et gestion",
    "Leadership",
    "Attitude",
    "Emotionnelles",
    "Créatives",
    "Apprentissage",
    "Sens éthique",
    "Numériques",
    "Commercial",
  ]);
  const [catChose, setCatChose] = useState<string>("");
  const [choisiSkills, setChoisiSkills] = useState<string[]>([]);
  const { setResumeReconversion } = Dynamic();
  const choseCategorie = (cat: string) => {
    switch (cat) {
      case "Communication et relationnel":
        setCatChose(cat);
        break;
      case "Pensée critique":
        setCatChose(cat);
        break;
      case "Organisation et gestion":
        setCatChose(cat);
        break;
      case "Leadership":
        setCatChose(cat);
        break;
      case "Attitude":
        setCatChose(cat);
        break;
      case "Emotionnelles":
        setCatChose(cat);
        break;
      case "Créatives":
        setCatChose(cat);
        break;
      case "Apprentissage":
        setCatChose(cat);
        break;
      case "Sens éthique":
        setCatChose(cat);
        break;
      case "Numériques":
        setCatChose(cat);
        break;
      case "Commercial":
        setCatChose(cat);
        break;
      case "Culturel":
        setCatChose(cat);
        break;
      default:
        setCatChose("");
        break;
    }
  };
  const returnCategorie = () => {
    switch (catChose) {
      case "Communication et relationnel":
        return <Communication setChoisiSkills={setChoisiSkills} />;
      case "Pensée critique":
        return <Thinks setChoisiSkills={setChoisiSkills} />;
      case "Organisation et gestion":
        return <Gestions setChoisiSkills={setChoisiSkills} />;
      case "Leadership":
        return <Leader setChoisiSkills={setChoisiSkills} />;
      case "Attitude":
        return <Attitude setChoisiSkills={setChoisiSkills} />;
      case "Emotionnelles":
        return <Emotions setChoisiSkills={setChoisiSkills} />;
      case "Créatives":
        return <Creatives setChoisiSkills={setChoisiSkills} />;
      case "Apprentissage":
        return <Apprentissage setChoisiSkills={setChoisiSkills} />;
      case "Sens éthique":
        return <SensEthique setChoisiSkills={setChoisiSkills} />;
      case "Numériques":
        return <Numerik setChoisiSkills={setChoisiSkills} />;
      case "Commercial":
        return <Commercial setChoisiSkills={setChoisiSkills} />;

      default:
        return (
          categories &&
          categories.map((cate, index) => (
            <span key={index} onClick={() => choseCategorie(cate)}>
              {cate}
            </span>
          ))
        );
    }
  };

  const validSkillsAdd = () => {
    const va = choisiSkills.join();
    let val = { softSkill: va };
    setResumeReconversion((prev) => [...prev, val]);
    setChoisiSkills([]);
  };
  return (
    <StyledBoxFourth>
      <h3>Compétences relationnelles</h3>
      {catChose && (
        <div className="info-n-back">
          <strong>{catChose} : </strong>
          <IoArrowBackCircleSharp
            className="icon-to-back"
            onClick={() => setCatChose("")}
          />
        </div>
      )}
      <div className="list-categories">{returnCategorie()}</div>
      {choisiSkills && choisiSkills.length > 0 && (
        <div className="box-skills-choses">
          <div className="sous-legend">
            <h4>
              Compétence{choisiSkills.length > 1 ? "s" : ""} ajoutée
              {choisiSkills.length > 1 ? "s" : ""}
            </h4>
            <MdCancel
              className="cancel-icon"
              onClick={() => setChoisiSkills([])}
            />
            <FaCheckCircle
              className="icon-to-valid"
              onClick={() => validSkillsAdd()}
            />
          </div>
          {choisiSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      )}
    </StyledBoxFourth>
  );
};

const StyledBoxFourth = styled.div`
  /* background: red; */
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  h3 {
    width: 100%;
    font-size: 1.3em;
    margin-bottom: 5px;
    color: ${COLORS.second};
  }
  .info-n-back {
    display: flex;
    align-items: center;
    width: 100%;
    strong {
      text-align: left;
      font-size: 0.9em;
      margin-right: 15px;
    }
    .icon-to-back {
      color: ${COLORS.blue};
      font-size: 1.3em;
      cursor: pointer;
    }
    .icon-to-back:active {
      color: ${COLORS.green};
    }
  }
  .list-categories {
    display: flex;
    flex-wrap: wrap;
    span {
      display: block;
      justify-content: center;
      align-items: center;
      padding: 5px;
      background: ${COLORS.blue};
      color: ${COLORS.light};
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
      /* transition: 0.3s; */
      transition: 0.2s;
    }
    span:active {
      background: ${COLORS.green};
    }
  }

  .box-skills-choses {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    .sous-legend {
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      h4 {
        color: ${COLORS.second};
        display: block;
        margin-right: 10px;
      }
      .cancel-icon {
        cursor: pointer;
        color: ${COLORS.orange};
        margin-right: 15px;
      }
      .icon-to-valid {
        cursor: pointer;
        font-size: 1.3em;
        color: ${COLORS.green};
      }
    }
    span {
      margin: 5px;
      padding: 5px;
      background: ${COLORS.green};
      color: ${COLORS.blue};
      border-radius: 5px;
    }
  }
`;
