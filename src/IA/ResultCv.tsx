import React, { useEffect, useState } from "react";
import {
  PropsResultCv,
  StateJob,
  StateJobsAi,
  StateMatchJobs,
} from "../Types/Types";
import styled from "styled-components";
import { COLORS } from "../styles/styles";
import FranceTravail from "../FranceTravail/FranceTravail";
import ResultFranceTravail from "../FranceTravail/ResultFranceTravail";
import { IoCloseSharp } from "react-icons/io5";
import { Dynamic } from "../Context/ContextDynamic";
import Button from "../Button/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { TiArrowBack } from "react-icons/ti";

const ResultCv = () => {
  const [job, setJob] = useState<StateJob | string | undefined>();
  const [matchJobs, setMatchJobs] = useState<StateMatchJobs[]>([]);
  const { jobs, setLoader, setJobs, setDisplayresult } = Dynamic();
  // let jobsCatch: string[] = [];
  // const catchNameJobs = () => {
  //   jobs &&
  //     jobs.length > 0 &&
  //     jobs.map((job) => {
  //       if (job.poste) {
  //         if (jobsCatch.length < 7) {
  //           jobsCatch.push(job.poste);
  //         }
  //       }
  //     });
  //   console.log(jobsCatch);
  // };

  // useEffect(() => {
  //   catchNameJobs();
  // }, []);

  const emptyDataToNotSearchIfDontClick = () => {
    setMatchJobs([]);
    setJob("");
  };
  const downloadResult = async () => {
    setLoader(true);
    try {
      const data = { jobs };

      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API}genere/results`,
        withCredentials: true,
        data,
        responseType: "blob",
      });
      // console.log(res);
      const blob = new Blob([res.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "result.pdf";
      link.click();
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
      toast.error("Une erreur est survenue lors du téléchargement");
      return;
    }
  };
  return (
    <StyledResultCv>
      <p>
        Les suggestions de métiers sont générées par IA, qui fait de son mieux
        pour vous recommander des postes adaptés à votre profil
      </p>
      <FranceTravail job={job} setJob={setJob} setMatchJobs={setMatchJobs} />
      <div className="div-transf">
        {matchJobs && matchJobs.length > 0 && (
          <div className="head-div">
            <span>
              {matchJobs.length} offre{matchJobs.length > 0 ? "s " : ""}
              {`- ${job}`}
            </span>
            <IoCloseSharp
              className="icon-close-result-france-travail"
              onClick={emptyDataToNotSearchIfDontClick}
            />
          </div>
        )}
        {matchJobs && matchJobs.length > 0 && (
          <ResultFranceTravail
            job={job}
            setJob={setJob}
            matchJobs={matchJobs}
            setMatchJobs={setMatchJobs}
          />
        )}
        <ul className="ul-list-sug-ia">
          {jobs && jobs.length > 0 && (
            <div className="lil-header">
              <strong className="strong-sugg">
                {jobs.length} suggestion{jobs.length > 1 ? "s" : ""}
              </strong>
              <TiArrowBack
                className="icon-back"
                onClick={() => {
                  setJobs([]);
                  setDisplayresult(false);
                }}
              />
            </div>
          )}
          {jobs &&
            jobs.map((j: StateJobsAi, index: number) => (
              <div
                key={index}
                onClick={() => setJob(j.poste)}
                className="box-to-list-jobs-ia"
              >
                <li>{j.poste}</li>
                <li>
                  <strong>Compétences requises :</strong> {j.requis}
                </li>
                <li>
                  <strong>Plus :</strong> {j.conseil}
                </li>
              </div>
            ))}
        </ul>
      </div>
      <Button text="Téléchargez les suggestions" actionClick={downloadResult} />
    </StyledResultCv>
  );
};

export default ResultCv;
const StyledResultCv = styled.div`
  /* background: pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin-top: 10px;
  p {
    color: ${COLORS.yellow};
  }
  .div-transf {
    height: 70vh;
    overflow-y: scroll;
    /* background: orange; */
    position: relative !important;
    padding: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 80%;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Opera */
    }
    .head-div {
      position: sticky !important;
      z-index: 15;
      top: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: auto;
      background: ${COLORS.light};
      margin: 0px !important;
      padding: 5px !important;
      width: 95% !important;
      border-radius: 5px;
      border-bottom: solid 5px ${COLORS.second};
      span {
        font-size: 1.1em;
        margin: 0px;
        padding: 0px;
        display: block;
        color: ${COLORS.dark};
        /* background: blue; */
      }
      .icon-close-result-france-travail {
        background: ${COLORS.dark};
        color: ${COLORS.second};
        font-size: 1.5em;
        border-radius: 15px;
        cursor: pointer;
      }
    }
    .ul-list-sug-ia {
      width: 100%;
    }
    .ul-list-sug-ia > .lil-header {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ul-list-sug-ia > .lil-header > .icon-back {
      font-size: 2.3em;
      color: ${COLORS.blue};
      cursor: pointer;
    }
    .ul-list-sug-ia > .lil-header > .strong-sugg {
      color: ${COLORS.second};
      display: block;
      margin-right: 15px;
    }
    .ul-list-sug-ia > .box-to-list-jobs-ia {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 10px;
      background: ${COLORS.light};
      padding: 10px;
      border-radius: 5px;
      li:nth-child(1) {
        /* color: ${COLORS.second}; */
        color: ${COLORS.dark};
        font-size: 1.2em;
        font-weight: 800;
        text-align: center;
        margin: 0px 0px 10px 0px;
      }
      li:last-child {
        background: ${COLORS.dark};
        padding: 5px;
        color: ${COLORS.light};
        padding: 3px;
        border-radius: 3px;
      }
      li {
        width: 95%;
        /* color: ${COLORS.light}; */
        color: ${COLORS.dark};
        text-align: left;
        margin: 10px 0px;
        strong {
          color: ${COLORS.blue};
        }
      }
    }
  }
  //width =< 425px
  @media screen and (max-width: 429px) {
    .div-transf {
      width: 100%;
    }
    /* ul > div {
      width: 100%;
    } */
    .ul-list-sug-ia {
      width: 100%;
      display: flex;
      flex-direction: column;
      .box-to-list-jobs-ia {
        padding: 0px !important;
        margin-top: 10px;
        margin-left: 0px !important;
        margin-right: 0px !important;
        margin-bottom: 0px !important;
        li:nth-child(1) {
          margin-bottom: 0px !important;
        }
        li {
          margin-bottom: 5px !important;
        }
      }
    }
  }

  /* @media screen and (max-width: 400px) {
    ul > div {
      width: 100%;
    }
  } */
`;
