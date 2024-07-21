import React, { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import styled from "styled-components";
import Button from "../Button/Button";
import axios, { AxiosRequestConfig } from "axios";
import { Dynamic } from "../Context/ContextDynamic";
import { toast } from "react-toastify";
import { COLORS } from "../styles/styles";

const UploadCvTwo = () => {
  const [cvUpload, setCvUpload] = useState<File | null>(null);
  const [targetPost, setTargetPost] = useState<string>("");
  const cvInput = useRef<HTMLInputElement>(null);
  const [nameFile, setNameFile] = useState<string>("");
  const [readyAnalyse, setReadyAnalyse] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const { setLoader, setResponseTargetJob } = Dynamic();
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
        // console.log(fileCatch);
        setReadyAnalyse(true);
        setNameFile(fileCatch.name);
        setLink(`https://www.google.com/search?q=fiche+rome+${targetPost}`);
      }
    } catch (error) {
      console.log(error);
      return toast.error(
        "Une erreur s'est produite lors du téléchargement du fichier"
      );
    }
  };
  const handleIconClick = () => {
    cvInput.current?.click();
  };
  const handleSub = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoader(true);
    if (!targetPost) {
      setLoader(false);
      toast.error("Aucun poste n'est visé");
      return;
    }
    const data = new FormData();
    if (cvUpload) {
      data.append("filepdf", cvUpload);
      data.append("post", targetPost);
    }
    try {
      const options: AxiosRequestConfig = {
        method: "post",
        url: `${process.env.REACT_APP_API}analyse/verification/job`,
        withCredentials: true,
        data,
      };

      const reponse = await axios(options);
      console.log(reponse);
      if (reponse.data) {
        if (reponse.data.postTarget) {
          setResponseTargetJob([reponse.data.postTarget]);
          setLoader(false);
        } else if (reponse.data.message) {
          setLoader(false);
          toast.info(reponse.data.message);
          return;
        } else {
          toast.error("Erreur inattendue s'est produite");
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
    <StyledUploadCvTwo>
      <h2>Vérifiez si votre cv est correcte pour le poste visé</h2>
      <span className="spann">Format PDF uniquement - 1 Mo max</span>
      {/* <span>Limite : 2 vérifications</span> */}
      <div className="div-cv-uploadtwo">
        <input
          type="text"
          placeholder="Poste visé"
          onChange={(e) => setTargetPost(e.target.value)}
        />
        <FaDownload onClick={handleIconClick} className="icon-download" />
        <input type="file" ref={cvInput} onChange={handleUploadCv} />
      </div>
      {readyAnalyse && (
        <div className="last-div">
          <p className="name-file">{nameFile}</p>
          <Button text="Lancez la vérification" actionClick={handleSub} />
          {targetPost && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Voir la fiche rome de {targetPost} 👀
            </a>
          )}
        </div>
      )}
    </StyledUploadCvTwo>
  );
};

export default UploadCvTwo;
const StyledUploadCvTwo = styled.form`
  /* background: red; */
  margin-top: 45px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  /* border-bottom: solid 2px ${COLORS.second}; */
  /* border: solid 2px ${COLORS.second}; */
  padding-bottom: 20px;
  h2 {
    color: ${COLORS.light};
  }
  span {
    font-size: 0.7em;
  }
  > .div-cv-uploadtwo {
    /* background: pink; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      width: 50%;
      padding: 5px;
      border: none;
      border-radius: 5px;
      font-size: 1.1em;
      outline: none;
    }
    input:last-child {
      display: none;
    }
    .icon-download {
      margin-top: 10px;
      font-size: 3em;
      color: ${COLORS.blue};
      cursor: pointer;
      /* padding-bottom: 10px; */
      /* border-bottom: solid 2px white; */
    }
  }
  .last-div {
    display: flex;
    flex-direction: column;
    a {
      color: ${COLORS.blue};
      text-decoration: none;
      margin-top: 5px;
      cursor: pointer;
      font-size: 0.8em;
    }
  }
  div > .name-file {
    font-size: 0.8em;
    margin-top: 5px;
    color: ${COLORS.second};
  }
  //width =< 425px
  @media screen and (max-width: 428px) {
    h2 {
      font-size: 1.3em;
    }
  }
`;
