import React, { useEffect, useState } from "react";
import { formatearFecha, hoy } from "../../../helpers/funciones";
import useEstadisticas from "../../../hooks/useEstadisticas";
const SeleccionarFecha = () => {
  const {
    getEstadisticasGeneralesPersonalizada,
    infoFechaPersonalizada,
    isCargandoFecha,
    setIsCargandoFecha,
  } = useEstadisticas();

  const [fecha, setFecha] = useState(hoy);

  const handleVerEstadisticasPorFecha = (e) => {
    setIsCargandoFecha(true);
    e.preventDefault();
    console.log(fecha);
    getEstadisticasGeneralesPersonalizada(fecha);
    setIsCargandoFecha(false);
  };
  return (
    <div>
      <h2 className="font-bold text-xl my-2">Buscar por Fecha </h2>

      <form action="submit" onSubmit={handleVerEstadisticasPorFecha}>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value).toISOString()}
          name=""
          id=""
          className="p-2 rounded-xl"
        />
        <button
          type="submit"
          className="bg-black rounded-xl text-white px-3 py-1"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default SeleccionarFecha;
