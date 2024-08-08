import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../styles/styles";
import axios from "axios";
import Avis from "./Avis";

const ListeAvis = () => {
  const [avis, setAvis] = useState<[{ feedback: string }]>();
  const getAvis = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}avis/actif`,
        withCredentials: true,
      });
      // console.log(res);
      if (res.data) {
        setAvis(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAvis();
  }, []);
  return (
    <StyledListeAvis>
      <h2>{avis?.length} Avis : </h2>
      {avis && avis.length > 0 && (
        <ul className="le-ul-list">
          <div className="sous-div-ul">
            {avis &&
              avis.length > 0 &&
              avis.map((avi, index) => <Avis key={index} avi={avi.feedback} />)}
          </div>
        </ul>
      )}
    </StyledListeAvis>
  );
};

export default ListeAvis;

const StyledListeAvis = styled.div`
  background: green;
  width: 50%;
  display: flex;
  flex-direction: column;
  /* height: 30vh; */
  padding: 5px;

  h2 {
    color: ${COLORS.light};
    text-align: left;
    width: 100%;
    background: orange;
  }

  > .le-ul-list {
    /* scrollbar-width: none; */
    display: flex;
    width: 100%;
    background: grey;
    .sous-div-ul {
      overflow-x: scroll;
      width: 100%;
      display: flex;
    }
  }

  > .le-ul-list::-webkit-scrollbar {
    /* display: none;  */
  }
`;
