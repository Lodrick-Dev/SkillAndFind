import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

const SensEthique = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Intégrité",
    "Honnêteté",
    "Transparence",
    "Sens de la responsabilité sociale",
    "Respect de la diversité",
    "Déontologie",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledSensEthique>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledSensEthique>
  );
};

export default SensEthique;

const StyledSensEthique = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
