import React from "react";
import { PropsResume } from "../Types/Types";
import styled from "styled-components";
import { COLORS } from "../styles/styles";

const ReponseReconversion = ({ reponse }: PropsResume) => {
  return (
    <StyledReponseReconversion>
      <ul>
        <span>
          Les Suggestions sont générées par l'AI qui fait de son mieux
        </span>
        {reponse &&
          reponse.length > 0 &&
          reponse.map((res, index) => (
            <div key={index} className="li-box">
              <li>
                {" "}
                <strong>Métier : </strong> {res.job}
              </li>
              <li>
                <strong>Raison : </strong> {res.raison}
              </li>
            </div>
          ))}
      </ul>
    </StyledReponseReconversion>
  );
};

export default ReponseReconversion;

const StyledReponseReconversion = styled.div`
  display: flex;
  flex-direction: column;
  ul > .li-box {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 20px;
    border-top: solid 2px ${COLORS.blue};
    padding: 5px;
    li {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      strong {
        margin: 0px !important;
        margin-right: 10px !important;
      }
      color: ${COLORS.green};
    }
  }
`;
