import React, { useEffect, useState } from "react";
import useEstadisticas from "../../../../hooks/useEstadisticas";
import Spiner from "../../../atoms/Spiner";
import { Pie } from "react-chartjs-2";

const PieCantidadPorTipoSuscripcion = () => {
  const { getEstadisticasGenerales, dataSuscriptores } = useEstadisticas();

  const [isCargando, setIsCargando] = useState(true);
  const { obtenerCantidadActivosTipoSuscripcion: array } = dataSuscriptores;

  let nuevoLabels = [];
  let nuevaData = [];

  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartsOptions] = useState({});

  useEffect(() => {
    console.log(dataSuscriptores);
    const buscar = () => {
      for (let i = 0; i < array.length; i++) {
        nuevoLabels.push(array[i]._id.tipoSuscripcion);
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
            "rgb(212,175,55)",
            "rgb(134,134,134)",
            "rgb(255, 205, 86)",
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
          text: "Activos por Suscripcion",
        },
      },
    });
    setIsCargando(false);
    console.log(array);
  }, [getEstadisticasGenerales]);

  return (
    <div>
      {isCargando ? (
        <Spiner />
      ) : (
        <Pie options={chartOptions} data={chartData} />
      )}
    </div>
  );
};

export default PieCantidadPorTipoSuscripcion;
