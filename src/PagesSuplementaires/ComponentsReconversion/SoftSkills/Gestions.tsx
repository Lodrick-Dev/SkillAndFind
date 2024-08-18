import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

export const Gestions = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Gestion du temps",
    "Priorisation des tâches",
    "Planification stratégique",
    "Multitâche",
    "Sens de l'organisation",
    "Gestion de projets",
    "Gestion de la pression",
    "Gestion des ressources",
    "Capacité à respecter les délais",
    "Autonomie",
  ]);

  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledGestions>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledGestions>
  );
};

const StyledGestions = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
