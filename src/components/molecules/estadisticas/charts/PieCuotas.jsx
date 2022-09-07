import React, { useEffect, useState } from "react";
import useEstadisticas from "../../../../hooks/useEstadisticas";
import Spiner from "../../../atoms/Spiner";
import { Pie } from "react-chartjs-2";

const PieCuotas = () => {
  const {
    getEstadisticasGeneralesPersonalizada,
    infoFechaPersonalizada,
    isCargandoFecha,
  } = useEstadisticas();

  let nuevoLabels = [];
  let nuevaData = [];

  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartsOptions] = useState({});

  const { obtenerUtilidadVentasHoy: array } = infoFechaPersonalizada;

  useEffect(() => {
    const buscar = () => {
      for (let i = 0; i < array.length; i++) {
        nuevoLabels.push(array[i]._id);
        nuevaData.push(array[i].cantidadCuotas);

        // console.log(nuevaData);
      }
    };

    if (array) {
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
          text: "Cantidad de Cuotas Pagas",
        },
      },
    });
  }, [getEstadisticasGeneralesPersonalizada]);

  return (
    <div>
      {isCargandoFecha ? (
        <Spiner />
      ) : (
        <Pie options={chartOptions} data={chartData} />
      )}
    </div>
  );
};

export default PieCuotas;
