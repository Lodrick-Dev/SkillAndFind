import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

const Commercial = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Orientation résultats",
    "Sens commercial",
    "Gestion des relations clients",
    "Fidélisation des clients",
    "Identification des besoins des clients",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledCommercial>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledCommercial>
  );
};

export default Commercial;

const StyledCommercial = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
