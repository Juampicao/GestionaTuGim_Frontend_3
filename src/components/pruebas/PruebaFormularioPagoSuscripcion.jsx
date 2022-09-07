// import React, { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import useGeneral from "../../hooks/useGeneral";
// import Header from "../atoms/Header";
// import Error from "../atoms/Error";
// import Spiner from "../atoms/Spiner";
// import ContenedorFormularios from "../molecules/ContenedorFormularios";
// import { BotonBlancoRedondeado } from "../../helpers/colores";
// import { BotonPrimario } from "../atoms/Botones";

// import {
//   labelStyles,
//   divStyles,
//   inputStyles,
//   botonDivStyles,
// } from "../../helpers/styles";
// import { formatearFecha } from "../../helpers/funciones";

// const PruebaFormularioPagoSuscripcion = () => {
//   const {
//     isCargando,
//     setIsCargando,
//     suscriptor,
//     suscriptores,
//     getSuscriptores,
//     tiposSuscripcion,
//     getTiposSuscripcion,
//     NuevoPagoSuscripcion,
//   } = useGeneral();

//   useEffect(() => {
//     // Get Data
//     const getData = async () => {
//       // const resetearForm = await resetForm();
//       const getSubs = await getSuscriptores();
//       const getTypeSubscription = await getTiposSuscripcion();
//     };
//   }, []);

//   const [suscriptorAPagar, setSuscriptorAPagar] = useState("");
//   const [nombre, setNombre] = useState("");
//   const [tipoSuscripcion, setTipoSuscripcion] = useState("");
//   const [montoAPagar, setMontoAPagar] = useState(1000);
//   const [metodoPago, setMetodoPago] = useState("Efectivo");
//   const [socio, setSocio] = useState("");
//   const [fechaVencimientoSuscripcion, setFechaVencimientoSuscripcion] =
//     useState("");

//   // Nuevas Fechas
//   const [
//     nuevaFechaVencimientoSuscripcion,
//     setNuevaFechaVencimientoSuscripcion,
//   ] = useState("");
//   const [fechaPagoSuscripcion, setFechaPagoSuscripcion] = useState("");

//   const [error, setError] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const urlActual = location.pathname;

//   useEffect(() => {
//     rellenarCampos();
//   }, []);

//   async function rellenarCampos() {
//     if (suscriptor?._id) {
//       console.log("hay..");
//       return;
//     }

//     let hoy = new Date().toISOString().split("T")[0];
//     setFechaPagoSuscripcion(hoy);
//     setNuevaFechaVencimientoSuscripcion(hoy);
//     await setIsCargando(false);
//   }

//   const obtenerSuscriptorPorNombre = (e) => {
//     const iterarSuscriptores = () => {
//       for (let i = 0; i < suscriptores.length; i++) {
//         console.log(suscriptores[i].nombre);
//         if (suscriptores[i].nombre === e) {
//           setSuscriptorAPagar(suscriptores[i]);
//           setSocio(suscriptores[i].socio);
//           setTipoSuscripcion(suscriptores[i].tipoSuscripcion);
//           setFechaVencimientoSuscripcion(
//             suscriptores[i].fechas.fechaVencimientoSuscripcion
//           );
//         }
//         console.log(suscriptorAPagar);
//       }
//     };
//     iterarSuscriptores();
//   };

//   const validarFormulario = [
//     montoAPagar,
//     metodoPago,
//     fechaPagoSuscripcion,
//     nuevaFechaVencimientoSuscripcion,
//   ].includes("");

//   const resetForm = () => {
//     setSuscriptorAPagar("");
//     setMontoAPagar("");
//     setFechaPagoSuscripcion("");
//     setFechaVencimientoSuscripcion("");
//     setNuevaFechaVencimientoSuscripcion("");
//     setFechaVencimientoSuscripcion("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validarFormulario) {
//       console.log("Completa todos los casilleros por favor.");
//       setError(true);
//       return;
//     }
//     try {
//       // Pasar los datos hacia el provider
//       await NuevoPagoSuscripcion({
//         montoAPagar,
//         metodoPago,
//         fechaPagoSuscripcion,
//         nuevaFechaVencimientoSuscripcion,
//         suscriptorAPagar,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//     resetForm();
//     navigate("/suscriptores");
//   };

//   if (error) {
//     setTimeout(() => {
//       setError(false);
//     }, 5000);
//   }

