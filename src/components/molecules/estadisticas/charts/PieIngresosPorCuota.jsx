import React, { useEffect, useState } from "react";
import useEstadisticas from "../../../../hooks/useEstadisticas";
import { formatearFecha, hoy } from "../../../../helpers/funciones.js";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import { Pie } from "react-chartjs-2";
import Spiner from "../../../atoms/Spiner";

const PieIngresosPorCuota = () => {
  const {
    getEstadisticasGeneralesPersonalizada,
    infoFechaPersonalizada,
    isCargandoFecha,
    setIsCargandoFecha,
  } = useEstadisticas();

  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartsOptions] = useState({});

  const { obtenerUtilidadVentasHoy } = infoFechaPersonalizada;

  let nuevoLabels = [];
  let nuevaData = [];

  useEffect(() => {
    const buscar = () => {
      for (let i = 0; i < obtenerUtilidadVentasHoy.length; i++) {
        nuevoLabels.push(obtenerUtilidadVentasHoy[i]._id);
        nuevaData.push(obtenerUtilidadVentasHoy[i].montoPagoSuscripcion);
      }
    };

    if (obtenerUtilidadVentasHoy) {
      buscar();
    }

    setChartData({
      labels: nuevoLabels,
      datasets: [
        {
          label: "Evolucion",
          backgroundColor: [
            "rgb(0,128,0)",
            "rgb(0, 116,255)",
            "rgb(255, 205, 86)",
            "rgb(00, 00, 00)",
          ],
          data: nuevaData,
        },
      ],
    });
    setChartsOptions({
      type: "doughnut",
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Ingreso Total $",
        },
      },
    });
  }, [getEstadisticasGeneralesPersonalizada]);

  return (
    <div>
      {obtenerUtilidadVentasHoy ? (
        ""
      ) : (
        <h2 className="text-center">No hay Gastos en esta fecha.</h2>
      )}
      {isCargandoFecha ? (
        <Spiner />
      ) : (
        <Pie options={chartOptions} data={chartData} />
      )}
    </div>
  );
};

export default PieIngresosPorCuota;
