import React from "react";
import { PropsResultCv, StateJobsAi } from "../Types/Types";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const ResultCv = ({ jobs }: PropsResultCv) => {
  return (
    <StyledResultCv>
      <p>
        Les suggestions de métiers sont générées par IA, qui fait de son mieux
        pour vous recommander des postes adaptés à votre profil
      </p>
      <ul>
        {jobs &&
          jobs.map((job: StateJobsAi, index: number) => (
            <div key={index}>
              <li>{job.poste}</li>
              <li>
                <strong>Compétences requises :</strong> {job.requis}
              </li>
              <li>
                <strong>Plus :</strong> {job.conseil}
              </li>
            </div>
          ))}
      </ul>
    </StyledResultCv>
  );
};

export default ResultCv;
const StyledResultCv = styled.div`
  height: 70vh;
  overflow-y: scroll;
  p {
    color: ${COLORS.second};
  }
  ul {
    /* background: orange; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 50%;
      margin: 10px;
      background: ${COLORS.light};
      /* border-bottom: solid 2px ${COLORS.blue}; */
      padding: 10px;
      border-radius: 5px;
      li:nth-child(1) {
        /* color: ${COLORS.second}; */
        color: ${COLORS.dark};
        font-size: 1.2em;
        font-weight: 800;
        text-align: center;
        margin: 0px 0px 10px 0px;
      }
      li {
        /* color: ${COLORS.light}; */
        color: ${COLORS.dark};
        text-align: left;
        margin: 10px 0px;
        strong {
          color: ${COLORS.blue};
        }
      }
    }
  }
  //width =< 425px
  @media screen and (max-width: 428px) {
    ul > div {
      width: 100%;
    }
  }

  /* @media screen and (max-width: 400px) {
    ul > div {
      width: 100%;
    }
  } */
`;
