import React, { useState } from "react";
import styled from "styled-components";
import { Dynamic } from "../Context/ContextDynamic";
import { COLORS } from "../styles/styles";
import Button from "../Button/Button";
import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import Redaction from "../Loading/Redaction";

const ReponseJobTarget = () => {
  const { responseTargetJob, postCible, cvRedactionLm } = Dynamic();
  const [loading, setLoading] = useState<boolean>(false);
  const [displayBtn, setDisplayBtn] = useState<boolean>(true);
  const redaction = async () => {
    setLoading(true);
    const data = new FormData();
    if (cvRedactionLm) {
      data.append("filepdf", cvRedactionLm);
      data.append("post", postCible);
      try {
        const options: AxiosRequestConfig = {
          method: "post",
          url: `${process.env.REACT_APP_API}create/letter/motivation`,
          withCredentials: true,
          data,
          responseType: "blob",
        };

        const reponse = await axios(options);
        setLoading(false);
        if (reponse.data) {
          setDisplayBtn(false);
          const blob = new Blob([reponse.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = `Exemple de Lettre de motivation ${postCible}.pdf`;
          link.click();
        }
      } catch (error) {
        setDisplayBtn(false);
        console.log(error);
        setLoading(false);
        toast.error("Une erreur est survenue");
        return;
      }
    } else {
      setLoading(false);
      toast.error("Un Cv est requis");
      return;
    }
  };
  return (
    <StyledReponseTargetJob>
      {loading && <Redaction />}
      <span className="info-ia">*Générer par l'IA qui fait de son mieux</span>
      <ul>
        {responseTargetJob &&
          responseTargetJob.length &&
          responseTargetJob.map((res, index) => (
            <div className="list-li-check" key={index}>
              <li>
                {" "}
                <strong>Poste visé : </strong> {res.poste}
              </li>
              <li>
                <strong>Avis : </strong> {res.avis}
              </li>
              <li>
                {" "}
                <strong>Conseil : </strong>
                {res.conseil}
              </li>
            </div>
          ))}
      </ul>
      {displayBtn && (
        <Button
          text="Exemple de lettre de motivation"
          actionClick={redaction}
        />
      )}
    </StyledReponseTargetJob>
  );
};

export default ReponseJobTarget;
const StyledReponseTargetJob = styled.div`
  background: ${COLORS.main};
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  width: 70%;
  .info-ia {
    display: block;
    text-align: left;
    width: 100%;
    color: ${COLORS.light};
  }
  ul > .list-li-check {
    display: flex;
    flex-direction: column;
    li {
      margin: 10px auto;
    }
  }
  //width =< 425px
  @media screen and (max-width: 428px) {
    width: 90%;
  }
`;
