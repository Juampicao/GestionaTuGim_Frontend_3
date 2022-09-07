// import React from "react";
// import { Chart, ArcElement } from "chart.js";
// Chart.register(ArcElement);
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Bar, Pie } from "react-chartjs-2";
// import { useState, useEffect } from "react";
// import useEstadisticas from "../../../../hooks/useEstadisticas";
// import Spiner from "../../../atoms/Spiner";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ChartMensual = () => {
//   const {
//     getEstadisticasGenerales,
//     dataSuscriptores,
//     // isCargando,
//     // setIsCargando,
//   } = useEstadisticas();

//   const [isCargando, setIsCargando] = useState(true);
//   const [chartData, setChartData] = useState({ datasets: [] });
//   const [chartOptions, setChartsOptions] = useState({});
//   const [info, setInfo] = useState({
//     suscriptoresActivos: dataSuscriptores.suscriptoresActivos,
//     suscriptoresDeudores: dataSuscriptores.suscriptoresDeudores,
//     suscriptoresTotales: dataSuscriptores.suscriptoresTotales,
//     montoTotalPorMes: dataSuscriptores.obtenerMontosTotalesPorMesPorCuota,
//   });

//   const {
//     suscriptoresTotales,
//     suscriptoresActivos,
//     suscriptoresDeudores,
//     montoTotalPorMes,
//   } = info;

//   const arrayMeses = [
//     { mes: "Ene", numero: 1, valor: 0 },
//     { mes: "Feb", numero: 2, valor: 0 },
//     { mes: "Mar", numero: 3, valor: 0 },
//     { mes: "Abr", numero: 4, valor: 0 },
//     { mes: "May", numero: 5, valor: 0 },
//     { mes: "Jun", numero: 6, valor: 0 },
//     { mes: "Jul", numero: 7, valor: 0 },
//     { mes: "Ago", numero: 8, valor: 0 },
//     { mes: "Sep", numero: 9, valor: 0 },
//     { mes: "Oct", numero: 10, valor: 0 },
//     { mes: "Nov", numero: 11, valor: 0 },
//     { mes: "Dic", numero: 12, valor: 0 },
//   ];

//   let labelMeses = [];
//   for (let i = 0; i < arrayMeses.length; i++) {
//     labelMeses.push(arrayMeses[i].mes);
//     // console.log(labelMeses);
//   }

//   let dataMeses = [];
//   for (let i = 0; i < arrayMeses.length; i++) {
//     dataMeses.push(arrayMeses[i].valor);
//     // console.log(dataMeses);
//   }

//   // Function Change Values
//   const obtenerValores = async () => {
//     let numeroMes;
//     let montoPagos;

//     const buscar = () => {
//       for (let i = 0; i < montoTotalPorMes.length; i++) {
//         numeroMes = montoTotalPorMes[i]._id.mes;
//         montoPagos = montoTotalPorMes[i].montoPagoSuscripcion;
//         for (let m = 0; m < arrayMeses.length; m++) {
//           if (numeroMes == arrayMeses[m].numero) {
//             arrayMeses[m].valor = montoTotalPorMes[i].montoPagoSuscripcion;
//             // mesFinal = arrayMeses[m].numero;
//           }
//         }
//       }
//       console.log(arrayMeses);
//     };
//     if (montoTotalPorMes) {
//       buscar();
//     }
//   };

//   // obtenerValores();
//   // End Function Change Values

//   // const ChartOptions = async () => {
//   //   setChartsOptions({
//   //     responsive: true,
//   //     plugins: {
//   //       datalabels: {
//   //         formatter: function (value, context) {
//   //           // console.log(context.chart.data);
//   //           return context.chart.data.label[context.dataIndex];
//   //         },
//   //       },
//   //       legend: {
//   //         position: "top",
//   //       },
//   //       title: {
//   //         display: true,
//   //         text: "Estadisticas",
//   //       },
//   //     },
//   //   });
//   // };

