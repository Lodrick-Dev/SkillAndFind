import { ReactNode } from "react";
import { StateJobsAi } from "./Types";

export type StateResponseTargetJob = {
  poste: string;
  avis: string;
  conseil: string;
};

export type StateResumeConversion = {
  passion?: string;
  job?: string;
  skills?: string;
  why?: string;
  sector?: string;
  wish?: string;
  interetPerso?: string;
  interetPro?: string;
  hardSkill?: string;
  softSkill?: string;
};

export type TypeContextDynamic = {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  sendLoaderMail: boolean;
  setSendLoaderMail: React.Dispatch<React.SetStateAction<boolean>>;
  loadingSearch: boolean;
  setLoadingSearch: React.Dispatch<React.SetStateAction<boolean>>;
  responseTargetJob: StateResponseTargetJob[];
  setResponseTargetJob: React.Dispatch<
    React.SetStateAction<StateResponseTargetJob[]>
  >;
  cvRedactionLm: File | null;
  setCvRedactionLm: React.Dispatch<React.SetStateAction<File | null>>;
  postCible: string;
  setPostCible: React.Dispatch<React.SetStateAction<string>>;
  jobs: StateJobsAi[];
  setJobs: React.Dispatch<React.SetStateAction<StateJobsAi[]>>;
  displayResult: boolean;
  setDisplayresult: React.Dispatch<React.SetStateAction<boolean>>;
  resumeReconversion: StateResumeConversion[];
  setResumeReconversion: React.Dispatch<
    React.SetStateAction<StateResumeConversion[]>
  >;
};

export type TypeContextDynamicProviderProps = {
  children: ReactNode;
};
