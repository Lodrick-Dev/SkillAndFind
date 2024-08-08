import React, { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import { COLORS } from "../styles/styles";
import { toast } from "react-toastify";
import axios from "axios";
import { Dynamic } from "../Context/ContextDynamic";
import { StateSkills } from "../Types/Types";

const TheSkills = () => {
  const [countIa, setCountIa] = useState<number>(0);
  const [post, setPost] = useState("");
  const [skills, setSkills] = useState<StateSkills[]>();
  const nav = useNavigate();
  const { setLoadingSearch } = Dynamic();
  const searchSkill = async () => {
    if (!post) {
      toast.error("Un métier est nécessaire");
      return;
    }
    setLoadingSearch(true);
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API}ask/skills`,
        withCredentials: true,
        data: { post },
      });
      // console.log(res);
      setLoadingSearch(false);
      if (res.data.skills) {
        setSkills(res.data.skills);
      }
    } catch (error) {
      setLoadingSearch(false);
      console.log(error);
      toast.error("Une erreur est survenue");
    }
  };

  const counterIa = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}count/skills`,
        withCredentials: true,
        data: { post },
      });
      // console.log(res);
      if (res.data.succes) {
        setCountIa(0);
      }
      if (res.data[0].numbRequet) {
        setCountIa(res.data[0].numbRequet);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Une erreur est survenue lors de la récupération du compteur"
      );
    }
  };
  useEffect(() => {
    counterIa();
  }, []);
  return (
    <StyledTheSkills>
      <h1>Voir la liste des compétences pour un métier</h1>
      <span className="count-skill">
        {countIa} demande{countIa > 1 ? "s" : ""} depuis le 06/08/2024
      </span>
      <FaRobot className="icon-bot" onClick={() => nav("/")} />
      <div className="box-input">
        <input
          type="text"
          placeholder="Entrez le métier*"
          onChange={(e) => setPost(e.target.value)}
        />
        <Button text="Lancer la recherche" actionClick={searchSkill} />
        {skills && (
          <ul className="skills-list">
            <span>*Liste des compétences suggérée par l'ia</span>
            {skills.map((skill, index) => (
              <li key={index}>{skill.skill}</li>
            ))}
          </ul>
        )}
      </div>
    </StyledTheSkills>
  );
};

export default TheSkills;

const StyledTheSkills = styled.div`
  height: 100vh;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${COLORS.orange};
    margin-bottom: 10px;
  }
  .count-skill {
    color: ${COLORS.second};
  }
  .icon-bot {
    text-align: center;
    font-size: 2.1em;
    color: ${COLORS.blue};
    cursor: pointer;
    margin-bottom: 10px;
  }
  .box-input {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    input {
      width: 50%;
      padding: 3px;
      border: none;
      border-radius: 5px;
      font-size: 1.1em;
      margin-bottom: 10px;
      outline: none;
    }
    .skills-list {
      /* background: pink; */
      margin-top: 10px;
      width: 90%;
      display: flex;
      height: 30vh;
      padding: 10px;
      flex-direction: column;
      /* justify-content: flex-start; */
      text-align: left;
      align-items: flex-start;
      overflow-y: scroll;
      border-bottom: solid 2px ${COLORS.orange};
      span {
        margin-bottom: 5px;
        color: ${COLORS.orange};
      }
      li {
        list-style: inside;
        margin-top: 10px;
        color: ${COLORS.light};
      }
    }
  }
  //width =< 425px
  @media screen and (max-width: 429px) {
    .box-input {
      width: 90%;
      input {
        width: 65%;
        font-size: 1.3em;
      }
    }
  }
`;
