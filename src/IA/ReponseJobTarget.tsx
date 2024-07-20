import React, { useEffect } from "react";
import styled from "styled-components";
import { Dynamic } from "../Context/ContextDynamic";
import { COLORS } from "../styles/styles";

const ReponseJobTarget = () => {
  const { responseTargetJob } = Dynamic();
  useEffect(() => {
    console.log(responseTargetJob);
  }, []);
  return (
    <StyledReponseTargetJob>
      <span>*Générer par l'IA qui fait de son mieux</span>
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
    </StyledReponseTargetJob>
  );
};

export default ReponseJobTarget;
const StyledReponseTargetJob = styled.div`
  background: ${COLORS.main};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 40px;
  width: 70%;
  span {
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
