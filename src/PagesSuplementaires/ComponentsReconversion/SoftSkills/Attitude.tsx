import React, { useState } from "react";
import { PropsCompoSoftSkills } from "../../../Types/Types";
import styled from "styled-components";

const Attitude = ({ setChoisiSkills }: PropsCompoSoftSkills) => {
  const [skills, setSkills] = useState<string[]>([
    "Flexibilité",
    "Résilience",
    "Fiabilité",
    "Initiative",
    "Proactivité",
    "Curiosité",
    "Persévérance",
    "Esprit positif",
    "Confiance en soi",
    "Ethique de travail",
    "Respect des normes et des règles",
    "Ponctualité",
    "Engagement",
  ]);
  const addSkills = (skill: string) => {
    setChoisiSkills((prev) => [...prev, skill]);
  };
  return (
    <StyleAttitude>
      {skills &&
        skills.map((skill) => (
          <span key={skill} onClick={() => addSkills(skill)}>
            {skill}
          </span>
        ))}
    </StyleAttitude>
  );
};

export default Attitude;

const StyleAttitude = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