//   // const ChartData = async () => {
//   //   setChartData({
//   //     labels: labelMeses,
//   //     datasets: [
//   //       {
//   //         label: "Evolucion Mensual",
//   //         backgroundColor: [
//   //           "rgb(255, 99, 132)",
//   //           "rgb(54, 162, 235)",
//   //           "rgb(255, 205, 86)",
//   //         ],
//   //         borderColor: "rgb(255, 99, 999)",
//   //         data: dataMeses,
//   //       },
//   //     ],
//   //   });
//   // };
//   const setChartInfo = async () => {
//     // return new Promise((resolve, reject) => {
//     //   resolve()
//     // })
//     setChartsOptions({
//       responsive: true,
//       plugins: {
//         datalabels: {
//           formatter: function (value, context) {
//             // console.log(context.chart.data);
//             return context.chart.data.label[context.dataIndex];
//           },
//         },
//         legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "Estadisticas",
//         },
//       },
//     });
//     setTimeout(() => {
//       setChartData({
//         labels: labelMeses,
//         datasets: [
//           {
//             label: "Evolucion Mensual",
//             backgroundColor: [
//               "rgb(255, 99, 132)",
//               "rgb(54, 162, 235)",
//               "rgb(255, 205, 86)",
//             ],
//             borderColor: "rgb(255, 99, 999)",
//             data: dataMeses,
//           },
//         ],
//       });
//       console.log(chartData.datasets[0].data);
//     }, 1000);
//   };

//   // setChartInfo();
//   // setIsCargando(false);

//   const changeChargandoState = async (state) => {
//     setIsCargando(state);
//     console.log("Cambiando estado a: " + isCargando);
//   };

//   getGrafico();
//   // useEffect(() => {
//   //   const getData = async () => {
//   //     const a = await getEstadisticasGenerales();
//   //     const b = await obtenerValores();
//   //     const c = await setChartInfo();
//   //     // const c = await ChartOptions();
//   //     // const d = await ChartData();
//   //     setTimeout(() => {
//   //       const e = changeChargandoState(false);
//   //     }, 1000);
//   //   };
//   //   getData();
//   // }, []);

//   return (
//     <div>
//       {isCargando ? (
//         <Spiner />
//       ) : (
//         <>
//           <Bar options={chartOptions} data={chartData} />
//         </>
//       )}
//     </div>
//   );
// };

// export default ChartMensual;

