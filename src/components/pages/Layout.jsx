import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import BotonFlotante from "../atoms/BotonFlotante";

import iconoVentas from "../../img/iconoVentas.png";
import iconoCash from "../../img/iconCash.png";
import iconoConfiguracion from "../../img/iconoConfiguracion.png";
import IconoCerrarBlanco from "../../img/iconoCerrarBlanco.png";

import IconoBills from "../../img/iconoBills.png";
import IconoGym from "../../img/iconoGym.png";

import IconoLogout from "../../img/iconoLogout.png";
import IconDashboard from "../../img/iconDashboard.png";
import iconWoman from "../../img/iconWoman.png";
import iconMan from "../../img/manIcon.png";

import useAuth from "../../hooks/useAuth";
const Layout = () => {
  const [isActiveMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  const { auth, setAuth, cerrarSesionAuth } = useAuth();

  // console.log(auth);
  const location = useLocation();
  const urlActual = location.pathname;

  // Funcion Cerrar Edit
  const handleClickClose = () => {
    console.log("cerrando..");
    setActiveMenu(!isActiveMenu);
    // setIsOpenEdit(!isOpenEdit);
    // navigate(`/productos`);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!isActiveMenu);

  // Computer Styles
  const activeStyles = `text-white  duration-200 border-l-4  hover:border-r-lime-50 p-1   ${
    isActiveMenu ? "pl-5" : "pl-3"
  }`;

  const notActiveStyles = "text-2xl block mt-10 sm:mt-10 text-slate-300";
  const hover =
    "text-white duration-200 hover:pl-2 hover:border-l-2  hover:border-r-lime-50 ";

  const activeMenuStyles = "w-72 fixed sidebar ";
  const notActiveMenuStyles = "0";

  const hiddenTitles = `${
    isActiveMenu ? "" : "hidden"
  } origin-left duration-300 `;

  const imagenPersonaStyle = `flex items-center rounded-full float-left max-h-20 my-10 text-white cursor-pointer hover:scale-105 hover:duration-150 duration-200${
    isActiveMenu ? "h-16 w-16" : "h-10 w-10"
  }`;

  // // Phone Styles
  const navStyles =
    "absolute inset-x-0 bottom-0 bg-gradient-to-t flex from-gray-700 via-grey-900 to-black  duration-300 rounded-t-2xl  bottom-0 w-full z-50 justify-evenly items-center text-white text-xs";
  const liStyles =
    "block items-center pt-2 hover:cursor-pointer transition duration-200 ease-in-out hover:duration-200  cursor-pointer hover:scale-105 active:scale-105";
  const imgStyles = "h-8 mx-auto  ";

  return (
    <>
      {/* Incio Celular Layout */}
      <nav className=" xs:hidden ">
        <div className="w-full origin-left duration-300 bg-slate-100 h-screen  xs:p-5  overflow-y-scroll ">
          <Outlet />
        </div>
        <ul className={navStyles}>
          <Link to="/dashboard">
            <li className={liStyles}>
              <img src={IconDashboard} className={imgStyles} alt="" />
              <p className="">Stats</p>
            </li>
          </Link>
          <Link to="/suscriptores">
            <li className={liStyles}>
              <img src={iconoVentas} className={imgStyles} alt="" />
              <p className="">Subs</p>
            </li>
          </Link>
          <li>
            <BotonFlotante />
          </li>
          <Link to="/rutinas">
            <li className={liStyles}>
              <img src={IconoGym} className={imgStyles} alt="" />
              <p className="">Rutina</p>
            </li>
          </Link>
          <Link to="/pagos">
            <li className={liStyles}>
              <img src={iconoCash} className={imgStyles} alt="" />
              <p className="">Pagos</p>
            </li>
          </Link>
        </ul>
      </nav>
      {/* Final Celular Layout */}
      {/* Inicio Computador Layout */}
      <div className="hidden  xs:flex h-screen">
        <div
          className={`${
            isActiveMenu
              ? "w-96 bg-gradient-to-r from-gray-900 to-gray-700  p-5 py-3 duration-300"
              : "w-24 bg-gradient-to-r from-gray-900 to-gray-700 p-5 py-3 duration-300 "
          }`}
        >
          <div className="flex justify-end mb-4">
            <div className="flex items-center  justify-center h-10 w-10 rounded-full ">
              <button onClick={handleClickClose} className="hover:scale-105">
                <img
                  src={IconoCerrarBlanco}
                  alt="cerrar"
                  className=" hover:scale-110 hover:duration-300 duration-150  "
                />
              </button>
            </div>
          </div>
          <Link to="/productos">
            <div className="flex flex-col items-center">
              <h2
                className={`text-xl xs:text-2xl uppercase font-black text-center origin-left text-white duration-300 ${
                  !isActiveMenu && `scale-0`
                }`}
              >
                {auth ? `Gimnasio ${auth.nombre}` : Gimnasio}
              </h2>
            </div>
          </Link>

          <nav className=" mt-5 sm:mt-24">
            <Link
              className={`${
                urlActual === "/dashboard" ? `${activeStyles}` : `${hover}`
              } ${notActiveStyles} `}
              to="/dashboard"
            >
              <div className="flex items-center space-x-4 text-base xs:text-lg">
                <img src={IconDashboard} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Dashboard</p>
              </div>
            </Link>
            <Link
              className={`${
                urlActual === "/pagos" ? `${activeStyles}` : `${hover}`
              } ${notActiveStyles} `}
              to="/pagos"
            >
              <div className="flex items-center space-x-4 text-base xs:text-lg">
                <img src={iconoCash} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Pagos</p>
              </div>
            </Link>
            <Link
              className={`${
                urlActual === "/suscriptores" ? `${activeStyles}` : `${hover}`
              } ${notActiveStyles} `}
              to="/suscriptores"
            >
              <div className="flex items-center space-x-4 text-base xs:text-lg">
                <img src={iconoVentas} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Suscriptores</p>
              </div>
            </Link>
            <div className=" ">
              <Link
                className={`${
                  urlActual === "/gastos" ? `${activeStyles}` : `${hover}`
                } ${notActiveStyles} `}
                to="/gastos"
              >
                <div className="flex items-center space-x-4 text-base xs:text-lg">
                  <img src={IconoBills} className="h-6 sm:h-8 " alt="" />
                  <p className={hiddenTitles}>Gastos</p>
                </div>
              </Link>
            </div>
            <div className=" ">
              <Link
                className={`${
                  urlActual === "/rutinas" ? `${activeStyles}` : `${hover}`
                } ${notActiveStyles} `}
                to="/rutinas"
              >
                <div className="flex items-center space-x-4 text-base xs:text-lg">
                  <img src={IconoGym} className="h-6 sm:h-8 " alt="" />
                  <p className={hiddenTitles}>Rutinas</p>
                </div>
              </Link>
            </div>
            <Link
              className={`${
                urlActual === "/configuraciones"
                  ? `${activeStyles}`
                  : `${hover}`
              } ${notActiveStyles} `}
              to="/configuraciones"
            >
              <div className="flex items-center space-x-4 text-base xs:text-lg">
                <img src={iconoConfiguracion} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Configuraciones</p>
              </div>
            </Link>

            <div className="float-end bottom-0 mb-20 fixed ">
              <Link to="/">
                <div className="flex items-center rounded-full float-left max-h-20  text-white   ">
                  {/* {auth.nombre === "tamara" ? (
                    <img
                      src={iconWoman}
                      className={`origin-left duration-300 rounded-xl ${
                        !isActiveMenu ? "h-10" : "h-12"
                      }`}
                      alt="Avatar"
                    />
                  ) : (
                    <img
                      src={iconMan}
                      className={`origin-left duration-300 rounded-xl ${
                        !isActiveMenu ? "h-10" : "h-12"
                      }`}
                      alt="Avatar"
                    />
                  )} */}
                  <p className={hiddenTitles}>
                    <span className="text-white pl-2 capitalize">
                      {/* {auth.nombre} */}
                    </span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="float-end bottom-0 fixed mb-10 flex">
              <Link to="/" className="text-white">
                {/* // onClick={cerrarSesionAuth} */}
                <p className={hiddenTitles}>Cerrar Sesion</p>
              </Link>
            </div>
          </nav>
        </div>
        {/* Fina Computador Layout */}

        <div className="w-full origin-left duration-300 bg-slate-100 h-screen p-5  overflow-y-scroll">
          <BotonFlotante />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
