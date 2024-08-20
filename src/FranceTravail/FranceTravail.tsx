import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { PropsFranceTravail, StateLocalisations } from "../Types/Types";
import { COLORS } from "../styles/styles";
import { IoCloseSharp } from "react-icons/io5";
import debounce from "lodash.debounce";

const FranceTravail = ({ job, setJob, setMatchJobs }: PropsFranceTravail) => {
  const [localisations, setLocalisations] = useState<StateLocalisations[]>([]);
  const [token, setToken] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [commune, setCommune] = useState<string>("");
  const [departement, setDepartement] = useState<string>("");
  const prepareIfSearch = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}france/travail/genere`,
      });
      // console.log(res);
      if (res.data) {
        if (res.data.token) {
          setToken(res.data.token);
        }
      }
    } catch (error) {
      console.log("Nous avons une erreur : ", error);
      toast.error("Une erreur est survenue");
    }
  };

  const matchJobs = async () => {
    let sanitizedJob; // Remplace slash par un espace
    // Vérifiez si "job" est une chaîne de caractères avant de procéder
    if (typeof job === "string") {
      sanitizedJob = job.replace(/\//g, " "); // Remplace le slash par un espace
    }

    try {
      // });
      const res = await axios({
        method: "get",
        url: `${
          process.env.REACT_APP_API
        }france/travail/match/one/${token}/${commune}/${
          sanitizedJob ? sanitizedJob : job
        }/${departement}`,
      });

      if (res.data === "") {
        // setMatchJobs([]);
        // setJob("");
        return toast.info("Aucune offre pour cette ville");
      }
      if (res.data.resultats) {
        return setMatchJobs(res.data.resultats);
      }
      if (res.data.message) {
        setMatchJobs([]);
        setJob("");
        return toast.info(res.data.message);
      }
    } catch (error: any) {
      console.log("Nous avons une erreur : ", error);
      // if (error.data.error) {
      //   return toast.error(error.data.error);
      // } else {
      //   return toast.error("Une erreur est survenue");
      // }
      return toast.error("Une erreur est survenue");
    }
  };

  const selectCity = (e: string) => {
    setCity(e);
    const cityPlayAfterSecond = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `https://geo.api.gouv.fr/communes?nom=${city}&fields=departement&boost=population&limit=5`,
        });
        // console.log(res);
        if (res.data) {
          if (res.data.length > 0) {
            setLocalisations(res.data);
          }
        }
      } catch (error: any) {
        console.log(error);
        return toast.error("Une erreur est survenue");
      }
    };
    setTimeout(() => {
      cityPlayAfterSecond();
    }, 300);
  };

  //
  const debouncedSelectCity = useCallback(
    debounce((e) => {
      setCity(e);
      axios({
        method: "get",
        url: `https://geo.api.gouv.fr/communes?nom=${e}&fields=departement&boost=population&limit=5`,
      })
        .then((res) => {
          if (res.data && res.data.length > 0) {
            setLocalisations(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Une erreur est survenue");
        });
    }, 300),
    []
  );
  //
  const selectCityInList = (
    ville: string,
    code: string,
    departement: string
  ) => {
    setCity(ville);
    setCommune(code);
    setDepartement(departement);
    setLocalisations([]);
    console.log(ville);
    console.log(code);
    console.log(departement);
  };
  const cancelAll = () => {
    setLocalisations([]);
    setCity("");
    setJob("");
    setCommune("");
    setDepartement("");
  };

  useEffect(() => {
    prepareIfSearch();
    cancelAll(); //supprimer ce qu'il ya
  }, []);

  useEffect(() => {
    const playNon = () => {
      if (!commune) {
        setJob("");
      }
      if (job && !commune) {
        return toast.info("Aucune ville n'est selectionée");
      }
      if (job && commune) {
        matchJobs();
      }
    };
    playNon();
  }, [job, commune]);
  // useEffect(() => {
  //   if (job && commune) {
  //     matchJobs();
  //   } else if (job && !commune) {
  //     toast.info("Aucune ville n'est selectionnée");
  //   }
  // }, [job, commune]);

  useEffect(() => {
    if (city === "") {
      cancelAll();
    }
  }, [city]);
  return (
    <StyledFranceTravail>
      <div className="search-and-list">
        <span>
          Match avec des offres en choisissant une ville puis clique sur un
          métier
        </span>
        <div>
          <input
            type="text"
            placeholder="Ville"
            value={city ? city : ""}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) =>
                selectCity(e.target.value)
              // debouncedSelectCity(e.target.value)
            }
          />
          {localisations && localisations.length > 0 && (
            <IoCloseSharp className="icon-close-input" onClick={cancelAll} />
          )}
        </div>
        <div className="list-deroulant">
          {localisations && localisations.length > 0 && (
            <ul>
              {localisations.map((local, index) => (
                <li
                  key={index}
                  onClick={() =>
                    selectCityInList(
                      local.nom,
                      local.code,
                      local.departement.code
                    )
                  }
                >
                  {local.nom}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </StyledFranceTravail>
  );
};

export default FranceTravail;
const StyledFranceTravail = styled.div`
  /* background: pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 70%;
  .search-and-list {
    /* background: pink; */
    width: 100%;
    span {
      color: ${COLORS.light};
      margin: 5px 0px;
    }
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      width: 50%;
      position: relative;
      input {
        width: 100%;
        padding: 3px;
        outline: none;
        border-radius: 3px;
        border: none;
        font-size: 1em;
      }
      .icon-close-input {
        position: absolute;
        right: 5px;
        top: 5px;
        color: ${COLORS.second};
        background: ${COLORS.dark};
        font-size: 1.2em;
        border-radius: 10px;
        cursor: pointer;
      }
    }
    .list-deroulant {
      padding: 5px;
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      ul {
        height: 20vh;
        background: ${COLORS.dark};
        position: absolute;
        z-index: 10;
        top: 0px;
        width: 100% !important;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        scrollbar-width: none;
        box-shadow: 2px 4px 5px 1px ${COLORS.blue};
        ::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
        li {
          margin-top: 10px;
          text-align: left;
          color: ${COLORS.main};
          width: 90%;
          border-bottom: solid 1px ${COLORS.main};
          cursor: pointer;
        }
      }
    }
  }
  //width =< 42px
  @media screen and (max-width: 429px) {
    /* background: pink; */
    width: 100%;
    .search-and-list {
      width: 80%;
      .list-deroulant {
        width: 100%;
      }
      .list-deroulant > ul {
        /* background: yellow; */
        padding: 5px;
        width: 90%;
      }
    }
    .search-and-list > span {
      width: 100%;
    }
    .search-and-list > div {
      width: 90%;
    }
  }
`;
