import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

const Apprentissage = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Soif d'apprendre",
    "Adaptabilité aux changements",
    "Curiosité intellectuelle",
    "Réceptivité aux feedbacks",
    "Autodidaxie",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledApprentissage>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledApprentissage>
  );
};

export default Apprentissage;

const StyledApprentissage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
