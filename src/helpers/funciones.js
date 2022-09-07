export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  let fechaNuevaFormateada = fechaNueva.toISOString().split("T")[0];
  let unDiaMas = new Date();
  unDiaMas.setDate(fechaNueva.getDate() + 1);
  const opciones = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  // return fechaNueva.toLocaleDateString("es-ES", opciones);
  // return fechaNueva.toISOStringtoISOString().split("T")[0];
  // return unDiaMas.toLocaleDateString("es-ES", opciones);
  return fechaNuevaFormateada;
};

// export const refrescarArray = array.filter((elemento) => elemento._id !== _id);

export function refrescarArray(array) {
  array.filter((elemento) => elemento._id !== _id);
}

let date = new Date();
export let FechaHoyArgentina = date
  .toLocaleString("en-US", "America/Argentina/Buenos_Aires")
  .slice(0, 9);

export const formatearFechaInput = (fecha) => {
  new Date(fecha).toISOString().split("T")[0];
};

export let hoy = new Date().toISOString().split("T")[0];

export let numeros = () => {
  for (let i = 0; i <= 15; i++) {
    let result = i;
    console.log(result);
  }
};
export default {
  hoy,
  refrescarArray,
};
// const ordenarAZ = (array) => {
//   let result = array.sort(function (a, b) {
//     return a - b;
//   });

//   console.log(result);
// };

// // ordenarAZ([4, 2, 5, 1, 7]);
// ordenarAZ(suscriptores);

// let fechaPago = new Date();
// let fecha2 = new Date(fechaPago);

// fecha2.setDate(fecha2.getDate() + 30);
// console.log(fecha2);

// const setNuevaFechaVencimiento = () => {
//   var date = new Date();
//   var year = date.getFullYear();
//   var month = String(date.getMonth() + 1).padStart(2, "0");
//   var todayDate = String(date.getDate()).padStart(2, "0");
//   var datePattern = year + "-" + month + "-" + todayDate;
//   document.getElementById("date-picker").value = datePattern;
// };

// let fechaVencimientoSuscripcion = suscriptor.fechas.fechaPagoSuscripcion;
// console.log("La vieja fecha de vencimiento es" + fechaVencimientoSuscripcion);

// let nuevaFechaVencimientoSuscripcion = new Date();
// fechaVencimientoSuscripcion.setDate(
//   nuevaFechaVencimientoSuscripcion.getDate() + 30
// );
