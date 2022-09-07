import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";

import { useNavigate } from "react-router-dom";
import useGeneral from "../../hooks/useGeneral";
import { formatearFecha } from "../../helpers/funciones";

import IconoSearch from "../../img/iconoSearchGris.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Busqueda = ({ urlDestino, array }) => {
  const { suscriptor, buscador, handleBuscador } = useGeneral();

  const [query, setQuery] = useState("");

  const urlActual = location.pathname;
  const navigate = useNavigate();

  // Styles
  const deudorStyles = "bg-red-600  text-white rounded-xl py-0.5 px-2";
  const activoStyles = "bg-green-500  text-white  rounded-xl py-0.5 px-2";

  const estadoSuscripcionStyles = {
    Activo: activoStyles,
    Deudor: deudorStyles,
  };

  const FilterArray = query
    ? array.filter((e) => e.nombre.toLowerCase().includes(query.toLowerCase()))
    : [];

  // const FilterArray = query ? array.filter((e) => e) : [];
  return (
    <Transition.Root
      show={buscador}
      as={Fragment}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto mt-20 p-4 sm:p-20 md:p-20"
        onClose={handleBuscador}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
            onChange={(e) => {
              navigate(`/${urlDestino}/${e._id}`), handleBuscador();
            }}
          >
            <div className="items-center flex">
              <img
                src={IconoSearch}
                className="absolute h-10 pl-2 "
                alt="search Icon"
              />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pl-14 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Busca..."
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <Combobox.Options
              static
              className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
            >
              {FilterArray
                ? FilterArray.map((e) => (
                    <Combobox.Option
                      key={e._id}
                      value={e}
                      className={({ active }) =>
                        classNames(
                          "cursor-default select-none px-4 py-2",
                          active && "bg-sky-600 text-white"
                        )
                      }
                    >
                      <div className="flex justify-between">
                        {e.nombre}
                        <span>Socio: {e.socio}</span>
                        <span>
                          Fecha:{" "}
                          {e.fechas.fechaVencimientoSuscripcion.slice(0, 10)}
                        </span>

                        <span className={estadoSuscripcionStyles[e.estado]}>
                          {e.estado}
                        </span>
                      </div>
                    </Combobox.Option>
                  ))
                : ""}
            </Combobox.Options>
            {query && FilterArray.length === 0 && (
              <p className="p-4 text-sm text-gray-500"> No Results Found</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Busqueda;
