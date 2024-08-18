import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

const Emotions = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Intelligence émotionnelle",
    "Gestion des émotions",
    "Maîtrise de soi",
    "Assertivité",
    "Travailler sous pression",
    "Gestion du stress",
    "Garder son calme",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledEmotions>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledEmotions>
  );
};

export default Emotions;
const StyledEmotions = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
