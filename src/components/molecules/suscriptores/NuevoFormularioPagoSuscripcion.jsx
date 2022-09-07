import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useGeneral from "../../../hooks/useGeneral";
import Header from "../../atoms/Header";
import Error from "../../atoms/Error";
import Spiner from "../../atoms/Spiner";
import ContenedorFormularios from "../ContenedorFormularios";
import { BotonBlancoRedondeado } from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";

import {
  labelStyles,
  divStyles,
  inputStyles,
  botonDivStyles,
} from "../../../helpers/styles";
import { formatearFecha } from "../../../helpers/funciones";

const NuevoFormularioPagoSuscripcion = () => {
  const {
    isCargando,
    setIsCargando,
    suscriptor,
    suscriptores,
    getSuscriptores,
    tiposSuscripcion,
    getTiposSuscripcion,
    NuevoPagoSuscripcion,
  } = useGeneral();

  useEffect(() => {
    // Get Data
    const getData = async () => {
      // const resetearForm = await resetForm();
      const getSubs = await getSuscriptores();
      const getTypeSubscription = await getTiposSuscripcion();
    };
    getData();
  }, []);

  const [suscriptorPagador, setSuscriptorPagador] = useState("");
  const [nombre, setNombre] = useState("");
  const [tipoSuscripcion, setTipoSuscripcion] = useState("");
  const [montoPagoSuscripcion, setMontoPagoSuscripcion] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [socio, setSocio] = useState("");
  const [fechaVencimientoSuscripcion, setFechaVencimientoSuscripcion] =
    useState("");
  const [
    nuevaFechaVencimientoSuscripcion,
    setNuevaFechaVencimientoSuscripcion,
  ] = useState("");
  const [fechaPagoSuscripcion, setFechaPagoSuscripcion] = useState("");
  const [notas, setNotas] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  const obtenerSuscriptorPorNombre = (e) => {
    const iterarSuscriptores = () => {
      for (let i = 0; i < suscriptores.length; i++) {
        if (suscriptores[i].nombre === e) {
          console.log(suscriptores[i]);
          setSuscriptorPagador(suscriptores[i]);
          setSocio(suscriptores[i].socio);
          setTipoSuscripcion(suscriptores[i].tipoSuscripcion.nombre);
          setFechaVencimientoSuscripcion(
            suscriptores[i].fechas.fechaVencimientoSuscripcion
          );
          setMontoPagoSuscripcion(suscriptores[i].tipoSuscripcion.valor);
        }
      }
    };
    iterarSuscriptores();
  };

  const validarFormulario = [
    montoPagoSuscripcion,
    metodoPago,
    fechaPagoSuscripcion,
    nuevaFechaVencimientoSuscripcion,
  ].includes("");

  const resetForm = () => {
    setSuscriptorPagador("");
    setMontoPagoSuscripcion("");
    setFechaPagoSuscripcion("");
    setFechaVencimientoSuscripcion("");
    setNuevaFechaVencimientoSuscripcion("");
    setFechaVencimientoSuscripcion("");
    setNotas("");
    setTipoSuscripcion("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario) {
      console.log("Completa todos los casilleros por favor.");
      setError(true);
      return;
    }
    try {
      // Pasar los datos hacia el provider
      await NuevoPagoSuscripcion({
        montoPagoSuscripcion,
        metodoPago,
        fechaPagoSuscripcion,
        nuevaFechaVencimientoSuscripcion,
        suscriptorPagador,
        notas,
      });
    } catch (error) {
      console.log(error);
    }
    resetForm();
    navigate("/suscriptores");
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }
  return (
    <div>
      {isCargando ? (
        <Spiner />
      ) : (
        <ContenedorFormularios>
          <div className="bg-white rounded-lg  max-w-xl mx-auto">
            <form action="submit" onSubmit={handleSubmit} className="mt-5 py-5">
              <div className={divStyles}>
                {error && <Error mensaje="Completa todos los campos" />}
                <label htmlFor="suscriptor" className={labelStyles}>
                  Suscriptor
                </label>
                <input
                  type="search"
                  id="suscriptor"
                  name="suscriptor"
                  list="listasuscriptores"
                  autoComplete="off"
                  className={inputStyles}
                  placeholder="escriba el nombre.."
                  onChange={(e) => {
                    obtenerSuscriptorPorNombre(e.target.value);
                  }}
                />
                <datalist id="listasuscriptores">
                  {suscriptores.map((suscriptor) => (
                    <option value={suscriptor.nombre} key={suscriptor.socio}>
                      {suscriptor.nombre}
                      {suscriptor.socio}
                    </option>
                  ))}
                </datalist>
              </div>
              <div className="grid grid-cols-2">
                <div className={divStyles}>
                  <label htmlFor="montoSuscripcion" className={labelStyles}>
                    Socio
                  </label>
                  <div className="flex gap-x-1">
                    <input
                      disabled={true}
                      id="montoSuscripcion"
                      name="montoSuscripcion"
                      type="text"
                      placeholder="Socio"
                      className={`${inputStyles} text-slate-400`}
                      value={socio}
                      onChange={(e) => setSocio(e.target.value)}
                    />
                  </div>
                </div>
                <div className={divStyles}>
                  <div>
                    <label htmlFor="montoSuscripcion" className={labelStyles}>
                      Suscripcion
                    </label>
                    <input
                      disabled={true}
                      id="montoSuscripcion"
                      name="montoSuscripcion"
                      type="text"
                      placeholder=" Suscripcion"
                      className={`${inputStyles} text-slate-400`}
                      value={tipoSuscripcion}
                      onChange={(e) => setTipoSuscripcion(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className={divStyles}>
                  <label htmlFor="montoSuscripcion" className={labelStyles}>
                    Vencimiento
                  </label>
                  <input
                    disabled={true}
                    id="montoSuscripcion"
                    name="montoSuscripcion"
                    type="text"
                    placeholder="Monto a pagar"
                    className={`${inputStyles} text-slate-400`}
                    // value={formatearFecha(fechaVencimientoSuscripcion)}
                    value={fechaVencimientoSuscripcion}
                    onChange={(e) =>
                      setFechaVencimientoSuscripcion(e.target.value)
                    }
                  />
                </div>
                <div className={divStyles}>
                  <label htmlFor="montoSuscripcion" className={labelStyles}>
                    Monto a pagar
                  </label>
                  <input
                    disabled={true}
                    id="montoSuscripcion"
                    name="montoSuscripcion"
                    type="number"
                    placeholder="Monto a pagar"
                    className={`${inputStyles} text-slate-900`}
                    value={montoPagoSuscripcion}
                    // onChange={(e) => setMontoPagoSuscripcion(e.target.value)}
                    onChange={(e) => {
                      setMontoPagoSuscripcion(e.target.value);
                    }}
                    onClick={() => alert("No puedes editar el pago.")}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className={divStyles}>
                <label htmlFor="metodoPago" className={labelStyles}>
                  Metodo de pago
                </label>
                <select
                  as="select"
                  id="metodoPago"
                  name="metodoPago"
                  placeholder=""
                  className={inputStyles}
                  onChange={(e) => setMetodoPago(e.target.value)}
                  value={metodoPago}
                >
                  <option value=""> --Select-- </option>
                  <option value="Efectivo"> Efectivo </option>
                  <option value="Tarjeta"> Tarjeta </option>
                </select>
              </div>

              <div className={divStyles}>
                <label htmlFor="fechaPagoSuscripcion" className={labelStyles}>
                  Fecha Pago
                </label>
                <input
                  id="fechaPagoSuscripcion"
                  name="fechaPagoSuscripcion"
                  type="date"
                  className={inputStyles}
                  value={fechaPagoSuscripcion}
                  onChange={(e) => setFechaPagoSuscripcion(e.target.value)}
                />
              </div>
              <div className={divStyles}>
                <label htmlFor="nuevaFechaVencimiento" className={labelStyles}>
                  Nueva Fecha Vencimiento
                </label>
                <input
                  id="nuevaFechaVencimiento"
                  name="nuevaFechaVencimiento"
                  type="date"
                  placeholder="fecha"
                  className={inputStyles}
                  value={nuevaFechaVencimientoSuscripcion}
                  onChange={(e) =>
                    setNuevaFechaVencimientoSuscripcion(e.target.value)
                  }
                />
              </div>
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
                    onClick={() => navigate(`/suscriptores/${_id}`)}
                  />
                ) : (
                  ""
                )}
                <BotonPrimario
                  Color={BotonBlancoRedondeado}
                  value={suscriptor?.nombre ? "Editar Pago" : "Guardar Pago"}
                  type="submit"
                />
                <BotonPrimario
                  Color={BotonBlancoRedondeado}
                  value="Volver Atras"
                  type="button"
                  onClick={() => {
                    navigate("/suscriptores");
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

export default NuevoFormularioPagoSuscripcion;
