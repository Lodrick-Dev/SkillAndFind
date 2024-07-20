export type StateJobsAi = {
  poste?: string;
  requis?: string;
  conseil?: string;
};
export type StateJob = {
  job: StateJobsAi;
  setJob: React.Dispatch<React.SetStateAction<string | undefined>>;
  // poste?: string;
  // requis?: string;
  // conseil?: string;
};
export type StateLocalisations = {
  code: string;
  nom: string;
  departement: { code: string };
};

export type StateMatchJobs = {
  intitule?: string;
  lieuTravail?: { libelle?: string };
  dureeTravailLibelle?: string;
  description?: string;
  natureContrat?: string;
  typeContrat?: string;
  typeContratLibelle?: string;
  entreprise?: { nom?: string };
  origineOffre?: { urlOrigine: string };
  experienceLibelle?: string;
};

/////////Props
export type PropsUploadCv = {
  setJobs:
    | React.Dispatch<
        React.SetStateAction<StateJobsAi[] | File[] | FileList | null>
      >
    | React.Dispatch<React.SetStateAction<StateJobsAi[]>>;
  setDisplayresult: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PropsButton = {
  text: string;
  actionClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
};

export type PropsResultCv = {
  jobs: StateJobsAi[];
  // jobs: StateJob;
};

// export type PropsHome = {
//   setLoader: React.Dispatch<React.SetStateAction<boolean>>;
// };

export type PropsFranceTravail = {
  job: string | StateJob | undefined;
  setJob: React.Dispatch<React.SetStateAction<string | StateJob | undefined>>;
  setMatchJobs: React.Dispatch<React.SetStateAction<StateMatchJobs[]>>;
};

export type PropsResultFranceTravail = {
  job: string | StateJob | undefined;
  setJob: React.Dispatch<React.SetStateAction<string | StateJob | undefined>>;
  matchJobs: StateMatchJobs[];
  setMatchJobs: React.Dispatch<React.SetStateAction<StateMatchJobs[]>>;
};

export type PropsFooter = {
  setPopFooter: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type PropsPopFooter = {
  popFooter: string;
  setPopFooter: React.Dispatch<React.SetStateAction<string | undefined>>;
};
