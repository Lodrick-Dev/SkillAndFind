import React from "react";
import styled from "styled-components";

const Avis = ({ avi }: { avi: string }) => {
  return (
    <StyledAvis>
      <strong>Anonyme</strong>
      <span>{avi}</span>
    </StyledAvis>
  );
};

export default Avis;

const StyledAvis = styled.div`
  background: red;
  margin: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  strong {
    display: block;
    width: 100%;
  }
  span {
    display: block;
    width: 100%;
  }
`;
