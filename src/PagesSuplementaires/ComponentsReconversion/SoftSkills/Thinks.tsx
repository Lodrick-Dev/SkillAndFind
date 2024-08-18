import React, { useState } from "react";
import styled from "styled-components";
import { PropsCompoSoftSkills } from "../../../Types/Types";

const Thinks = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Pensée analytique",
    "Esprit critique",
    "Résolution de problèmes",
    "Prise de décision",
    "Esprit créatif",
    "Gestion des risques",
    "Adaptabilité mentale",
    "Capacité à apprendre rapidement",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledThinks>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledThinks>
  );
};

export default Thinks;

const StyledThinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
