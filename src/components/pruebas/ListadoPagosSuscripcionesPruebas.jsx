// import React, { useEffect, useState } from "react";
// import { tableStyles } from "../../../helpers/styles";
// import useGeneral from "../../../hooks/useGeneral";
// import Spiner from "../../atoms/Spiner";
// import PagoSuscripciones from "../suscriptores/PagoSuscripciones";
// const ListadoPagosSuscripciones = () => {
//   const {
//     isCargando,
//     setIsCargando,
//     GetPagosSuscripcionAll,
//     todosPagosSuscripcion,
//   } = useGeneral();

//   // const [pagos, setPagos] = useState([todosPagosSuscripcion]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(10);

//   const indexOfLastPost = currentPage * postPerPage;
//   const indexOfFirstPost = indexOfLastPost - postPerPage;
//   const currentPost = pagos.slice(indexOfFirstPost, indexOfLastPost);

//   // console.log(currentPost);
//   useEffect(() => {
//     GetPagosSuscripcionAll();
//     setTimeout(() => {
//       // console.log(todosPagosSuscripcion);
//     }, 1000);
//   }, []);

//   function limitSize(size = 2, page = 1) {
//     GetPagosSuscripcionAll(size, page);
//   }

//   function selectPage(size = 10, page = 1) {
//     GetPagosSuscripcionAll(size, page);
//   }

//   // styles
//   const propiedadTituloStyles = "font-bold";
//   const liStyles = "";
//   const titleStlyes = "font-bold text-xl uppercase py-2";
//   return (
//     <div>
//       <h3 className={titleStlyes}>Pagos Suscripciones</h3>

//       {isCargando ? (
//         <Spiner />
//       ) : (
//         <>
//           <div className="flex justify-evenly">
//             {/* Pagina */}
//             <div className="flex justify-center gap-x-3">
//               <div className="flex justify-center gap-x-3">
//                 <button
//                   onClick={() => {
//                     selectPage(2, currentPage);
//                   }}
//                 >
//                   Inicio
//                 </button>
//                 ||
//                 <button
//                   onClick={() => {
//                     selectPage(2, currentPage + 1);
//                   }}
//                 >
//                   Adelante
//                 </button>
//               </div>
//             </div>
//             {/* Resultados */}
//             <div className="flex justify-end gap-x-3">
//               <h2>Limitar Resultados</h2>
//               <div className="flex justify-end gap-x-3">
//                 <button
//                   onClick={() => {
//                     selectPage(10, 1);
//                   }}
//                 >
//                   10
//                 </button>
//                 <button
//                   onClick={() => {
//                     selectPage(20, 2);
//                   }}
//                 >
//                   20
//                 </button>
//                 <button
//                   onClick={() => {
//                     selectPage(30, 3);
//                   }}
//                 >
//                   30
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center max-w-7xl">
//             <table className="w-full">
//               <thead className=" bg-white border-b-2 border-gray-200">
//                 <tr className="  bg-white">
//                   <th className="p-2">Fecha</th>
//                   <th className="p-2">Monto</th>
//                   <th className="p-2">Persona</th>

//                   <th className="p-2">Funciones</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 bg-white">
//                 {todosPagosSuscripcion.length >= 1 ? (
//                   todosPagosSuscripcion.map((pago) => (
//                     <PagoSuscripciones key={pago._id} pago={pago} />
//                   ))
//                 ) : (
//                   <tr className="py-5 text-center bg-white">
//                     <td className=""> No hay ningun pago </td>
//                     <td className=""> </td>
//                     <td className=""> </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* <button
//               onClick={() => {
//                 selectPage(2, currentPage - 1);
//               }}
//             >
//               Atras
//             </button> */}
//         </>
//       )}
//     </div>
//   );
// };

// export default ListadoPagosSuscripcionesPruebas;
