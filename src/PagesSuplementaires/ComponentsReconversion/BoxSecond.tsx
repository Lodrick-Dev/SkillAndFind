import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Dynamic } from "../../Context/ContextDynamic";
import { PropsBoxSecond } from "../../Types/Types";

const BoxSecond = ({ ordreQuestion, setOrdreQuestion }: PropsBoxSecond) => {
  const [sector, setSector] = useState<string>("");
  const [wish, setWish] = useState<string>("");
  const { setResumeReconversion } = Dynamic();
  const changeOrdre = () => {
    if (ordreQuestion !== 3) {
      if (!sector || !wish) {
        toast.error("Le secteur et l'environnement sont obligatoires");
        return;
      } else {
        let val = { sector };
        setResumeReconversion((prev) => [...prev, val]);
        let wishs = { wish };
        setResumeReconversion((prev) => [...prev, wishs]);
        setOrdreQuestion(ordreQuestion + 1);
      }
    }
  };
  return (
    <StyledBoxSecond>
      <div className="question-second-box">
        <input
          type="text"
          className="inpu-sector"
          placeholder="Secteur qui vous intéresse"
          onChange={(e) => setSector(e.target.value)}
        />
        <select onChange={(e) => setWish(e.target.value)}>
          <option value="">-- Environnement souhaité --</option>
          <option value="Présentiel">Présentiel</option>
          <option value="En Ligne">En Ligne</option>
          <option value="Hybride">Hybride</option>
        </select>
      </div>
      <GrLinkNext className="icon-next" onClick={() => changeOrdre()} />
    </StyledBoxSecond>
  );
};

export default BoxSecond;
const StyledBoxSecond = styled.div`
  margin-top: 15px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: yellow; */
  .question-second-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .inpu-sector {
      width: 100%;
    }
    input {
      outline: none;
    }
    select {
      cursor: pointer;
      width: 60%;
      padding: 5px;
      margin: 10px 0px;
      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 1.2em;
    }
  }
  //width =< 42px
  @media screen and (max-width: 429px) {
    width: 100%;
    .question-second-box {
      select {
        width: 75%;
      }
    }
  }
`;
