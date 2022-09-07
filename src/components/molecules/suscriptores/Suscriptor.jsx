import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGeneral from "../../../hooks/useGeneral";
import { BotonEditar, BotonEliminar, BotonVer } from "../../atoms/Botones";
import axios from "axios";
import { estadoSuscripcionStyles } from "../../../helpers/styles";
import Spiner from "../../atoms/Spiner";
import { formatearFecha } from "../../../helpers/funciones";

const Suscriptor = ({ suscriptor }) => {
  const {
    isCargando,
    setSuscriptores,
    suscriptores,
    handleDeleteSuscriptorId,
  } = useGeneral();

  const navigate = useNavigate();

  const { _id, nombre, estado, fechas, rutina, tipoSuscripcion } = suscriptor;

  const reiniciarArray = async () => {
    const arraySuscriptores = suscriptores.filter(
      (suscriptor) => suscriptor._id !== _id
    );
    setSuscriptores(arraySuscriptores);
  };

  return (
    <>
      {isCargando ? (
        <Spiner />
      ) : (
        <tr className="hover:bg-gray-300 ">
          <td className="text-indigo-700 font-bold">
            {nombre ? nombre.slice(0, 3) : ""}
          </td>
          <td className="p-1">
            <p>{nombre}</p>
          </td>
          <td className="p-1">
            <p className={estadoSuscripcionStyles[estado]}>{estado}</p>
          </td>
          <td className="p-1 hidden sm:flex  ">
            <p className="">{tipoSuscripcion.nombre}</p>
          </td>

          {fechas ? (
            <td>{formatearFecha(fechas.fechaVencimientoSuscripcion)}</td>
          ) : (
            ""
          )}
          <td className=" ">
            <div className=" ">
              <BotonVer
                value="Ver"
                onClick={() => navigate(`/suscriptores/${_id}`)}
              />
              <BotonEditar
                value="Editar"
                onClick={() => navigate(`/suscriptores/editar/${_id}`)}
              />
              <BotonEliminar
                value="Eliminar"
                // onClick={() => handleDelete(_id)}
                onClick={async function () {
                  await handleDeleteSuscriptorId(_id, nombre),
                    await reiniciarArray();
                }}
              />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Suscriptor;
