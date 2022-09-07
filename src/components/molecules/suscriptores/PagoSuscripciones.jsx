import React, { useEffect } from "react";
import { BotonEliminar, BotonVer, BotonEditar } from "../../atoms/Botones";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useGeneral from "../../../hooks/useGeneral";
import { formatearFecha } from "../../../helpers/funciones";
import { botonDivStyles } from "../../../helpers/styles";

const PagoSuscripciones = ({ pago }) => {
  const {
    setIsOpenSaveModal,
    setIsOpenErrorModal,
    handleDeletePagoSuscripcion,
  } = useGeneral();

  const { id } = useParams();
  const params = useParams();
  const navigate = useNavigate();
  const urlActual = location.pathname;

  if (pago) {
    const { fechaPagoSuscripcion, montoPagoSuscripcion, notas } =
      pago.pagoUnico;
  }

  return (
    <>
      {pago.pagoUnico ? (
        <tr>
          <td>{formatearFecha(pago.pagoUnico.fechaPagoSuscripcion)}</td>
          <td> ${pago.pagoUnico.montoPagoSuscripcion}</td>
          {urlActual.includes("pagos") ? (
            <td>{pago.suscriptorPagadorNombre}</td>
          ) : (
            ""
          )}
          <td className=" ">
            <div className=" ">
              <BotonVer
                value="Ver"
                onClick={() =>
                  navigate(`/suscriptores/pagosuscripcion/${pago._id}`)
                }
              />
              <BotonEditar
                value="Editar"
                // onClick={() =>
                //   navigate(`/suscriptores/editar/${_id}`)
                // }
                onClick={() =>
                  alert("No se puede realizar esta opcion por el momento")
                }
              />
              <BotonEliminar
                value="Eliminar"
                onClick={() => handleDeletePagoSuscripcion(pago._id)}
              />
            </div>
          </td>
        </tr>
      ) : (
        ""
      )}
    </>
  );
};

export default PagoSuscripciones;
