import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa6";
import { PropsUploadCv, StateJobsAi } from "../Types/Types";
import Button from "../Button/Button";
import { COLORS } from "../styles/styles";
import { toast } from "react-toastify";
import axios, { AxiosRequestConfig } from "axios";

const UploadCv = ({ setJobs, setDisplayresult, setLoader }: PropsUploadCv) => {
  const cvInput = useRef<HTMLInputElement>(null);
  const [cvUpload, setCvUpload] = useState<File | null>(null);
  const [nameFile, setNameFile] = useState<string>("");
  const [readyAnalyse, setReadyAnalyse] = useState<boolean>(false);
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
  return (
    <StyledUploadCv>
      <h2>Charger votre Cv</h2>
      <span>Format PDF uniquement</span>
      <div className="div-cv-upload">
        <FaDownload onClick={handleIconClick} className="icon-download" />
        <input type="file" ref={cvInput} onChange={handleUploadCv} />
      </div>
      {readyAnalyse && (
        <div>
          <span>{nameFile}</span>
          <Button text="L'analyse de l'IA" actionClick={handleSub} />
        </div>
      )}
    </StyledUploadCv>
  );
};

export default UploadCv;
const StyledUploadCv = styled.form`
  margin-top: 10px;
  h2 {
    color: ${COLORS.light};
  }
  span {
    display: block;
    color: ${COLORS.light};
    font-size: 0.6em;
    margin-top: 10px;
  }
  .div-cv-upload > .icon-download {
    cursor: pointer;
    margin: 10px auto 50px;
    font-size: 3.2em;
    color: ${COLORS.blue};
  }
  .div-cv-upload > input {
    display: none;
  }
`;
