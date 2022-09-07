import React, { useState } from "react";
import useGeneral from "../../hooks/useGeneral";
import BarraSearch from "../atoms/BarraSearch";
import Busqueda from "../atoms/Busqueda";
import Header from "../atoms/Header";
import ContenedorLayout from "../molecules/ContenedorLayout";
import ListadoPagosSuscripciones from "../molecules/pagos/ListadoPagosSuscripciones";

const Pagos = () => {
  const { todosPagosSuscripcion, handleBuscador } = useGeneral();
  return (
    <div>
      <Header title="Pagos" />
      <ContenedorLayout>
        {/* <Busqueda urlDestino={`./pagos`} array={todosPagosSuscripcion} />
        <BarraSearch onClick={handleBuscador} placeholder="Buscar un Pago..." /> */}
        <ListadoPagosSuscripciones />
      </ContenedorLayout>
    </div>
  );
};

export default Pagos;
