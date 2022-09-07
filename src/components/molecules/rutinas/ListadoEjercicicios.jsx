import React from "react";
import { tableStyles } from "../../../helpers/styles";
import Ejercicio from "./Ejercicio";
const ListadoEjercicicios = ({ ejercicios }) => {
  return (
    <div>
      <div className={tableStyles}>
        <table className="w-full">
          <thead className=" bg-white border-b-2 border-gray-200">
            <tr className="  bg-white">
              <th className="p-2">Imagen</th>
              <th className="p-2">Explicacion</th>
              <th className="p-2">Ejercicio</th>
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
            {ejercicios.length > 0 ? (
              ejercicios.map((ejercicio) => <Ejercicio ejercicio={ejercicio} />)
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
    </div>
  );
};

export default ListadoEjercicicios;
