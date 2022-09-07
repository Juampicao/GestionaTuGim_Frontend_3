import React, { useContext } from "react";

import useGeneral from "../../hooks/useGeneral";

import iconoCerrar from "../../img/iconoCerrar.png";
import iconoDelete from "../../img/iconoDelete.png";

export const ModalGuardado = ({
  titleModal,
  subtitleModal,
  buttonLabel,
  handleClick,
  handleClickClose,
}) => {
  const { isOpenSaveModal, setIsOpenSaveModal } = useGeneral();

  if (isOpenSaveModal) {
    setTimeout(() => {
      setIsOpenSaveModal(!isOpenSaveModal);
    }, 3000);
  }

  handleClickClose = () => {
    document.getElementById("ModalGuardado").style.display = "none";
  };
  return (
    <>
      {/* z-50 relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white */}
      <div
        id="ModalGuardado"
        data-aos="fade-right"
        className="top-10 right-20 fixed border shadow-lg rounded-md bg-white p-5 mx-auto z-50"
      >
        <button onClick={handleClickClose}>
          <img
            src={iconoCerrar}
            alt="cerrar"
            className=" hover:scale-110 hover:duration-200"
          />
        </button>
        <div className="mb-1 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900">
            {titleModal}
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">{subtitleModal}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleClick}
              id="ok-btn"
              className="uppercase px-4 py-2 bg-slate-400 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-slate-500 hover:scale-105 hover:duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 active:hover:bg-slate-700 active:text-white"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const ModalEliminado = ({
  titleModal,
  subtitleModal,
  buttonLabel,
  handleClick,
  handleClickClose,
}) => {
  const { isOpenDeleteModal, setIsOpenDeleteModal } = useGeneral();

  if (isOpenDeleteModal) {
    setTimeout(() => {
      setIsOpenDeleteModal(!isOpenDeleteModal);
    }, 3000);
  }

  // styles

  handleClickClose = () => {
    document.getElementById("ModalEliminado").style.display = "none";
  };

  return (
    <>
      {/* z-50 relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white */}
      <div
        id="ModalEliminado"
        data-aos="fade-right"
        className="top-10 right-20 fixed border shadow-lg rounded-md bg-white p-5 mx-auto z-50"
      >
        <button onClick={handleClickClose}>
          <img
            src={iconoCerrar}
            alt="cerrar"
            className=" hover:scale-110 hover:duration-200 "
          />
        </button>
        <div className="mb-1 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-slate-200">
            <svg
              className="h-6 w-6 text-green-600 mx-auto items-center absolute"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <img
              src={iconoDelete}
              alt="cerrar"
              className=" hover:scale-110 hover:duration-200 h-8 "
            />
          </div>

          <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900">
            {titleModal}
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">{subtitleModal}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleClick}
              id="ok-btn"
              className="uppercase px-4 py-2 bg-slate-400 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-slate-500 hover:scale-105 hover:duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 active:hover:bg-slate-700 active:text-white"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const ModalError = ({
  titleModal,
  subtitleModal,
  buttonLabel,
  handleClick,
  handleClickClose,
}) => {
  const { isOpenErrorModal, setIsOpenErrorModal } = useGeneral();

  if (isOpenErrorModal) {
    setTimeout(() => {
      setIsOpenErrorModal(!isOpenErrorModal);
    }, 3000);
  }

  handleClickClose = () => {
    document.getElementById("ModalError").style.display = "none";
  };
  return (
    <>
      {/* z-50 relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white */}
      <div
        id="ModalError"
        data-aos="fade-right"
        className="top-10 right-20 fixed border shadow-lg rounded-md bg-white p-5 mx-auto "
      >
        <button onClick={handleClickClose}>
          <img
            src={iconoCerrar}
            alt="cerrar"
            className=" hover:scale-110 hover:duration-200"
          />
        </button>
        <div className="mb-1 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-300">
            <svg
              className="h-6 w-6 text-green-600 mx-auto items-center absolute"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <img
              src={iconoCerrar}
              alt="cerrar"
              className=" hover:scale-110 hover:duration-200 h-8 "
            />
          </div>

          <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900">
            {titleModal}
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">{subtitleModal}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleClick}
              id="ok-btn"
              className="uppercase px-4 py-2 bg-slate-400 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-slate-500 hover:scale-105 hover:duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 active:hover:bg-slate-700 active:text-white"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default { ModalGuardado, ModalEliminado, ModalError };
