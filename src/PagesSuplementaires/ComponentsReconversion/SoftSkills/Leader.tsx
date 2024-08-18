import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

const Leader = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Leadership",
    "Gestion des équipes",
    "Motivation des autres",
    "Prise de responsabilité",
    "Capacité à déléguer",
    "Gestion des conflits",
    "Influence",
    "Développement personnel",
    "Mentoring",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledLeader>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledLeader>
  );
};

export default Leader;
const StyledLeader = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
