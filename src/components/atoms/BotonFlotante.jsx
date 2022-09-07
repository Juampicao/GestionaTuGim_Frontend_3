import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColorAzul, ColorRojo, ColorVerde } from "../../helpers/colores";
import IconAdd from "../../img/newIcons/iconAdd.png";

const BotonFlotante = () => {
  const navigate = useNavigate();

  // Styles
  const ButtonStyle =
    "px-3 flex py-2.5  hover:scale-105 font-medium text-xs leading-tight uppercase  transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg  focus:outline-none hover:duration-200  cursor-pointer items-center rounded-full origin-left ";

  const ButtonAdd =
    "bg-gradient-to-t from-gray-900 via-gray-800 to-black  duration-300   sm:bg-black sm:hover:bg-slate-900 sm:active:bg-slate-800 ";

  return (
    <div>
      {/* {abrirBoton ? <p> Abierto</p> : <p> Cerrado</p>} */}
      <div className="flex xs:justify-center relative xs:absolute z-50 xs:right-0  xs:p-5 md:pr-10 pb-8  bottom-0 ">
        <div>
          <div className="dropup relative ">
            <button
              className={`${ButtonStyle}, ${ButtonAdd}`}
              type="submit"
              value="Agregar"
              id="dropdownMenuButton1u"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={IconAdd} alt="" className="h-10 " />
            </button>

            <ul
              className=" dropdown-menu min-w-max absolute hidden text-base z-50 float-left py-2 list-none text-left rounded-lg  mt-1  m-0 bg-clip-padding border-none space-y-3 origin-left duration-300
        "
              aria-labelledby="dropdownMenuButton1u"
            >
              <Link
                to="suscriptores/nuevosuscriptor"
                className={`${ButtonStyle}, ${ColorAzul}`}
                onClick={() => navigate("suscriptores/nuevosuscriptor")}
                id="dropdownMenuButton1u"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={IconAdd} alt="" className="h-6 " />
                <p className="px-2">Suscriptor</p>
              </Link>
              <Link
                to="suscriptores/pagosuscripcion"
                className={`${ButtonStyle}, ${ColorRojo}`}
                onClick={() => navigate("suscriptores/pagosuscripcion")}
                id="dropdownMenuButton1u"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={IconAdd} alt="" className="h-6 " />
                <p className="px-2">Pago</p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotonFlotante;
