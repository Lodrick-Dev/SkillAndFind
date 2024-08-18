import React, { useState } from "react";
import styled from "styled-components";
import { PropsCompoSoftSkills } from "../../../Types/Types";

const Communication = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Communication verbale",
    "Communication écrite",
    "Écoute active",
    "Empathie",
    "Négociation",
    "Diplomatie",
    "Persuasion",
    "Résolution de conflits",
    "Compétences interpersonnelles",
    "Travail en équipe",
    "Service client",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledCommunication>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledCommunication>
  );
};

export default Communication;
const StyledCommunication = styled.div`
  /* background: yellow; */
  display: flex;
  flex-wrap: wrap;
`;
