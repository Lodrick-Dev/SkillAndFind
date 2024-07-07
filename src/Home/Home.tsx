import styled from "styled-components";
import UploadCv from "../Forms/UploadCv";
import { useEffect, useState } from "react";
import { PropsHome, StateJobsAi } from "../Types/Types";
import { FaRobot } from "react-icons/fa6";
import { COLORS } from "../styles/styles";
import ResultCv from "../IA/ResultCv";

const Home = ({ setLoader }: PropsHome) => {
  const [jobs, setJobs] = useState<StateJobsAi[]>([]);
  const [displayResult, setDisplayresult] = useState<boolean>(false);
  return (
    <StyledHome>
      <h1>
        Découvrez les métiers qui vous correspondent avec{" "}
        <span>Skill And Find </span>
      </h1>
      <FaRobot
        className="icon-bot"
        onClick={() => {
          setJobs([]);
          setDisplayresult(false);
        }}
      />
      {!displayResult ? (
        <UploadCv
          setJobs={setJobs}
          setDisplayresult={setDisplayresult}
          setLoader={setLoader}
        />
      ) : (
        <ResultCv jobs={jobs} />
      )}
      <span className="info-bottom">
        Skill And Find vous suggère des métiers que vous pouvez exercer en se
        basant sur vos compétences et votre parcours
      </span>
      <span>*Vos fichiers ne sont pas sauvegardés</span>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 30px auto;
    color: ${COLORS.light};
    span {
      /* background: ${COLORS.dark}; */
      padding: 10px;
      border-radius: 5px;
      color: ${COLORS.second};
    }
  }
  .icon-bot {
    color: ${COLORS.blue};
    font-size: 2.1em;
    cursor: pointer;
  }
  span {
    color: ${COLORS.second};
    margin-bottom: 10px;
    font-size: 0.8em;
  }
  .info-bottom {
    padding-top: 10px;
    border-top: solid 2px ${COLORS.second};
    margin-top: 35px;
  }
`;