//   return (
//     <div>
//       {isCargando ? (
//         <Spiner />
//       ) : (
//         <ContenedorFormularios>
//           <div className="bg-white rounded-lg  max-w-xl mx-auto">
//             <form action="submit" onSubmit={handleSubmit}>
//               <div className={divStyles}>
//                 {error && <Error mensaje="Completa todos los campos" />}
//                 <label htmlFor="suscriptor" className={labelStyles}>
//                   Suscriptor
//                 </label>
//                 <input
//                   type="search"
//                   id="suscriptor"
//                   name="suscriptor"
//                   list="listasuscriptores"
//                   autoComplete="off"
//                   className={inputStyles}
//                   placeholder="escriba el nombre.."
//                   onChange={(e) => {
//                     obtenerSuscriptorPorNombre(e.target.value);
//                   }}
//                 />
//                 <datalist id="listasuscriptores">
//                   {suscriptores.map((suscriptor) => (
//                     <option value={suscriptor.nombre} key={suscriptor.socio}>
//                       {suscriptor.nombre}
//                       {suscriptor.socio}
//                     </option>
//                   ))}
//                 </datalist>
//               </div>
//               <div className={divStyles}>
//                 <label htmlFor="montoSuscripcion" className={labelStyles}>
//                   Socio
//                 </label>
//                 <div className="flex gap-x-1">
//                   <input
//                     disabled={true}
//                     id="montoSuscripcion"
//                     name="montoSuscripcion"
//                     type="text"
//                     placeholder="Socio"
//                     className={`${inputStyles} text-slate-400`}
//                     value={socio}
//                     onChange={(e) => setSocio(e.target.value)}
//                   />

//                   <input
//                     disabled={true}
//                     id="montoSuscripcion"
//                     name="montoSuscripcion"
//                     type="text"
//                     placeholder=" Suscripcion"
//                     className={`${inputStyles} text-slate-400`}
//                     value={tipoSuscripcion}
//                     onChange={(e) => setTipoSuscripcion(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className={divStyles}>
//                 <label htmlFor="Vencimiento" className={labelStyles}>
//                   Vencimiento
//                 </label>
//                 <input
//                   id="Vencimiento"
//                   name="Vencimiento"
//                   type="text"
//                   placeholder="Fecha"
//                   className={`${inputStyles} text-slate-400`}
//                   value={formatearFecha(fechaVencimientoSuscripcion)}
//                   onChange={(e) =>
//                     setFechaVencimientoSuscripcion(e.target.value)
//                   }
//                 />
//               </div>
//               <div className={divStyles}>
//                 <label htmlFor="montoSuscripcion" className={labelStyles}>
//                   Monto a pagar
//                 </label>
//                 <input
//                   id="montoSuscripcion"
//                   name="montoSuscripcion"
//                   type="number"
//                   placeholder="Monto a pagar"
//                   className={inputStyles}
//                   value={montoAPagar}
//                   onChange={(e) => setMontoAPagar(e.target.value)}
//                   autoComplete="off"
//                 />
//               </div>

//               <div className={divStyles}>
//                 <label htmlFor="metodoPago" className={labelStyles}>
//                   Metodo de pago
//                 </label>
//                 <select
//                   as="select"
//                   id="metodoPago"
//                   name="metodoPago"
//                   placeholder=""
//                   className={inputStyles}
//                   onChange={(e) => setMetodoPago(e.target.value)}
//                   value={metodoPago}
//                 >
//                   <option value="Tarjeta"> Tarjeta </option>
//                   <option value="Efectivo"> Efectivo </option>
//                   <option value="Efectivo"> Bitcoin </option>
//                 </select>
//               </div>

//               <div className={divStyles}>
//                 <label htmlFor="fechaPagoSuscripcion" className={labelStyles}>
//                   Fecha Pago
//                 </label>
//                 <input
//                   id="fechaPagoSuscripcion"
//                   name="fechaPagoSuscripcion"
//                   type="date"
//                   className={inputStyles}
//                   value={fechaPagoSuscripcion}
//                   onChange={(e) => setFechaPagoSuscripcion(e.target.value)}
//                 />
//               </div>
//               <div className={divStyles}>
//                 <label htmlFor="nuevaFechaVencimiento" className={labelStyles}>
//                   Nueva Fecha Vencimiento
//                 </label>
//                 <input
//                   id="nuevaFechaVencimiento"
//                   name="nuevaFechaVencimiento"
//                   type="date"
//                   placeholder="fecha"
//                   className={inputStyles}
//                   value={nuevaFechaVencimientoSuscripcion}
//                   onChange={(e) =>
//                     setNuevaFechaVencimientoSuscripcion(e.target.value)
//                   }
//                 />
//               </div>
//               <div className={botonDivStyles}>
//                 {suscriptor._id ? (
//                   <BotonPrimario
//                     Color={BotonBlancoRedondeado}
//                     value="Ver"
//                     type="button"
//                     onClick={() => navigate(`/suscriptores/${_id}`)}
//                   />
//                 ) : (
//                   ""
//                 )}
//                 <BotonPrimario
//                   Color={BotonBlancoRedondeado}
//                   value={suscriptor?.nombre ? "Editar Pago" : "Guardar Pago"}
//                   type="submit"
//                 />
//                 <BotonPrimario
//                   Color={BotonBlancoRedondeado}
//                   value="Volver Atras"
//                   type="button"
//                   onClick={() => {
//                     navigate("/suscriptores");
//                   }}
//                 />
//               </div>
//             </form>
//           </div>
//         </ContenedorFormularios>
//       )}
//     </div>
//   );
// };

// export default PruebaFormularioPagoSuscripcion;
