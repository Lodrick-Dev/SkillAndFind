import { ReactNode } from "react";

export type StateResponseTargetJob = {
  poste: string;
  avis: string;
  conseil: string;
};

export type TypeContextDynamic = {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  sendLoaderMail: boolean;
  setSendLoaderMail: React.Dispatch<React.SetStateAction<boolean>>;
  responseTargetJob: StateResponseTargetJob[];
  setResponseTargetJob: React.Dispatch<
    React.SetStateAction<StateResponseTargetJob[]>
  >;
  cvRedactionLm: File | null;
  setCvRedactionLm: React.Dispatch<React.SetStateAction<File | null>>;
  postCible: string;
  setPostCible: React.Dispatch<React.SetStateAction<string>>;
};

export type TypeContextDynamicProviderProps = {
  children: ReactNode;
};
