import { useContext } from "react";
import EstadisticasContext from "../contexts/EstadisticasProvider";

const useEstadisticas = () => {
  return useContext(EstadisticasContext);
};

export default useEstadisticas;
