import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaDownload, FaRobot } from "react-icons/fa6";
import { PropsUploadCv, StateJobsAi } from "../Types/Types";
import Button from "../Button/Button";
import { COLORS } from "../styles/styles";
import { toast } from "react-toastify";
import axios, { AxiosRequestConfig } from "axios";
import { Dynamic } from "../Context/ContextDynamic";
import ResultCv from "../IA/ResultCv";
import { useNavigate } from "react-router-dom";

// const UploadCv = ({ setJobs, setDisplayresult }: PropsUploadCv) => {
const UploadCv = () => {
  const cvInput = useRef<HTMLInputElement>(null);
  const [cvUpload, setCvUpload] = useState<File | null>(null);
  const [nameFile, setNameFile] = useState<string>("");
  const [readyAnalyse, setReadyAnalyse] = useState<boolean>(false);
  const [countIa, setCountIa] = useState<number>(0);
  const [cvUrlPreview, setCvUrlPreview] = useState<string | null>(null);
  const { setLoader, setJobs, displayResult, setDisplayresult } = Dynamic();
  const nav = useNavigate();
  const handleIconClick = () => {
    cvInput.current?.click();
  };
  const handleUploadCv = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const fileCatch = await e.target.files?.[0];
      if (fileCatch) {
        if (fileCatch.type !== "application/pdf") {
          return toast.error("Format Pdf uniquement");
        }
        // Vérifier la taille du fichier (max 4 Mo)
        if (fileCatch.size > 1 * 1024 * 1024) {
          return toast.error("Fichier trop grand, 1 Mo max.");
        }
        setCvUpload(fileCatch);
        setCvUrlPreview(URL.createObjectURL(fileCatch));
        setReadyAnalyse(true);
        setNameFile(fileCatch.name);
        // console.log(fileCatch);
      }
    } catch (error) {
      console.log(error);
      return toast.error(
        "Une erreur s'est produite lors du téléchargement du fichier"
      );
    }
  };

  const handleSub = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoader(true);
    const data = new FormData();
    if (cvUpload) {
      data.append("filepdf", cvUpload);
    }
    try {
      const options: AxiosRequestConfig = {
        method: "post",
        url: `${process.env.REACT_APP_API}analyse/pdf`,
        withCredentials: true,
        data,
      };

      const reponse = await axios(options);
      //   console.log(reponse);

      if (reponse.data) {
        if (reponse.data.postes) {
          setJobs(reponse.data.postes);
          setDisplayresult(true);
          setLoader(false);
        }
        if (reponse.data.message) {
          setLoader(false);
          toast.info(reponse.data.message);
          return;
        }
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      toast.error("Une erreur est survenue");
      return;
    }
  };
  const getCountSuggestionJobs = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}count/suggestions`,
        withCredentials: true,
      });
      // console.log(res);
      if (res.data.succes) {
        setCountIa(0);
      }
      if (res.data[0]) {
        if (res.data[0].numbRequet) {
          setCountIa(res.data[0].numbRequet);
        }
      }
    } catch (error) {
      console.log(error);
      setCountIa(0);
      return toast.error("Une erreur mineure s'est produite");
    }
  };
  useEffect(() => {
    getCountSuggestionJobs();
  }, []);
  return (
    <StyledUploadCv>
      <h2>
        Découvrez les métiers qui vous correspondent + recherche offres d'emploi
      </h2>
      <span className="count">
        {countIa} demande{countIa > 1 ? "s" : ""} depuis le 26/07/2024
      </span>
      <FaRobot className="icon-bot" onClick={() => nav("/")} />
      {displayResult ? (
        <ResultCv />
      ) : (
        <div className="box-to-upload-cv">
          <span className="spann">
            Charger votre Cv | Format PDF uniquement - 1 Mo max
          </span>
          {/* <span>Limite : 2 analyses</span> */}
          <div className="div-cv-upload">
            <FaDownload onClick={handleIconClick} className="icon-download" />
            <input type="file" ref={cvInput} onChange={handleUploadCv} />
          </div>
          {readyAnalyse && (
            <div className="div-to-action">
              <p className="name-file">{nameFile}</p>
              <Button text="Lancez l'analyse" actionClick={handleSub} />
            </div>
          )}
          <span className="info-import">
            *Vos fichiers ne sont pas sauvegardés
          </span>
          <span className="info-bottom">
            {process.env.REACT_APP_NAME} vous suggère des métiers que vous
            pouvez exercer en se basant sur vos compétences et votre parcours
          </span>
        </div>
      )}
    </StyledUploadCv>
  );
};

export default UploadCv;
const StyledUploadCv = styled.div`
  margin-top: 25px;
  padding-bottom: 20px;
  border-bottom: solid 2px ${COLORS.second};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  h2 {
    color: ${COLORS.yellow};
  }
  .count {
    display: block;
    margin-top: 15px;
    color: ${COLORS.second};
  }
  .box-to-upload-cv {
    display: flex;
    flex-direction: column;
  }
  .icon-bot {
    text-align: center;
    font-size: 2.1em;
    color: ${COLORS.blue};
    cursor: pointer;
  }
  .box-to-upload-cv > .div-to-action {
    margin-bottom: 15px;
  }

  .spann {
    display: block;
    color: ${COLORS.second};
    font-size: 0.6em;
    margin-top: 10px;
  }
  .name-file {
    font-size: 0.7em;
    border-radius: 3px;
    color: ${COLORS.second};
    /* background: ${COLORS.second}; */
    /* border-bottom: solid 2px ${COLORS.second}; */
    /* margin-bottom: 15px; */
  }
  .div-cv-upload > .icon-download {
    cursor: pointer;
    margin-top: 10px;
    font-size: 3.2em;
    color: ${COLORS.blue};
  }
  .div-cv-upload > input {
    display: none;
  }
  .info-bottom {
    padding: 5px;
    color: ${COLORS.light};
    font-size: 1em;
  }
  .info-import {
    color: ${COLORS.light};
    font-size: 0.8em;
  }
  //width =< 425px
  @media screen and (max-width: 428px) {
    h2 {
      font-size: 1.3em;
    }
  }
`;
