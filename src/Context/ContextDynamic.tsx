import { createContext, useContext, useState } from "react";
import {
  StateResponseTargetJob,
  StateResumeConversion,
  TypeContextDynamic,
  TypeContextDynamicProviderProps,
} from "../Types/TypesContext";
import { StateJobsAi } from "../Types/Types";

const ContextDynamic = createContext<TypeContextDynamic | undefined>(undefined);

export const ContextDynamicProvider = ({
  children,
}: TypeContextDynamicProviderProps) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [sendLoaderMail, setSendLoaderMail] = useState<boolean>(false);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [responseTargetJob, setResponseTargetJob] = useState<
    StateResponseTargetJob[]
  >([]);
  const [cvRedactionLm, setCvRedactionLm] = useState<File | null>(null);
  const [postCible, setPostCible] = useState<string>("");
  const [jobs, setJobs] = useState<StateJobsAi[]>([]);
  const [displayResult, setDisplayresult] = useState<boolean>(false);
  const [resumeReconversion, setResumeReconversion] = useState<
    StateResumeConversion[]
  >([]);

  return (
    <ContextDynamic.Provider
      value={{
        setUser,
        user,
        loader,
        setLoader,
        sendLoaderMail,
        setSendLoaderMail,
        loadingSearch,
        setLoadingSearch,
        responseTargetJob,
        setResponseTargetJob,
        cvRedactionLm,
        setCvRedactionLm,
        postCible,
        setPostCible,
        jobs,
        setJobs,
        displayResult,
        setDisplayresult,
        resumeReconversion,
        setResumeReconversion,
      }}
    >
      {children}
    </ContextDynamic.Provider>
  );
};

export const Dynamic = (): TypeContextDynamic => {
  const context = useContext(ContextDynamic);
  if (!context) {
    throw new Error(
      "useContextDynamic must be used within a ContextDynamicProvider"
    );
  }
  return context;
};
