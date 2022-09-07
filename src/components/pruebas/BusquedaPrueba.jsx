// import { Fragment, useEffect, useState } from "react";
// import { Combobox, Dialog, Transition } from "@headlessui/react";

// import { useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import useGeneral from "../../hooks/useGeneral";
// import { formatearFecha } from "../../helpers/funciones";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const BusquedaPrueba = ({ urlDestino }) => {
//   const {
//     suscriptor,
//     suscriptores,
//     buscador,
//     handleBuscador,
//     getSuscriptores,
//     setSuscriptor,
//   } = useGeneral();
//   const [busqueda, setBusqueda] = useState("");
//   const [suscriptorABuscar, setSuscriptorABuscar] = useState("");
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     getSuscriptores();
//     setSuscriptor("");
//   }, []);

//   const urlActual = location.pathname;
//   const navigate = useNavigate();

//   // Styles
//   const deudorStyles = "bg-red-600  text-white rounded-xl py-0.5 px-2";
//   const activoStyles = "bg-green-500  text-white  rounded-xl py-0.5 px-2";

//   const estadoSuscripcionStyles = {
//     Activo: activoStyles,
//     Deudor: deudorStyles,
//   };

//   const suscriptoresFiltrados =
//     busqueda === ""
//       ? []
//       : suscriptores.filter(
//           (suscriptor) =>
//             suscriptor.nombre.toLowerCase().includes(busqueda.toLowerCase())
//           // suscriptor.toLowerCase().includes(busqueda.toLowerCase())
//         );

//   // Completar el Suscriptor._ID
//   const obtenerSuscriptorPorNombre = (e) => {
//     console.log(e);
//     const iterarSuscriptores = () => {
//       for (let i = 0; i < suscriptores.length; i++) {
//         console.log(suscriptores[i].nombre);
//         if (suscriptores[i].nombre === busqueda) {
//           setSuscriptorABuscar(suscriptores[i]._id);
//         }
//         console.log(suscriptorABuscar);
//       }
//     };
//     iterarSuscriptores();
//   };

//   // if (suscriptorABuscar.length > 1) {
//   //   navigate(`/pagos`);
//   // }

//   // ir a Ver Suscriptor.
//   // if (suscriptorABuscar._id) {
//   //   navigate(`/suscriptores/${suscriptorABuscar._id}`);
//   // }

//   // useEffect(() => {
//   //   console.log(busqueda);
//   // }, [busqueda]);

//   return (
//     <Transition.Root
//       show={buscador}
//       as={Fragment}
//       afterLeave={() => setBusqueda("")}
//     >
//       <Dialog
//         as="div"
//         className="fixed inset-0 z-10 overflow-y-auto mt-20 p-4 sm:p-20 md:p-20"
//         onClose={handleBuscador}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
//         </Transition.Child>

//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Combobox
//             as="div"
//             className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
//             value={busqueda}
//             onChange={setBusqueda}
//             // onChange={() => navigate(`${urlDestino}`)}
//             // onChange={
//             //   suscriptor._id
//             //     ? () => navigate(`/suscriptores/${suscriptor._id}`)
//             //     : ""
//             // }
//           >
//             <div className="relative">
//               <Combobox.Input
//                 className="h-12 w-full border-0 bg-transparent pl-4 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
//                 placeholder="Buscar desde busqueda..."
//                 // onChange={((e) => setQuery(e.target.value), console.log(query))}
//                 // displayValue={(suscriptor) => suscriptor.nombre}
//                 onChange={(e) => {
//                   // obtenerSuscriptorPorNombre(e.target.value);
//                   // ,
//                   setBusqueda(e.target.value);
//                 }}
//               />
//             </div>

//             <Combobox.Options
//               static
//               className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
//             >
//               {suscriptores
//                 ? suscriptoresFiltrados.map((suscriptor) => (
//                     <Combobox.Option
//                       key={suscriptor._id}
//                       // value={suscriptor.nombre}
//                       value={suscriptor}
//                       className={({ active }) =>
//                         classNames(
//                           "cursor-default select-none px-4 py-2",
//                           active && "bg-sky-600 text-white"
//                         )
//                       }
//                     >
//                       <div className="flex justify-between">
//                         {suscriptor.nombre}
//                         <span>Socio: {suscriptor.socio}</span>
//                         <span>
//                           Fecha:{" "}
//                           {suscriptor.fechas.fechaVencimientoSuscripcion.slice(
//                             0,
//                             10
//                           )}
//                         </span>

//                         <span
//                           className={estadoSuscripcionStyles[suscriptor.estado]}
//                         >
//                           {suscriptor.estado}
//                         </span>
//                       </div>
//                     </Combobox.Option>
//                   ))
//                 : ""}
//             </Combobox.Options>
//           </Combobox>
//         </Transition.Child>
//       </Dialog>
//     </Transition.Root>
//   );
// };

// export default BusquedaPrueba;
