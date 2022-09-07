import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
  ModalEliminado,
  ModalError,
  ModalGuardado,
} from "../components/atoms/ModalNotificacion";

import Spiner from "../components/atoms/Spiner";
import { useNavigate } from "react-router-dom";
import useGeneral from "../hooks/useGeneral";

const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {
  const { setIsOpenErrorModal } = useGeneral;
  // --------------------------------- Datos configuracion & Autenticacion --------------------------------- //

  const token = localStorage.getItem("token");
  if (!token) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  // --------------------------------- Datos configuracion & Autenticacion --------------------------------- //
  let hoy = new Date().toISOString().split("T")[0];
  const [isCargando, setIsCargando] = useState(true);
  const [dataSuscriptores, setDataSuscriptores] = useState("");
  const [tiposSuscripcion, setTiposSuscripcion] = useState([""]);
  const [infoFechaPersonalizada, setInfoFechaPersonalizada] = useState("");

  const [isCargandoFecha, setIsCargandoFecha] = useState(false);

  // --------------------------------- Funciones --------------------------------- //
  // Get Estadisticas
  async function getEstadisticasGenerales() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/estadisticas`,
        config
      );
      setDataSuscriptores(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTiposSuscripcion() {
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/usuarios/tipossuscripcion`,
        config
      );
      // setTiposSuscripcion(data.tiposSuscripcion);
      // console.log(data.tiposSuscripcion);
      setTiposSuscripcion(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    // setIsCargando(false);
  }

  const getEstadisticasGeneralesPersonalizada = async (fecha = hoy) => {
    setIsCargandoFecha(true);
    setInfoFechaPersonalizada("");
    try {
      const respuesta = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/estadisticas/fechapersonalizada/?fecha=${fecha}`,
        config
      );
      console.log(respuesta.data);
      setInfoFechaPersonalizada(respuesta.data);
    } catch (error) {
      setIsOpenErrorModal(true);
      console.log(error);
    }
  };

  return (
    <EstadisticasContext.Provider
      value={{
        setIsCargando,
        isCargando,
        getEstadisticasGenerales,
        dataSuscriptores,
        getTiposSuscripcion,
        tiposSuscripcion,
        getEstadisticasGeneralesPersonalizada,
        isCargandoFecha,
        setIsCargandoFecha,
        infoFechaPersonalizada,
      }}
    >
      {children}
    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };
export default EstadisticasContext;
