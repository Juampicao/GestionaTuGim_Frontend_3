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
import { useModal } from "../hooks/useModal";
import Modal from "../components/atoms/Modal";
import FormularioSuscripciones from "../components/molecules/suscripciones/FormularioSuscripciones";
import { refrescarArray } from "../helpers/funciones";

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const navigate = useNavigate();
  // // Datos configuracion & Autenticacion
  const token = localStorage.getItem("token");
  if (!token) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const [isActiveMenu, setActiveMenu] = useState(true);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  const [isCargando, setIsCargando] = useState(true);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const [suscriptores, setSuscriptores] = useState("");
  const [suscriptor, setSuscriptor] = useState("");
  const [pagosSuscriptorId, setPagosSuscriptorId] = useState("");
  const [todosPagosSuscripcion, setTodosPagosSuscripcion] = useState([""]);
  const [pago, setPago] = useState("");

  const [tiposSuscripcion, setTiposSuscripcion] = useState({});
  const [buscador, setBuscador] = useState(false);
  const [seleccionarSuscripcion, setSeleccionarSuscripcion] = useState({});

  const [ejercicios, setEjercicios] = useState([""]);

  const handleBack = () => navigate(-1);

  const handleBuscador = () => {
    setBuscador(!buscador);
    console.log("Buscando o Cerrando?");
  };

  // --------------------------------- Funciones --------------------------------- //
  async function getSuscriptores() {
    setIsCargando(true);
    try {
      const respuesta = await axios.get(
        `${import.meta.env.VITE_API_URL}/suscriptores`,
        config
      );
      setSuscriptores(respuesta.data.suscriptores);
      setSuscriptor("");
    } catch (error) {
      console.log(error);
    }
    setIsCargando(false);
  }

  async function getSuscriptorId(suscriptorId) {
    setSuscriptor("");
    setPagosSuscriptorId("");
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/suscriptores/${suscriptorId}`,
        config
      );
      setPagosSuscriptorId(data.arrayPagosSuscriptor);
      setSuscriptor(data.suscriptor);
      console.log(data.suscriptor);
      console.log(data.arrayPagosSuscriptor);
    } catch (error) {
      console.log(error);
    }
    setIsCargando(true);
  }

  // Submit Suscriptor
  const SubmitSuscriptor = async (suscriptor) => {
    console.log(suscriptor);
    if (suscriptor.idFalso) {
      await EditarSuscriptor(suscriptor);
    } else {
      await NuevoSuscriptor(suscriptor);
    }
  };

  const NuevoSuscriptor = async (suscriptor) => {
    console.log("nuevo...");
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/suscriptores`,
        suscriptor,
        config
      );
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(true);
    }
    setIsOpenSaveModal(true);
  };

  const EditarSuscriptor = async (suscriptor) => {
    console.log("editando...");
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/suscriptores/${suscriptor.id}`,
        suscriptor,
        config
      );
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(true);
    }
    setIsOpenSaveModal(true);
  };

  const handleDeleteSuscriptorId = async (id, nombre) => {
    const confirmar = confirm(`Desea eliminar el suscriptor "${nombre}"?`);
    if (confirmar) {
      try {
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/suscriptores/${id}`,
          config
        );
        setIsOpenDeleteModal(true);
      } catch (error) {
        console.log(error);
        setIsOpenErrorModal(!isOpenErrorModal);
      }
    }
    setIsCargando(false);
  };

  // ---------------  Ejercicios -----------------//

  const NuevoPagoSuscripcion = async (nuevoPago) => {
    console.log("Desde nuevo pago suscripcion...");
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/pagos/pagarsuscripcion`,
        nuevoPago,
        config
      );
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(true);
    }
    setIsOpenSaveModal(true);
  };

  const GetPagosSuscripcionAll = async (size = 10, page = 1) => {
    setIsCargando(true);
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/pagos/pagarsuscripcion/?size=${size}&page=${page}`,
        config
      );
      setTodosPagosSuscripcion(data);
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(true);
    }
    setIsCargando(false);
  };

  const GetPagoSuscripcionId = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/pagos/pagarsuscripcion/${id}`,
        config
      );
      // console.log(data.pagoUnico);
      setPago(data.pagoUnico);
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(true);
    }
    setIsCargando(false);
  };

  const handleDeletePagoSuscripcion = async (id) => {
    const confirmar = confirm(`Seguro desde eliminar el pago?`);
    if (confirmar) {
      try {
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/pagos/pagarsuscripcion/${id}`,
          config
        );
        console.log(data);
      } catch (error) {
        console.log(error);
        setIsOpenErrorModal(true);
      }
      setIsOpenSaveModal(true);
      navigate("/suscriptores");
    }
  };

  const VerificarEstadoDeDeudas = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/suscriptores/verificar/estadodeuda`,
        config
      );
    } catch (error) {
      console.log(error);
    }
    setIsCargando(false);
  };
  // ---------------  Ejercicios -----------------//

  const getAllEjercicios = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/ejericicios`,
        config
      );
      console.log(data.ejercicios);
      setEjercicios(data.ejercicios);
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(true);
    }
  };

  const postEjercicioDeRutina = async (paramsId, objeto, nombreEjercicio) => {
    const confirmar = confirm(
      `Agregar ejercicio ${nombreEjercicio} de params  usuario ${paramsId}?`
    );
    if (confirmar) {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/suscriptores/rutina/${paramsId}`,
          {
            objeto,
          },
          config
        );
        console.log(data);
      } catch (error) {
        console.log(error);
        setIsOpenErrorModal(true);
      }
    }
    navigate("/suscriptores");
  };
  const handleDeleteEjercicioDeRutina = async (
    paramsId,
    ejercicioId,
    nombre
  ) => {
    const confirmar = confirm(
      `Seguro desde eliminar el ejercicio ${ejercicioId} ${nombre} de params ${paramsId}?`
    );
    if (confirmar) {
      try {
        const { data } = await axios.delete(
          `${
            import.meta.env.VITE_API_URL
          }/suscriptores/rutina/${paramsId}?ejercicio=${ejercicioId}`,
          config
        );
        console.log(data);
      } catch (error) {
        console.log(error);
        setIsOpenErrorModal(true);
      }
    }
  };

  // ---------------  TIPOS SUSCRIPCION -----------------//
  async function getTiposSuscripcion() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/usuarios/tipossuscripcion`,
        config
      );
      // setTiposSuscripcion(data.tiposSuscripcion);
      setTiposSuscripcion(data.tiposSuscripcion);
      console.log(data.tiposSuscripcion);
    } catch (error) {
      console.log(error);
    }
  }
  async function PostTiposSuscripcion(objeto) {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/usuarios/tipossuscripcion`,
        {
          objeto,
        },
        config
      );
      console.log(data);
      navigate("/suscriptores");
      setIsOpenSaveModal(true);
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(true);
    }
  }

  async function EditTiposSuscripcion(objeto) {
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/usuarios/tipossuscripcion`,
        {
          objeto,
        },
        config
      );
      console.log(data);
      setIsOpenSaveModal(true);
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(true);
    }
  }

  async function DeleteTiposSuscripcion(
    nombre,
    suscripcionAEliminarId,
    nuevaSuscripcionId
  ) {
    let confirmar = confirm(
      `Vas a eliminar la suscripcion\nid:${suscripcionAEliminarId} nombre: ${nombre}\n\nreemplazada por: "${nuevaSuscripcionId}"`
    );
    if (confirmar) {
      try {
        const { data } = await axios.delete(
          `${
            import.meta.env.VITE_API_URL
          }/usuarios/tipossuscripcion/?suscripcionAEliminarId=${suscripcionAEliminarId}&nuevaSuscripcionId=${nuevaSuscripcionId}`,
          config
        );
        console.log(data);
      } catch (error) {
        console.log(error);
        setIsOpenErrorModal(true);
      }
    }
  }

  return (
    <GeneralContext.Provider
      value={{
        handleBack,
        isActiveMenu,
        setActiveMenu,
        isOpenModal,
        openModal,
        closeModal,
        isCargando,
        setIsCargando,
        isOpenDeleteModal,
        setIsOpenDeleteModal,
        isOpenSaveModal,
        setIsOpenSaveModal,
        isOpenErrorModal,
        setIsOpenErrorModal,
        setSuscriptores,
        suscriptores,
        getSuscriptores,
        setSuscriptor,
        suscriptor,
        handleBuscador,
        buscador,
        setBuscador,
        handleDeleteSuscriptorId,
        SubmitSuscriptor,
        NuevoSuscriptor,
        EditarSuscriptor,
        NuevoPagoSuscripcion,
        GetPagosSuscripcionAll,
        todosPagosSuscripcion,
        VerificarEstadoDeDeudas,
        getSuscriptorId,
        handleDeletePagoSuscripcion,
        setPagosSuscriptorId,
        GetPagoSuscripcionId,
        pago,
        setPago,
        pagosSuscriptorId,
        handleDeleteEjercicioDeRutina,
        getAllEjercicios,
        ejercicios,
        postEjercicioDeRutina,
        tiposSuscripcion,
        setTiposSuscripcion,
        getTiposSuscripcion,
        PostTiposSuscripcion,
        EditTiposSuscripcion,
        DeleteTiposSuscripcion,
        isOpenModal1,
        openModal1,
        closeModal1,
        seleccionarSuscripcion,
        setSeleccionarSuscripcion,
      }}
    >
      {isOpenDeleteModal ? (
        <ModalEliminado
          titleModal="¡Eliminado Correctamente!"
          subtitleModal="a"
          buttonLabel="ir al listado"
          onClick={() => navigate(`/suscriptores`)}
        />
      ) : (
        ""
      )}
      {isOpenSaveModal ? (
        <ModalGuardado
          titleModal="Guardado!"
          subtitleModal="Puedes ver los cambios en el Listado."
          buttonLabel="Ir al listado"
          // handleClick={handleModalClick}
          // handleClickClose={closeModal}
        />
      ) : (
        ""
      )}
      {isOpenErrorModal ? <ModalError titleModal="Error" /> : " "}
      {/* {isCargando ? <Spiner /> : " "} */}
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralProvider };

export default GeneralContext;
