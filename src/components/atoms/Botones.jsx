import React from "react";
import { useNavigate } from "react-router-dom";
import {} from "../../helpers/colores";

import IconoDelete2 from "../../img/newIcons/deletColor.png";
import IconoEdit2 from "../../img/newIcons/editColor.png";
import IconoView2 from "../../img/newIcons/viewColor.png";
import IconAdd from "../../img/newIcons/iconAdd.png";

import "./Botones.css";
export const BotonVer = ({ value, onClick }) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        type="button"
        value={value}
        onClick={onClick}
        className="hover:shadow-lg shadow-slate-500 item-center mx-auto p-2 hover:bg-white hover:scale-105 duration-200 hover:duration-200  hover:rounded-full"
      >
        {/* <img src={IconoVer} alt="Borrar" className="h-5" /> */}
        <img src={IconoView2} alt="Borrar" className="h-5" />
      </button>
    </>
  );
};

export const BotonEliminar = ({ value, onClick }) => {
  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        type="button"
        value={value}
        onClick={onClick}
        className="hover:shadow-lg shadow-slate-500 item-center mx-auto p-2 hover:bg-white hover:scale-105 duration-200 hover:duration-200  hover:rounded-full"
      >
        {/* <img src={IconoDelete} alt="Borrar" className="h-5" /> */}
        <img src={IconoDelete2} alt="Borrar" className="h-5" />
      </button>
    </>
  );
};

export const BotonEditar = ({ value, onClick }) => {
  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        type="button"
        value={value}
        onClick={onClick}
        className="hover:shadow-lg shadow-slate-500 item-center mx-auto p-2 hover:bg-white hover:scale-105 duration-200 hover:duration-200 hover:rounded-full"
      >
        {/* <img src={IconoEdit} alt="Borrar" className="h-5" /> */}
        <img src={IconoEdit2} alt="Borrar" className="h-6" />
      </button>
    </>
  );
};

export const BotonModal = ({ value, onClick, Color }) => {
  return (
    <>
      <input type="submit" className={Color} onClick={onClick} value={value} />
    </>
  );
};

export const BotonPrimario = ({ value, onClick, Color }) => {
  return (
    <>
      <input type="submit" className={Color} onClick={onClick} value={value} />
    </>
  );
};

export const BotonPrimarioIcono = ({ value, onClick, Color }) => {
  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="bg-red-500  active:bg-red-700 hover:bg-red-600 focus:ring-red-900 text-white px-4 flex py-2.5  hover:scale-105 font-medium text-xs leading-tight uppercase  transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg rounded-xl focus:outline-none hover:duration-200  cursor-pointer items-center"
        onClick={onClick}
        type="submit"
        value={value}
      >
        <img src={IconAdd} alt="" className="h-6 pr-1" />
        <p>Nuevo Gasto</p>
      </button>
    </>
  );
};

export const BotonNuevaVenta = ({ value, onClick, Color }) => {
  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="bg-green-500 hover:bg-green-700 text-white px-4 flex py-2.5  hover:scale-105 font-medium text-xs leading-tight uppercase  transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg rounded-xl focus:outline-none hover:duration-200  cursor-pointer items-center"
        onClick={onClick}
        type="submit"
        value={value}
      >
        <img src={IconAdd} alt="" className="h-6 pr-1" />
        <p>Nueva Venta</p>
      </button>
    </>
  );
};

export const BotonNuevoProducto = ({ value, onClick, Color }) => {
  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 flex py-2.5  hover:scale-105 font-medium text-xs leading-tight uppercase  transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg rounded-xl focus:outline-none hover:duration-200  cursor-pointer items-center"
        onClick={onClick}
        type="submit"
        value="Nuevo Producto"
      >
        <img src={IconAdd} alt="" className="h-6 pr-1" />
        <p>Nuevo Producto</p>
      </button>
    </>
  );
};

export const BotonVolverAtras = ({ value, onClick, Color }) => {
  return (
    <>
      <button className="" onClick={onClick} type="submit" value={value}>
        <img src={IconAdd} alt="" className="h-6 pr-1" />
        <p>Nuevo Gasto</p>
      </button>
    </>
  );
};

export default {
  BotonEliminar,
  BotonNuevoProducto,
  BotonVer,
  BotonModal,
  BotonPrimario,
  BotonPrimarioIcono,
};
