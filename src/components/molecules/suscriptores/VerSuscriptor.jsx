import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import PagoSuscripciones from "./PagoSuscripciones";

import { BotonBlancoRedondeado } from "../../../helpers/colores";
import useGeneral from "../../../hooks/useGeneral";
import {
  BotonEditar,
  BotonEliminar,
  BotonPrimario,
  BotonVer,
} from "../../atoms/Botones";
import Spiner from "../../atoms/Spiner";
import { formatearFecha } from "../../../helpers/funciones";
import { estadoSuscripcionStyles, tableStyles } from "../../../helpers/styles";
import Rutina from "./Rutina";
import Modal from "../../atoms/Modal";
import FormularioEjerciciodeRutina from "../rutinas/FormularioEjercicioDeRutina";
import IconAdd from "../../../img/newIcons/iconAdd.png";
const VerSuscriptor = () => {
  const {
    setIsOpenErrorModal,
    getSuscriptorId,
    setSuscriptor,
    suscriptor,
    isCargando,
    setIsCargando,
    pagosSuscriptorId,
    isOpenModal,
    openModal,
    closeModal,
  } = useGeneral();

  const [isCargando2, setIsCargando2] = useState(true);

  const navigate = useNavigate();

  const { id } = useParams();
  const params = useParams();

  // Async
  async function mostrarResultado() {
    setIsCargando2(false);
  }

  useEffect(() => {
    const getData = async () => {
      const b = await setIsCargando(true);
      const a = await getSuscriptorId(params.id);
      const c = await mostrarResultado();
    };
    getData();
  }, []);

  // Destructuring
  const { nombre, socio } = suscriptor;

  // styles
  const propiedadTituloStyles = "font-bold";
  const liStyles = "";
  const titleStlyes = "font-bold text-xl uppercase py-2";
  return (
    <div>
      {isCargando2 ? (
        <Spiner />
      ) : (
        <div>
          <ul className="p-5 xs:p-0 space-y-3">
            <h3 className={titleStlyes}>Informacion Personal</h3>
            <div className="grid grid-cols-2 gap-y-4">
              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Nombre:</p>

                {nombre}
              </li>
              <li>
                <p className={propiedadTituloStyles}>Socio: </p>

                {socio}
              </li>

              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Domicilio:</p>
                {suscriptor.informacionPersonal.domicilio
                  ? suscriptor.informacionPersonal.domicilio
                  : ""}
              </li>

              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Dni:</p>
                {suscriptor.informacionPersonal.dni}
              </li>

              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Correo:</p>
                {suscriptor.informacionPersonal.correo}
              </li>

              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Celular:</p>
                {suscriptor.informacionPersonal.celular}
              </li>

              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Genero:</p>
                {suscriptor.informacionPersonal.genero}
              </li>
              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Notas:</p>
                {suscriptor.informacionPersonal.notas}
              </li>

              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Nacimiento:</p>
                {formatearFecha(suscriptor.informacionPersonal.fechaNacimiento)}
              </li>
            </div>
            <div className="flex gap-x-3 items-center">
              <h3 className={titleStlyes}>Rutina</h3>

              <button
                className="px-3 flex py-2.5  font-medium text-xs leading-tight uppercase hover:scale-105 transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg  focus:outline-none hover:duration-200  cursor-pointer items-center rounded-full bg-green-700 hover:bg-green-800 text-white"
                type="button"
                onClick={openModal}
                value="Agregar"
              >
                <img src={IconAdd} alt="" className="h-8 " />
                <p className="pl-2">Agregar Ejercicio</p>
              </button>
            </div>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <FormularioEjerciciodeRutina />
            </Modal>
            <button onClick={() => navigate(`/ejericicio/${params.id}`)}>
              Agregar desde pagina
            </button>

            {/* Rutina */}
            <div className={tableStyles}>
              <table className="w-full">
                <thead className=" bg-white border-b-2 border-gray-200">
                  <tr className="  bg-white">
                    <th className="p-2"> Imagen</th>
                    <th className="p-2"> Ejercicio</th>
                    <th className="p-2"> Rep</th>
                    <th className="p-2"> Series</th>
                    <th className="p-2"> Dia</th>
                    <th className="p-2 flex justify-center"> Funciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {suscriptor.rutina.length > 0 ? (
                    suscriptor.rutina.map((rutina) => (
                      <Rutina rutina={rutina} />
                    ))
                  ) : (
                    <tr className="py-5 text-center bg-white">
                      <td className=""> No hay ninguna rutina para mostrar</td>
                      <td className=""> </td>
                      <td className=""> </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Rutina */}
            <h3 className={titleStlyes}>Suscripcion</h3>
            <div className="grid grid-cols-2 gap-y-4">
              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Vencimiento:</p>
                {formatearFecha(suscriptor.fechas.fechaVencimientoSuscripcion)}
                {/* {suscriptor.fechas.fechaVencimientoSuscripcion} */}
              </li>
              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Fecha Alta:</p>
                {formatearFecha(suscriptor.fechas.fechaAlta)}
              </li>
              <li className={liStyles}>
                <p className={propiedadTituloStyles}>Estado</p>
                <span className={estadoSuscripcionStyles[suscriptor.estado]}>
                  {suscriptor.estado}
                </span>
              </li>
              <li className={liStyles}>
                <p className={propiedadTituloStyles}> Tipo:</p>
                {suscriptor.tipoSuscripcion.nombre}
              </li>
            </div>
            <h3 className={titleStlyes}>Pago Suscripciones</h3>
            <li className={liStyles}>
              <div className={tableStyles}>
                <table className="w-full">
                  <thead className=" bg-white border-b-2 border-gray-200">
                    <tr className="  bg-white">
                      <th className="p-2">Fecha</th>
                      <th className="p-2">Monto</th>
                      <th className="p-2">Funciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {pagosSuscriptorId.length > 0 ? (
                      pagosSuscriptorId.map((pago) => (
                        <PagoSuscripciones pago={pago} />
                      ))
                    ) : (
                      <tr className="py-5 text-center bg-white">
                        <td className=""> No hay ningun pago </td>
                        <td className=""> </td>
                        <td className=""> </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
          <div className="py-5 flex justify-center space-x-3">
            <BotonPrimario
              Color={BotonBlancoRedondeado}
              value="Editar Suscriptor"
              onClick={() => navigate(`/suscriptores/editar/${params.id}`)}
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
        </div>
      )}
    </div>
  );
};

export default VerSuscriptor;
