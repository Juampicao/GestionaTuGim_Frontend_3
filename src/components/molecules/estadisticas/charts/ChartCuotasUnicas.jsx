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

const ChartCuotasUnicas = () => {
  const { getEstadisticasGenerales, dataSuscriptores } = useEstadisticas();

  const [isCargando, setIsCargando] = useState(true);
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartsOptions] = useState({});

  const [info, setInfo] = useState({
    cuotasPorMes: dataSuscriptores.obtenerCantidadCuotasPagasPorMes,
  });

  const { dataMesesCuotas, cuotasPorMes } = info;

  // console.log(cuotasPorMes);

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
    getEstadisticasGenerales();

    const obtenerValores = () => {
      let numeroMes;
      let montoPagos;

      const buscar = () => {
        for (let i = 0; i < cuotasPorMes.length; i++) {
          numeroMes = cuotasPorMes[i]._id.mes;
          montoPagos = cuotasPorMes[i].montoPagoSuscripcion;
          // console.log(numeroMes);
          for (let m = 0; m < arrayMeses.length; m++) {
            if (numeroMes == arrayMeses[m].numero) {
              arrayMeses[m].valor = cuotasPorMes[i].cantidadCuotas;
              // console.log(arrayMeses[m].valor);
            }
          }
        }
      };
      if (cuotasPorMes) {
        buscar();
      }
    };

    obtenerValores();

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
            text: "Cuotas Unicas",
          },
        },
      });
      setChartData({
        labels: labelMeses,
        datasets: [
          {
            label: "Cuotas Unicas",
            backgroundColor: [
              "rgb(97, 185, 103)",
              "rgb(88, 150, 92)",
              "rgb(61, 126, 66 )",
            ],
            borderColor: "rgb(255, 99, 999)",
            data: dataMeses,
          },
        ],
      });
    };

    setChartInfo();
    // console.log(dataMeses);
    setIsCargando(false);
  }, []);

  return (
    <div>
      {isCargando ? (
        <Spiner />
      ) : (
        <>
          {/* <ContenedorGraficos> */}
          <Bar options={chartOptions} data={chartData} />
          {/* </ContenedorGraficos> */}
        </>
      )}
    </div>
  );
};

export default ChartCuotasUnicas;
