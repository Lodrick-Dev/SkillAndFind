import React from "react";
import styled from "styled-components";
import { PropsResultFranceTravail } from "../Types/Types";
import { COLORS } from "../styles/styles";
import { FaFileInvoice } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const ResultFranceTravail = ({
  job,
  setJob,
  matchJobs,
  setMatchJobs,
}: PropsResultFranceTravail) => {
  const goSee = (link?: string): void => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <StyledResultFranceTravail>
      <ul className="body-is">
        {matchJobs &&
          matchJobs.length > 0 &&
          matchJobs.map((match, index) => (
            <div key={index} className="div-list-match-job">
              <li>{match.intitule}</li>
              <li className="li-description">
                {match.description?.substring(0, 200)}...
              </li>
              <div className="infos-job">
                {match.entreprise?.nom && (
                  <li className="the-li">
                    <FaBuilding className="icon-list" /> -{" "}
                    {match.entreprise?.nom}
                  </li>
                )}
                {match.lieuTravail?.libelle && (
                  <li className="the-li">
                    <FaLocationDot className="icon-list" /> -{" "}
                    {match.lieuTravail?.libelle}
                  </li>
                )}
                {match.natureContrat && (
                  <li className="the-li">
                    <FaFileInvoice className="icon-list" /> -{" "}
                    {match.natureContrat}
                  </li>
                )}
                {match.typeContrat && (
                  <li className="the-li">
                    {" "}
                    <IoIosTime className="icon-list" /> - {match.typeContrat}{" "}
                    {match.dureeTravailLibelle &&
                      `- ${match.dureeTravailLibelle}`}
                  </li>
                )}
                {match.typeContratLibelle && (
                  <li className="the-li">
                    <FaHourglassHalf className="icon-list" /> -{" "}
                    {match.typeContratLibelle}
                  </li>
                )}
                {match.experienceLibelle && (
                  <li className="the-li">
                    <FaUserAlt className="icon-list" /> -{" "}
                    {match.experienceLibelle}
                  </li>
                )}
              </div>
              {match.origineOffre?.urlOrigine && (
                <FaEye
                  className="go-see-link"
                  onClick={() => goSee(match.origineOffre?.urlOrigine)}
                />
              )}
            </div>
          ))}
      </ul>
    </StyledResultFranceTravail>
  );
};

export default ResultFranceTravail;

const StyledResultFranceTravail = styled.div`
  background: ${COLORS.transparent};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  width: 100% !important;
  margin: 0px !important;
  height: 100vh;
  padding: 5px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  /* position: relative !important; */
  cursor: auto !important;
  /* ::-webkit-scrollbar {
    display: none; 
  } */
  .body-is {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    padding: 0px;
    margin: 0px;
    overflow-y: scroll;
    .div-list-match-job {
      margin-top: 10px;
      border-bottom: solid 2px ${COLORS.light};
      padding: 5px 0px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;
      .li-description {
        margin: 10px 0px;
        color: ${COLORS.second};
      }
      .go-see-link {
        position: absolute;
        bottom: 5px;
        right: 5px;
        font-size: 1.5em;
        color: ${COLORS.blue};
        cursor: pointer;
        background: ${COLORS.dark};
        padding: 5px;
        border-radius: 20px;
      }
      li:first-child {
        width: 100%;
        /* background: blue; */
        text-align: center;
        font-size: 1.2em;
        color: ${COLORS.light};
      }
      .infos-job {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background: greenyellow; */
        width: 100%;
        .the-li {
          font-size: 1em !important;
          width: 100%;
          text-align: left;
          margin: 5px;
          .icon-list {
            color: ${COLORS.second};
          }
        }
      }
    }
  }
  //width =< 42px
  @media screen and (max-width: 428px) {
    /* background: orange; */
    padding: 3px !important;
    .body-is {
      background: grey;
      width: 95% !important;
      display: flex;
      align-items: center;
      flex-direction: column;
      /* justify-content: center; */
    }
    .body-is > .div-list-match-job {
      margin-top: 5px;
      width: 95%;
      padding: 3px;
      /* background: pink; */
      display: flex;
      justify-content: center;
      align-items: center;
      li:first-child {
        font-size: 1.1em;
      }
      .li-description {
        width: 90%;
        font-size: 1em !important;
      }
      .infos-job {
        /* background: blue; */
        /* flex-direction: row; */
        width: 100%;
        overflow-x: scroll;
        /* flex-wrap: wrap; */
        .the-li {
          width: none;
          display: block !important;
          /* background: red; */
          display: flex;
          padding: 5px;
          font-size: 0.8em !;
          .icon-list {
            font-size: 1em;
          }
        }
      }
    }
  }
`;
