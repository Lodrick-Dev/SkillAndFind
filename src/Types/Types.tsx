export type StateJobsAi = {
  poste?: string;
  requis?: string;
  conseil?: string;
};

export type PropsUploadCv = {
  //   setJobs?: React.Dispatch<React.SetStateAction<StateJobsAi[]>>;
  setJobs:
    | React.Dispatch<
        React.SetStateAction<StateJobsAi[] | File[] | FileList | null>
      >
    | React.Dispatch<React.SetStateAction<StateJobsAi[]>>;
  setDisplayresult: React.Dispatch<React.SetStateAction<boolean>>;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PropsButton = {
  text: string;
  actionClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export type PropsResultCv = {
  jobs: StateJobsAi[];
};

export type PropsHome = {
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
};
