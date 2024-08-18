import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

const Numerik = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Adaptabilité aux nouvelles technologies",
    "Collaboration virtuelle",
    "Agilité numérique",
    "Connaissance des médias sociaux",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyledNumerik>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyledNumerik>
  );
};

export default Numerik;

const StyledNumerik = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
