import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { COLORS } from "../styles/styles";
import { PropsAvis } from "../Types/Types";
import { toast } from "react-toastify";
import axios from "axios";
import { Dynamic } from "../Context/ContextDynamic";

const Avis = ({ setSendAvis }: PropsAvis) => {
  const [avis, setAvis] = useState<string>("");
  const [spam, setSpam] = useState<string>("");
  const { setSendLoaderMail } = Dynamic();
  const sendAvis = async () => {
    setSendLoaderMail(true);
    if (spam) {
      toast.error("Erreur");
      return;
    }

    if (!avis) {
      toast.error("Un avis est nécessaire");
      setSendLoaderMail(false);
      return;
    } else {
      try {
        const res = await axios({
          method: "post",
          url: `${process.env.REACT_APP_API}send/mail`,
          withCredentials: true,
          data: { avis },
        });

        if (res.data) {
          setSendLoaderMail(false);
          setSendAvis(false);
          if (res.data.message) {
            setAvis("");
            toast.success(res.data.message);
            return;
          }
          if (res.data.error) {
            toast.success(res.data.error);
            return;
          }
        }
      } catch (error) {
        setSendLoaderMail(false);
        setSendAvis(false);
        console.log(error);
        toast.error("Une erreur est survenue");
        return;
      }
    }
  };
  return (
    <StyledAvis onClick={() => setSendAvis(false)}>
      <div className="sous-div-avis" onClick={(e) => e.stopPropagation()}>
        <h2>Laissez-nous un avis*</h2>
        <textarea
          value={avis ? avis : ""}
          onChange={(e) => setAvis(e.target.value)}
          placeholder="Votre avis"
        ></textarea>
        <input type="hidden" onChange={(e) => setSpam(e.target.value)} />
        <Button text="Envoyez" actionClick={sendAvis} />
        <span>*Les avis peuvent être publié</span>
      </div>
    </StyledAvis>
  );
};

export default Avis;

const StyledAvis = styled.div`
  background: ${COLORS.transparent};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  position: fixed;
  /* z-index: 10; */
  width: 100%;
  height: 100vh;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  -webkit-transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  > .sous-div-avis {
    h2 {
      color: ${COLORS.light};
      margin-bottom: 10px;
    }
    width: 70%;
    display: flex;
    flex-direction: column;
    background: ${COLORS.dark};
    border-radius: 5px;
    padding: 5px;
    textarea {
      padding: 5px;
      height: 10vh;
      resize: none;
      outline: none;
      border: none;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    span {
      font-size: 0.8em;
      color: ${COLORS.light};
    }
  }
  //width =< 425px
  @media screen and (max-width: 429px) {
    .sous-div-avis {
      width: 90%;
    }
  }
`;
