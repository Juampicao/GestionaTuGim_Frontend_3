import React, { useEffect } from "react";
import { BotonEliminar, BotonVer, BotonEditar } from "../../atoms/Botones";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import useGeneral from "../../../hooks/useGeneral";
import { formatearFecha } from "../../../helpers/funciones";
import { botonDivStyles } from "../../../helpers/styles";

// import IconoEjercicio from "../../../img/IconoEjercicioPechoplano.png";
const Ejercicio = ({ ejercicio }) => {
  const {} = useGeneral();

  const { id } = useParams();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(ejercicio);
  }, []);

  console.log(ejercicio);
  const { _id, explicacion, creador, nombre, imagen } = ejercicio;

  return (
    <>
      <tr>
        {/* <td>{_id ? _id : "No hay ninguna rutina "}</td> */}
        <td>
          <img
            // src={IconoEjercicio}
            alt="icono ejercicio"
            className="h-8 mx-auto"
          />
        </td>
        <td>{explicacion ? explicacion : ""}</td>
        <td>{creador ? nombre : ""}</td>

        <td className=" ">
          <div className=" ">
            <BotonVer
              onClick={() =>
                alert("No se puede realizar esta opcion por el momento")
              }
            />
            <BotonEditar
              onClick={() =>
                alert("No se puede realizar esta opcion por el momento")
              }
            />
            <BotonEliminar
              onClick={() =>
                alert("No se puede realizar esta opcion por el momento")
              }
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default Ejercicio;
