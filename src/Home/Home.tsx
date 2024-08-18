import styled from "styled-components";
import { FaRobot } from "react-icons/fa6";
import { COLORS } from "../styles/styles";
import { toast } from "react-toastify";
import { FaThList } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ListeAvis from "../ListsAvis/ListeAvis";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const nav = useNavigate();
  const tryReconversion = async () => {
    toast.info("En cours de développement");
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API}send/mail/reconversion`,
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getTotalCountCallia = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}count/total`,
        withCredentials: true,
      });
      // console.log(res);
      if (res.data.total) {
        setTotalCount(res.data.total);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTotalCountCallia();
  }, []);
  return (
    <StyledHome>
      <h1>Révélez Votre Potentiel Professionnel</h1>
      <h2 className="second-titre-home">
        ...avec des recommandations personnalisées pour choisir un métier,
        optimiser votre CV, et réussir votre orientation professionnelle
      </h2>
      <FaRobot className="icon-bot" />
      <span>
        {totalCount} demande{totalCount > 1 ? "s" : ""} au total
      </span>
      <div className="box-btn-choose">
        <button className="btn-jobs" onClick={() => nav("/jobs")}>
          <div>
            <strong>Les Métiers</strong>{" "}
            <span>qui vous correspondent + recherche offres d’emploi</span>{" "}
          </div>
          <FaThList className="icon" />
        </button>
        <button className="btn-cv" onClick={() => nav("/cv")}>
          <div>
            <strong>Votre Cv </strong>
            <span>
              est correcte pour un poste ? + Exemple de lettre de motivation
            </span>
          </div>
          <MdDocumentScanner className="icon" />
        </button>
        <button className="btn-skills" onClick={() => nav("/skills")}>
          <div>
            <strong> Les compétences </strong>
            <span>La liste des compétences pour un métier visé</span>
          </div>
          <FaListCheck className="icon" />
        </button>
        <button
          className="btn-reconversion-pro"
          onClick={() => nav("/orientation")}
        >
          {" "}
          <div>
            <strong>Orientation Pro</strong>{" "}
            <span>
              faites le grand saut et laissez vous guider dès maintenant
            </span>
          </div>
          <MdOutlinePublishedWithChanges className="icon" />
        </button>
      </div>
      {/* <ListeAvis /> */}
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
  width: 100%;
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
  .second-titre-home {
    width: 60%;
    color: white;
    font-size: 1em;
  }
  .icon-bot {
    font-size: 2.1em;
    color: ${COLORS.blue};
    cursor: pointer;
  }
  span {
    color: ${COLORS.second};
    margin: 5px 0px;
    font-size: 0.8em;
  }
  .box-btn-choose {
    /* background: pink; */
    padding: 5px;
    margin-bottom: 20px;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-bottom: solid 2px white;
    .btn-jobs {
      background: ${COLORS.yellow};
    }
    .btn-cv {
      background: ${COLORS.bluelow};
    }
    .btn-skills {
      background: ${COLORS.orange};
    }
    .btn-reconversion-pro {
      background: ${COLORS.green};
    }
    button {
      margin: 20px;
      display: block;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      width: 30%;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      div {
        /* background: yellow; */
        display: flex;
        flex-direction: column;
        padding: 5px;
        width: 85%;
        strong {
          color: ${COLORS.glob};
          font-size: 1.3em;
        }
        span {
          color: ${COLORS.glob};
        }
      }
      .icon {
        /* background: greenyellow; */
        color: ${COLORS.dark};
        width: 15%;
        font-size: 2em;
      }
    }
    button:active {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
  //width =< 42px
  @media screen and (max-width: 429px) {
    h1 {
      font-size: 1.4em;
    }
    .second-titre-home {
      width: 80%;
    }
    .box-btn-choose {
      width: 90%;
      flex-direction: column;
      padding-bottom: 40px;
      button {
        width: 80%;
        margin: 5px;
      }
    }
  }
`;
