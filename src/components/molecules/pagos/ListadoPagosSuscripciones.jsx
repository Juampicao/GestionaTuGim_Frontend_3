import React, { useEffect, useState } from "react";
import { tableStyles } from "../../../helpers/styles";
import useGeneral from "../../../hooks/useGeneral";
import Spiner from "../../atoms/Spiner";
import PagoSuscripciones from "../suscriptores/PagoSuscripciones";
const ListadoPagosSuscripciones = () => {
  const {
    isCargando,
    setIsCargando,
    GetPagosSuscripcionAll,
    todosPagosSuscripcion,
  } = useGeneral();

  useEffect(() => {
    GetPagosSuscripcionAll();
  }, []);

  // styles
  const propiedadTituloStyles = "font-bold";
  const liStyles = "";
  const titleStlyes = "font-bold text-xl uppercase py-2";
  return (
    <div>
      <h3 className={titleStlyes}>Pagos Suscripciones</h3>

      {isCargando ? (
        <Spiner />
      ) : (
        <>
          <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center max-w-7xl">
            <table className="w-full">
              <thead className=" bg-white border-b-2 border-gray-200">
                <tr className="  bg-white">
                  <th className="p-2">Fecha</th>
                  <th className="p-2">Monto</th>
                  <th className="p-2">Persona</th>

                  <th className="p-2">Funciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {todosPagosSuscripcion.length >= 1 ? (
                  todosPagosSuscripcion.map((pago) => (
                    <PagoSuscripciones key={pago._id} pago={pago} />
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
        </>
      )}
    </div>
  );
};

export default ListadoPagosSuscripciones;
