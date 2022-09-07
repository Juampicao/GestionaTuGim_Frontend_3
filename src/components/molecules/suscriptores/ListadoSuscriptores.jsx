import { useEffect, useState, useContext } from "react";
import GeneralContext from "../../../contexts/GeneralProvider";
import useGeneral from "../../../hooks/useGeneral";

import Suscriptor from "./Suscriptor";
import Spiner from "../../atoms/Spiner";
import { BotonPrimario } from "../../atoms/Botones";
import {
  BotonAzulRedondeado,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";

import axios from "axios";
import { tableStyles } from "../../../helpers/styles";

const ListadoSuscriptores = () => {
  const {
    isCargando,
    setIsCargando,
    getSuscriptores,
    suscriptores,
    VerificarEstadoDeDeudas,
  } = useGeneral();

  useEffect(() => {
    getSuscriptores();
    setIsCargando(false);
  }, []);

  return (
    <div>
      {isCargando ? (
        <Spiner />
      ) : (
        <>
          <BotonPrimario
            Color={BotonBlancoRedondeado}
            onClick={() => {
              VerificarEstadoDeDeudas();
              window.location.reload();
            }}
            value="Actualizar Estados"
          />
          <div className={tableStyles}>
            <table className="w-full">
              <thead className=" bg-white border-b-2 border-gray-200">
                <tr className="  bg-white">
                  <th className="p-2">Imagen</th>
                  <th className="p-2">Nombre</th>
                  <th className="p-2">Estado</th>
                  <th className="p-2 hidden sm:flex">Suscripcion</th>

                  <th className="p-2">Fecha</th>
                  <th className="p-2 flex justify-center ">
                    <p>Funciones</p>
                    <img
                      // src={IconoTooltip}
                      alt=""
                      className="h-5 pt-1 float-left cursor-pointer items-center"
                      data-bs-toggle="tooltip"
                      title="Por el momento no se puede editar ni ver el gasto unico. "
                    />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {suscriptores.length >= 1 ? (
                  suscriptores.map((suscriptor) => (
                    <Suscriptor key={suscriptor._id} suscriptor={suscriptor} />
                  ))
                ) : (
                  <tr className="my-5 text-center bg-white">
                    <td className="cols-span-4 bg-white">
                      No hay suscriptores
                    </td>
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

export default ListadoSuscriptores;
