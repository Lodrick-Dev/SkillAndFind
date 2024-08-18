import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

const Creatives = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Créativité",
    "Innovation",
    "Apporter nouvelle solution",
    "Esprit d'entreprise",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledCreatives>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledCreatives>
  );
};

export default Creatives;

const StyledCreatives = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