import React from "react";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import useEstadisticas from "../../../../hooks/useEstadisticas";
import Spiner from "../../../atoms/Spiner";
import axios from "axios";
import ContenedorGraficos from "../../ContenedorGraficos";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartMensual = () => {
  const {
    getEstadisticasGenerales,
    dataSuscriptores,
    // tiposSuscripcion,
    // setTiposSuscripcion,
    // getTiposSuscripcion,
  } = useEstadisticas();

  const [isCargando, setIsCargando] = useState(true);
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartsOptions] = useState({});

  const [chartDataCuotas, setChartDataCuotas] = useState({ datasets: [] });
  const [chartOptionsCuotas, setChartsOptionsCuotas] = useState({});

  const [info, setInfo] = useState({
    suscriptoresActivos: dataSuscriptores.suscriptoresActivos,
    suscriptoresDeudores: dataSuscriptores.suscriptoresDeudores,
    suscriptoresTotales: dataSuscriptores.suscriptoresTotales,
    montoTotalPorMes: dataSuscriptores.obtenerMontosTotalesPorMesPorCuota,
    // dataMesesCuotas: dataSuscriptores.obtenerCantidadCuotasPagasPorMes,
    dataMesesCuotas: [0, 0, 1],
  });

  const {
    suscriptoresTotales,
    suscriptoresActivos,
    suscriptoresDeudores,
    montoTotalPorMes,
  } = info;

  const arrayMeses = [
    { mes: "Ene", numero: 1, valor: 0 },
    { mes: "Feb", numero: 2, valor: 0 },
    { mes: "Mar", numero: 3, valor: 0 },
    { mes: "Abr", numero: 4, valor: 0 },
    { mes: "May", numero: 5, valor: 0 },
    { mes: "Jun", numero: 6, valor: 0 },
    { mes: "Jul", numero: 7, valor: 0 },
    { mes: "Ago", numero: 8, valor: 0 },
    { mes: "Sep", numero: 9, valor: 0 },
    { mes: "Oct", numero: 10, valor: 0 },
    { mes: "Nov", numero: 11, valor: 0 },
    { mes: "Dic", numero: 12, valor: 0 },
  ];

  useEffect(() => {
    // async function getData() {
    // //   const a = await getEstadisticasGenerales();
    // //   const b = await obtenerValores();
    // //   const c = await setChartInfo();
    // //   setTimeout(() => {
    // //     setIsCargando(false);
    // //   }, 1000);
    //   getData();
    // }

    getEstadisticasGenerales();
    let labelMeses = [];
    for (let i = 0; i < arrayMeses.length; i++) {
      labelMeses.push(arrayMeses[i].mes);
      // console.log(labelMeses);
    }

    let dataMeses = [];
    for (let i = 0; i < arrayMeses.length; i++) {
      dataMeses.push(arrayMeses[i].valor);
      // console.log(dataMeses);
    }

    // Function Change Values
    const obtenerValores = () => {
      let numeroMes;
      let montoPagos;

      console.log(montoTotalPorMes);
      const buscar = () => {
        for (let i = 0; i < montoTotalPorMes.length; i++) {
          numeroMes = montoTotalPorMes[i]._id.mes;
          montoPagos = montoTotalPorMes[i].montoPagoSuscripcion;
          for (let m = 0; m < arrayMeses.length; m++) {
            if (numeroMes == arrayMeses[m].numero) {
              arrayMeses[m].valor = montoTotalPorMes[i].montoPagoSuscripcion;
              // console.log(arrayMeses[m].valor);
            }
          }
        }
        console.log(arrayMeses);
      };
      if (montoTotalPorMes) {
        buscar();
      }
    };

    obtenerValores();
    // End Function Change Values

    const setChartInfo = () => {
      setChartsOptions({
        responsive: true,
        plugins: {
          datalabels: {
            formatter: function (value, context) {
              // console.log(context.chart.data);
              return context.chart.data.label[context.dataIndex];
            },
          },
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Ingresos Por Cuotas",
          },
        },
      });
      setChartData({
        labels: labelMeses,
        datasets: [
          {
            label: "Evolucion Mensual",
            backgroundColor: [
              "rgb(236, 23, 23)",
              "rgb(149, 61, 61 )",
              "rgb(255, 205, 86)",
            ],
            borderColor: "rgb(255, 99, 999)",
            data: dataMeses,
          },
        ],
      });
    };

    const setChartInfoCuotasUnicas = () => {
      setChartsOptionsCuotas({
        responsive: true,
        plugins: {
          datalabels: {
            formatter: function (value, context) {
              // console.log(context.chart.data);
              return context.chart.data.label[context.dataIndex];
            },
          },
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "",
          },
        },
      });
      setChartData({
        labels: labelMeses,
        datasets: [
          {
            label: "$ Ingresos ",
            backgroundColor: [
              "rgb(236, 23, 23)",
              "rgb(149, 61, 61 )",
              "rgb(255, 151, 151)",
            ],
            borderColor: "rgb(255, 99, 999)",
            data: dataMeses,
          },
        ],
      });
    };

    setChartInfo();
    setChartInfoCuotasUnicas();

    setIsCargando(false);
  }, []);

  return (
    <div>
      {isCargando ? (
        <Spiner />
      ) : (
        <>
          <Bar options={chartOptions} data={chartData} />
        </>
      )}
    </div>
  );
};

export default ChartMensual;
