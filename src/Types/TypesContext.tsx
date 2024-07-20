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
  responseTargetJob: StateResponseTargetJob[];
  setResponseTargetJob: React.Dispatch<
    React.SetStateAction<StateResponseTargetJob[]>
  >;
};

export type TypeContextDynamicProviderProps = {
  children: ReactNode;
};
