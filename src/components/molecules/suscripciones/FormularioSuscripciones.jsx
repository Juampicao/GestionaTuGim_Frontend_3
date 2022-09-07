import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BotonBlancoRedondeado } from "../../../helpers/colores";
import {
  botonDivStyles,
  divStyles,
  inputStyles,
} from "../../../helpers/styles";
import useEstadisticas from "../../../hooks/useEstadisticas";
import useGeneral from "../../../hooks/useGeneral";
import { BotonPrimario } from "../../atoms/Botones";
import CuadroEstadisticas from "../../atoms/CuadroEstadisticas";
import Error from "../../atoms/Error";
import Spiner from "../../atoms/Spiner";
import ContenedorFormularios from "../ContenedorFormularios";

// const FormularioSuscripciones = ({ nuevaSuscripcion }) => {
const FormularioSuscripciones = () => {
  const { getTiposSuscripcion, tiposSuscripcion } = useEstadisticas();

  const { EditTiposSuscripcion, PostTiposSuscripcion, seleccionarSuscripcion } =
    useGeneral();

  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [id, setId] = useState("");

  const [error, setError] = useState(false);
  const [isCargando, setIsCargando] = useState(true);
  const navigate = useNavigate();

  const objeto = {
    nombre,
    valor,
    id,
  };

  const resetForm = async () => {
    setNombre("");
    setValor("");
    id("");
  };

  const validarFormulario = [nombre, valor].includes("");

  useEffect(() => {
    rellenarCampos();
  }, [seleccionarSuscripcion]);

  async function rellenarCampos() {
    if (seleccionarSuscripcion.id) {
      setNombre(seleccionarSuscripcion.nombre);
      setValor(seleccionarSuscripcion.valor);
      setId(seleccionarSuscripcion.id);
      console.log(seleccionarSuscripcion);
      return setIsCargando(false);
    }
    setNombre("");
    setValor("");
    setId("");
    setIsCargando(false);
  }
  // const useField = ({ type = "text" }) => {
  //   const [value, setValue] = useState("");

  //   const onChange = (event) => {
  //     setValue(event.target.value);
  //   };
  //   return {
  //     type,
  //     value,
  //     onChange,
  //   };
  // };

  // const nombre = useField({ type: "text" });
  // const valor = useField({ type: "number" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    if (seleccionarSuscripcion.id) {
      console.log(objeto);
      EditTiposSuscripcion(objeto);
      setId("");
    } else {
      const a = await PostTiposSuscripcion(objeto);
      const b = await resetForm();
    }
    navigate("/suscriptores");
  };

  return (
    <div className="bg-white rounded-lg  max-w-xl mx-auto">
      {isCargando ? (
        <Spiner />
      ) : (
        // <ContenedorFormularios>
        <form action="submit" onSubmit={handleSubmit}>
          <div className={divStyles}>
            {error && <Error mensaje="Completa todos los campos" />}
            <form action="submit" className="flex-row space-y-5">
              <h2 className="text-center font-bold mb-3">
                {seleccionarSuscripcion.nombre
                  ? `${seleccionarSuscripcion.nombre}`
                  : "Nueva Suscripcion"}
              </h2>
              <div className={divStyles}>
                <label> Nombre </label>
                <input
                  placeholder="Escribe.."
                  className={inputStyles}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className={divStyles}>
                <label> Valor </label>
                <input
                  placeholder="$"
                  className={inputStyles}
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className={botonDivStyles}>
            <BotonPrimario
              Color={BotonBlancoRedondeado}
              value={
                seleccionarSuscripcion.id
                  ? "Editar Suscripcion"
                  : "Crear Suscripcion"
              }
              type="submit"
            />
          </div>
        </form>
        // </ContenedorFormularios>
      )}
    </div>
  );
};

export default FormularioSuscripciones;
