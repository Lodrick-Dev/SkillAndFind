import styled from "styled-components";
import { GrLinkNext } from "react-icons/gr";
import { COLORS } from "../../styles/styles";
import { useState } from "react";
import BoxSecond from "./BoxSecond";
import BoxThird from "./BoxThird";
import { BoxFourth } from "./BoxFourth";
import { TiArrowBackOutline } from "react-icons/ti";
import { Dynamic } from "../../Context/ContextDynamic";
import { toast } from "react-toastify";
const BoxQuestions = () => {
  const [ordreQuestion, setOrdreQuestion] = useState<number>(0);
  const [passion, setPassion] = useState<string>();
  const [job, setJob] = useState<string>();
  const { setResumeReconversion } = Dynamic();
  const componentReturn = () => {
    switch (ordreQuestion) {
      case 1:
        return (
          <BoxSecond
            ordreQuestion={ordreQuestion}
            setOrdreQuestion={setOrdreQuestion}
          />
        );
      case 2:
        return (
          <BoxThird
            ordreQuestion={ordreQuestion}
            setOrdreQuestion={setOrdreQuestion}
          />
        );
      case 3:
        return <BoxFourth />;
    }
  };

  const changeOrdre = () => {
    if (ordreQuestion !== 3) {
      if (!job) {
        toast.error("Le métier actuel est obligatoire");
        return;
      } else {
        if (passion) {
          let val = { passion: passion };
          setResumeReconversion([val]);
        } else {
          let val = { job };
          setResumeReconversion([val]);
          setOrdreQuestion(ordreQuestion + 1);
          return;
        }
        let val = { job };
        setResumeReconversion((prev) => [...prev, val]);
        setOrdreQuestion(ordreQuestion + 1);
      }
    }
  };
  const cancelProgression = () => {
    setOrdreQuestion(0);
    setResumeReconversion([]);
  };
  return (
    <StyledBoxQuestions>
      <div className="passion">
        {ordreQuestion === 0 ? (
          <>
            <input
              type="text"
              placeholder="Ajouter une passion (Facultatif)"
              value={passion ? passion : ""}
              onChange={(e) => setPassion(e.target.value)}
            />
            <input
              type="text"
              placeholder="Métier Actuel"
              value={job ? job : ""}
              onChange={(e) => setJob(e.target.value)}
            />
          </>
        ) : (
          componentReturn()
        )}
        {ordreQuestion === 0 && (
          <GrLinkNext className="icon-next" onClick={changeOrdre} />
        )}
        {ordreQuestion !== 0 && (
          <TiArrowBackOutline
            className="icon-back"
            onClick={() => cancelProgression()}
          />
        )}
      </div>
    </StyledBoxQuestions>
  );
};

export default BoxQuestions;

const StyledBoxQuestions = styled.div`
  /* background: blue; */
  width: 60%;
  margin-top: 15px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .passion {
    width: 50%;
    display: flex;
    flex-direction: column;
    input {
      padding: 5px;
      margin: 10px 0px;
      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 1.2em;
    }
    .icon-next {
      margin-top: 15px;
      font-size: 2.5em;
      color: ${COLORS.blue};
      transition: 0.5s;
      cursor: pointer;
    }
    .icon-next:hover {
      color: ${COLORS.green};
      margin-right: 15px;
    }

    .icon-back {
      margin-top: 10px;
      font-size: 1.8em;
      color: ${COLORS.second};
      cursor: pointer;
    }
  }
  //width =< 42px
  @media screen and (max-width: 429px) {
    width: 100%;
    .passion {
      width: 80%;
      margin-top: 20px;
    }
  }
`;
