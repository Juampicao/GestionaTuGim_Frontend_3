import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useGeneral from "../../../hooks/useGeneral";
import Header from "../../atoms/Header";
import Error from "../../atoms/Error";
import Spiner from "../../atoms/Spiner";
import ContenedorFormularios from "../ContenedorFormularios";

import {
  labelStyles,
  divStyles,
  inputStyles,
  botonDivStyles,
} from "../../../helpers/styles";
import {
  BotonAzulRedondeado,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";
import Suscripcion from "../suscripciones/Suscripcion";
import useEstadisticas from "../../../hooks/useEstadisticas";

const FormularioSuscriptor = () => {
  const { suscriptor, setSuscriptor, NuevoSuscriptor, EditarSuscriptor } =
    useGeneral();

  const { getTiposSuscripcion, tiposSuscripcion } = useEstadisticas();

  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [dni, setDni] = useState("");
  const [genero, setGenero] = useState("");
  const [notas, setNotas] = useState("");
  const [celular, setCelular] = useState("");

  const [tipoSuscripcion, setTipoSuscripcion] = useState("");
  const [fechaVencimientoSuscripcion, setFechaVencimientoSuscripcion] =
    useState("");

  const [correo, setCorreo] = useState("");

  const [error, setError] = useState(false);
  const [isCargando, setIsCargando] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  useEffect(() => {
    const getData = async () => {
      const verifyUrl = await verificarUrl();
      const resetearForm = await resetForm();
      const getTypeSubscription = await getTiposSuscripcion();
    };
    getData();
  }, []);

  useEffect(() => {
    rellenarCampos();
  }, [suscriptor]);

  async function verificarUrl() {
    if (urlActual.includes("nuevosuscriptor")) {
      setSuscriptor("");
    }
  }

  async function rellenarCampos() {
    if (suscriptor?._id) {
      let fechaNacimientoEditado = new Date(
        suscriptor.informacionPersonal.fechaNacimiento
      )
        .toISOString()
        .split("T")[0];

      let fechaVencimientoEditado = new Date(
        suscriptor.fechas.fechaVencimientoSuscripcion
      )
        .toISOString()
        .split("T")[0];

      setId(suscriptor._id);
      setNombre(suscriptor.nombre);
      setDomicilio(suscriptor.informacionPersonal.domicilio);
      setDni(suscriptor.informacionPersonal.dni);
      setGenero(suscriptor.informacionPersonal.genero);
      setCorreo(suscriptor.informacionPersonal.correo);
      setCelular(suscriptor.informacionPersonal.celular);
      setTipoSuscripcion(suscriptor.tipoSuscripcion._id);
      setFechaNacimiento(fechaNacimientoEditado);
      setNotas(suscriptor.informacionPersonal.notas);
      setFechaVencimientoSuscripcion(fechaVencimientoEditado);
      await setIsCargando(false);
      return;
    }
    setTipoSuscripcion("");
    setFechaVencimientoSuscripcion(""), setId(null);
    setNombre("");
    setDomicilio("");
    setDni("");
    setGenero("");
    setCorreo("");
    setCelular("");
    setNotas("");
    await setIsCargando(false);
  }

  const validarFormulario = [
    nombre,
    domicilio,
    fechaNacimiento,
    celular,
    correo,
    dni,
    genero,
    tipoSuscripcion,
  ].includes("");

  const resetForm = () => {
    setId("");
    setNombre("");
    setDomicilio("");
    setFechaNacimiento("");
    setDni("");
    setGenero("");
    setCelular("");
    setTipoSuscripcion("");
    setNotas("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario) {
      setError(true);
      return;
    }
    if (suscriptor._id) {
      await EditarSuscriptor({
        id,
        nombre,
        domicilio,
        fechaNacimiento,
        celular,
        correo,
        dni,
        genero,
        notas,
        tipoSuscripcion,
        fechaVencimientoSuscripcion,
      });
    } else {
      // Pasar los datos hacia el provider
      await NuevoSuscriptor({
        nombre,
        tipoSuscripcion,
        domicilio,
        fechaNacimiento,
        celular,
        correo,
        dni,
        genero,
        notas,
      });
    }
    resetForm();
    navigate("/suscriptores");
  };

  // styles
  const titleStlyes = "font-bold  capitalize py-2";

  return (
    <div>
      {/* <Header title="Nuevo Suscriptor" /> */}
      {isCargando ? (
        <Spiner />
      ) : (
        <ContenedorFormularios>
          <div className="bg-white rounded-lg  max-w-xl mx-auto">
            <form action="submit" className="mt-5 py-5" onSubmit={handleSubmit}>
              {error && <Error mensaje="Completa todos los campos" />}
              {suscriptor._id ? (
                <div className={`${divStyles} text-center `}>
                  <h2 className="capitalize">
                    <span className={titleStlyes}> Nombre: </span>
                    {suscriptor.nombre}
                    <span className={`${titleStlyes} ml-4`}> Socio: </span>
                    {suscriptor.socio}
                  </h2>
                </div>
              ) : (
                ""
              )}
              {/* Incio informacion personal acordion  */}
              <div class="accordion" id="informacionPersonalAcordeon">
                <div class="accordion-item ">
                  <h2 class="accordion-header mb-0" id="headingOne">
                    <button
                      class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-black text-left  bg-white rounded-none transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Informacion Personal
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#informacionPersonalAcordeon"
                  >
                    <div className={divStyles}>
                      <label htmlFor="nombre" className={labelStyles}>
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Nombre "
                        className={inputStyles}
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className={divStyles}>
                      <label htmlFor="fechaNacimiento" className={labelStyles}>
                        Fecha Nacimiento
                      </label>
                      <input
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        type="date"
                        placeholder="fecha"
                        className={inputStyles}
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                      />
                    </div>

                    <div className={divStyles}>
                      <label htmlFor="domicilio" className={labelStyles}>
                        Domicilio
                      </label>
                      <input
                        id="domicilio"
                        name="domicilio"
                        type="text"
                        placeholder="direccion"
                        className={inputStyles}
                        value={domicilio}
                        onChange={(e) => setDomicilio(e.target.value)}
                      />
                    </div>

                    <div className={divStyles}>
                      <label htmlFor="dni" className={labelStyles}>
                        Dni
                      </label>
                      <input
                        id="dni"
                        name="dni"
                        type="tel"
                        placeholder="dni"
                        className={inputStyles}
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                      />
                    </div>

                    <div className={divStyles}>
                      <label htmlFor="genero" className={labelStyles}>
                        Genero
                      </label>
                      <select
                        as="select"
                        id="genero"
                        name="genero"
                        className={inputStyles}
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                      >
                        <option>--Seleccionar--</option>

                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div className={divStyles}>
                      <label htmlFor="celular" className={labelStyles}>
                        Celular
                      </label>
                      <input
                        id="celular"
                        name="celular"
                        type="tel"
                        placeholder="celular"
                        className={inputStyles}
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                      />
                    </div>

                    <div className={divStyles}>
                      <label htmlFor="correo" className={labelStyles}>
                        Correo Electronico
                      </label>
                      <input
                        id="correo"
                        name="correo"
                        type="email"
                        placeholder="correo"
                        className="block w-full p-2 px-4 bg-gray-100 rounded-md mt-1"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* fin informacion personal acordeon */}

              <div className={divStyles}>
                <label htmlFor="suscripcion" className={labelStyles}>
                  Suscripcion
                </label>
                <select
                  as="select"
                  id="suscripcion"
                  name="suscripcion"
                  className={inputStyles}
                  value={tipoSuscripcion}
                  onChange={(e) => setTipoSuscripcion(e.target.value)}
                >
                  <option value="">--Select--</option>
                  {tiposSuscripcion
                    ? tiposSuscripcion.map((suscripcion) => (
                        <option value={suscripcion._id} key={suscripcion._id}>
                          {suscripcion.nombre}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
              {suscriptor._id ? (
                <div className={divStyles}>
                  <label
                    htmlFor="fechaVencimientoSuscripcion"
                    className={labelStyles}
                  >
                    Fecha Vencimiento Suscripcion
                  </label>
                  <input
                    id="fechaVencimientoSuscripcion"
                    name="fechaVencimientoSuscripcion"
                    type="date"
                    className={inputStyles}
                    value={fechaVencimientoSuscripcion}
                    onChange={(e) => {
                      setFechaVencimientoSuscripcion(e.target.value),
                        console.log(e.target.value);
                    }}
                  />
                </div>
              ) : (
                " "
              )}

              {/* Prueba acordion TextArea */}
              <div class="accordion" id="accordionExample">
                <div class="accordion-item ">
                  <h2 class="accordion-header mb-0" id="headingOne">
                    <button
                      class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-black text-left  bg-white rounded-none transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Agregar Notas
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className={divStyles}>
                      <textarea
                        name="notas"
                        id="notas"
                        cols=""
                        rows=""
                        className="w-full border  h-28 p-2 "
                        placeholder="Escribe alguna nota..."
                        value={notas}
                        onChange={(e) => setNotas(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* fin prueba acordeon */}

              <div className={botonDivStyles}>
                {suscriptor._id ? (
                  <BotonPrimario
                    Color={BotonBlancoRedondeado}
                    value="Ver"
                    type="button"
                    onClick={() => navigate(`/suscriptores/${suscriptor._id}`)}
                  />
                ) : (
                  ""
                )}
                <BotonPrimario
                  Color={BotonBlancoRedondeado}
                  value={
                    suscriptor?.nombre
                      ? "Editar Suscriptor"
                      : "Agregar Suscriptor"
                  }
                  type="submit"
                />
                <BotonPrimario
                  Color={BotonBlancoRedondeado}
                  value="Volver Atras"
                  type="button"
                  onClick={() => {
                    navigate("/suscriptores"), setSuscriptor("");
                  }}
                />
              </div>
            </form>
          </div>
        </ContenedorFormularios>
      )}
    </div>
  );
};

export default FormularioSuscriptor;
