import styled from "styled-components";
import UploadCv from "../Forms/UploadCv";
import { useState } from "react";
import { StateJobsAi } from "../Types/Types";
import { FaRobot } from "react-icons/fa6";
import { COLORS } from "../styles/styles";
import ResultCv from "../IA/ResultCv";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { Dynamic } from "../Context/ContextDynamic";
import UploadCvTwo from "../Forms/UploadCvTwo";
import ReponseJobTarget from "../IA/ReponseJobTarget";

const Home = () => {
  const [jobs, setJobs] = useState<StateJobsAi[]>([]);
  const [displayResult, setDisplayresult] = useState<boolean>(false);
  const { setLoader, responseTargetJob } = Dynamic();
  const downloadResult = async () => {
    setLoader(true);
    try {
      const data = { jobs };

      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API}genere/results`,
        withCredentials: true,
        data,
        responseType: "blob",
      });
      // console.log(res);
      const blob = new Blob([res.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "result.pdf";
      link.click();
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
      toast.error("Une erreur est survenue lors du téléchargement");
      return;
    }
  };
  return (
    <StyledHome>
      <h1>Révélez Votre Potentiel Professionnel</h1>
      {/* <h2>Explorez {process.env.REACT_APP:_NAME}</h2> */}
      {/* <h1>
        Explorez <span>{process.env.REACT_APP_NAME}</span> pour découvrir des
        suggestions de métiers adaptés à votre profil et bien plus encore
      </h1> */}
      <FaRobot
        className="icon-bot"
        onClick={() => {
          setJobs([]);
          setDisplayresult(false);
        }}
      />
      {!displayResult ? (
        <>
          <UploadCv setJobs={setJobs} setDisplayresult={setDisplayresult} />
          <UploadCvTwo />
        </>
      ) : (
        <ResultCv jobs={jobs} />
      )}
      {responseTargetJob && responseTargetJob.length > 0 && (
        <ReponseJobTarget />
      )}
      {/* {!displayResult && (
        <>
          <span className="info-bottom">
            {process.env.REACT_APP_NAME} vous suggère des métiers que vous
            pouvez exercer en se basant sur vos compétences et votre parcours
          </span>
          <span className="search-span">
            Faites une recherche sur les métiers en un clic - adapter votre cv
            pour postuler
          </span>
        </>
      )}
      <span className="info-import">*Vos fichiers ne sont pas sauvegardés</span> */}
      {displayResult && (
        <Button
          text="Téléchargez les suggestions"
          actionClick={downloadResult}
        />
      )}
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: pink; */
  h1 {
    margin: 20px auto;
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
    margin: 5px 0px;
    font-size: 0.8em;
  }
  //width =< 42px
  @media screen and (max-width: 428px) {
    h1 {
      font-size: 1.4em;
    }
  }
`;
