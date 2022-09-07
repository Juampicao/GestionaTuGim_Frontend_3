// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { BotonBlancoRedondeado } from "../../../helpers/colores";
// import {
//   botonDivStyles,
//   divStyles,
//   inputStyles,
// } from "../../../helpers/styles";
// import useEstadisticas from "../../../hooks/useEstadisticas";
// import useGeneral from "../../../hooks/useGeneral";
// import { BotonPrimario } from "../../atoms/Botones";
// import CuadroEstadisticas from "../../atoms/CuadroEstadisticas";
// import Error from "../../atoms/Error";
// import Spiner from "../../atoms/Spiner";
// const FormularioSuscripciones = () => {
//   const { getTiposSuscripcion, tiposSuscripcion } = useEstadisticas();

//   const [data, setData] = useState("");

//   const useField = ({ type = "text" }) => {
//     const [value, setValue] = useState("");

//     const onChange = (event) => {
//       setValue(event.target.value);
//     };
//     return {
//       type,
//       value,
//       onChange,
//     };
//   };

//   const userName = useField({ type: "text" });
//   const celular = useField({ type: "number" });
//   const domicilio = useField({ type: "text" });

//   const objeto = {
//     userName,
//     celular,
//     domicilio,
//   };

//   const [error, setError] = useState(false);
//   const [isCargando, setIsCargando] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getData = async () => {
//       const a = await getTiposSuscripcion();
//       console.log(tiposSuscripcion);
//       setIsCargando(false);
//     };
//     getData();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(objeto);
//   };

//   return (
//     <div className="bg-white rounded-lg  max-w-xl mx-auto">
//       {isCargando ? (
//         <Spiner />
//       ) : (
//         <form action="submit" onSubmit={handleSubmit}>
//           <div className={divStyles}>
//             {error && <Error mensaje="Completa todos los campos" />}

//             <form action="submit" className="grid grid-rows-3 grid-cols-3">
//               <div>
//                 <label> Username </label>
//                 <input
//                   {...userName}
//                   name={userName.value}
//                   placeholder="Escribe.."
//                 />
//               </div>
//               <div>
//                 <label> Celular </label>
//                 <input
//                   {...celular}
//                   name={celular.value}
//                   placeholder="Escribe.."
//                 />
//               </div>
//               <div>
//                 <label> Domicilio </label>
//                 <input
//                   {...domicilio}
//                   name={domicilio.value}
//                   placeholder={`Escribe ..`}
//                 />
//               </div>
//             </form>

//             {tiposSuscripcion
//               ? tiposSuscripcion.map((e) => {
//                   return (
//                     <div className="my-5">
//                       <form type="submit">
//                         Suscripcion
//                         <div className="flex items-center gap-x-5">
//                           <label> Nombre</label>

//                           <input
//                             value={e.nombre}
//                             className={`${inputStyles} text-slate-400`}
//                           />
//                         </div>
//                         <div className="flex items-center gap-x-3">
//                           <label> Valor</label>

//                           <input
//                             type="number"
//                             value={data}
//                             className={`${inputStyles} text-slate-400`}
//                             onChange={(e) => setData(e.target.value)}
//                           />
//                         </div>
//                       </form>
//                     </div>
//                   );
//                 })
//               : "no hay"}
//           </div>
//           <div className={botonDivStyles}>
//             <BotonPrimario
//               Color={BotonBlancoRedondeado}
//               value={tiposSuscripcion ? "Editar Pago" : "Guardar Pago"}
//               type="submit"
//             />
//             <BotonPrimario
//               Color={BotonBlancoRedondeado}
//               value="Volver Atras"
//               type="button"
//               onClick={() => {
//                 navigate("/configuraciones");
//               }}
//             />
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default FormularioSuscripciones;
