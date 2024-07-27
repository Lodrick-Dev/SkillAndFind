import { createContext, useContext, useState } from "react";
import {
  StateResponseTargetJob,
  TypeContextDynamic,
  TypeContextDynamicProviderProps,
} from "../Types/TypesContext";

const ContextDynamic = createContext<TypeContextDynamic | undefined>(undefined);

export const ContextDynamicProvider = ({
  children,
}: TypeContextDynamicProviderProps) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [sendLoaderMail, setSendLoaderMail] = useState<boolean>(false);
  const [responseTargetJob, setResponseTargetJob] = useState<
    StateResponseTargetJob[]
  >([]);
  const [cvRedactionLm, setCvRedactionLm] = useState<File | null>(null);
  const [postCible, setPostCible] = useState<string>("");

  return (
    <ContextDynamic.Provider
      value={{
        setUser,
        user,
        loader,
        setLoader,
        sendLoaderMail,
        setSendLoaderMail,
        responseTargetJob,
        setResponseTargetJob,
        cvRedactionLm,
        setCvRedactionLm,
        postCible,
        setPostCible,
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
