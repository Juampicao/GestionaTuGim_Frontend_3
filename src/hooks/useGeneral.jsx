import { useContext } from "react";
import GeneralContext from "../contexts/GeneralProvider";

const useGeneral = () => {
  return useContext(GeneralContext);
};

export default useGeneral;
