import React, { useEffect, useState } from "react";
import useEstadisticas from "../../../hooks/useEstadisticas";
import axios from "axios";
import Spiner from "../../atoms/Spiner";
import ChartMensual from "./charts/ChartMensual";
import CuadroEstadisticas from "../../atoms/CuadroEstadisticas";
import ChartCuotasUnicas from "./charts/ChartCuotasUnicas";
import PieIngresosPorCuota from "./charts/PieIngresosPorCuota";
import PieCuotas from "./charts/PieCuotas";
import ContenedorGraficos from "../ContenedorGraficos";
import SeleccionarFecha from "./SeleccionarFecha";
import useGeneral from "../../../hooks/useGeneral";
import PieCantidadPorTipoSuscripcion from "./charts/PieCantidadPorTipoSuscripcion";
const ListadoEstadisticas = () => {
  const {
    getEstadisticasGenerales,
    isCargando,
    setIsCargando,
    dataSuscriptores,
    getTiposSuscripcion,
    tiposSuscripcion,
  } = useEstadisticas();

  const { isOpenErrorModal } = useGeneral();
  const [info, setInfo] = useState({
    // suscriptoresActivos: dataSuscriptores.suscriptoresActivos,
    // suscriptoresDeudores: dataSuscriptores.suscriptoresDeudores,
    // suscriptoresTotales: dataSuscriptores.suscriptoresTotales,
    // montoTotalPorMes: dataSuscriptores.obtenerMontosTotalesPorMesPorCuota,
  });

  const {
    suscriptoresTotales,
    suscriptoresActivos,
    suscriptoresDeudores,
    montoTotalPorMes,
  } = info;

  let listadoSuscripciones;

  useEffect(() => {
    const getData = async () => {
      await getEstadisticasGenerales();
      await getTiposSuscripcion();
      await CompletarInfoEstadisticas();
      await setIsCargando(false);
    };
    getData();
  }, []);

  const CompletarInfoEstadisticas = async () => {
    setInfo({
      suscriptoresActivos: dataSuscriptores.suscriptoresActivos,
      suscriptoresDeudores: dataSuscriptores.suscriptoresDeudores,
      suscriptoresTotales: dataSuscriptores.suscriptoresTotales,
      montoTotalPorMes: dataSuscriptores.obtenerMontosTotalesPorMesPorCuota,
    });
  };

  // const arrayMeses = [
  //   { mes: "Diciembre", numero: 12, valor: 0 },
  //   { mes: "Noviembre", numero: 11, valor: 0 },
  //   { mes: "Octubre", numero: 10, valor: 0 },
  //   { mes: "Septiembre", numero: 9, valor: 0 },
  //   { mes: "Agosto", numero: 8, valor: 0 },
  //   { mes: "Julio", numero: 7, valor: 0 },
  //   { mes: "Junio", numero: 6, valor: 0 },
  //   { mes: "Mayo", numero: 5, valor: 0 },
  //   { mes: "Abril", numero: 4, valor: 0 },
  //   { mes: "Marzo", numero: 3, valor: 0 },
  //   { mes: "Febrero", numero: 2, valor: 0 },
  //   { mes: "Enero", numero: 1, valor: 0 },
  // ];

  // Querys creadas
  // if (montoTotalPorMes) {
  //   const obtenerIndiceMes = montoTotalPorMes[0]._id.mes;
  //   const obtenerMontosPagoSuscripcion =
  //     montoTotalPorMes[0].montoPagoSuscripcion;
  // }

  // const obtenerValores = () => {
  //   let numeroMes;
  //   let montoPagos;

  //   const buscar = () => {
  //     for (let i = 0; i < montoTotalPorMes.length; i++) {
  //       numeroMes = montoTotalPorMes[i]._id.mes;
  //       montoPagos = montoTotalPorMes[i].montoPagoSuscripcion;
  //       for (let m = 0; m < arrayMeses.length; m++) {
  //         if (numeroMes == arrayMeses[m].numero) {
  //           arrayMeses[m].valor = montoTotalPorMes[i].montoPagoSuscripcion;
  //           // mesFinal = arrayMeses[m].numero;
  //         }
  //       }
  //     }
  //     // console.log(arrayMeses);
  //   };
  //   if (montoTotalPorMes) {
  //     buscar();
  //   }
  // };
  // obtenerValores();

  return (
    <>
      {isCargando ? (
        <Spiner />
      ) : (
        <>
          <main className="grid gap-y-5 sm:gap-y-10 min-h-screen">
            <section className="mt-5 ">
              <div className="grid sm:grid-cols-3 sm:gap-x-10 gap-y-5 ">
                <div className="space-y-3">
                  <h2 className="font-bold text-xl">Suscriptores </h2>
                  <CuadroEstadisticas
                    tittle="Totales"
                    value={suscriptoresTotales}
                  />
                  <CuadroEstadisticas
                    tittle="Activos"
                    value={suscriptoresActivos}
                  />
                  <CuadroEstadisticas
                    tittle="Deudores"
                    value={suscriptoresDeudores}
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-xl">Valor Cuotas</p>

                  {tiposSuscripcion
                    ? tiposSuscripcion.map((e) => {
                        return (
                          <CuadroEstadisticas
                            tittle={e.nombre}
                            value={e.valor}
                          />
                        );
                      })
                    : ""}
                </div>
                <div className="max-w-[250px]">
                  <PieCantidadPorTipoSuscripcion />
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-bold text-xl">Ingresos Por Cuotas </h2>
              <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-10 max-w-xs sm:max-w-7xl">
                <div className="max-w-xs sm:max-w-none">
                  <ChartMensual />
                </div>
                <div className="max-w-xs sm:max-w-none">
                  <ChartCuotasUnicas />
                </div>
              </div>
            </section>
            <section>
              <SeleccionarFecha />
              <div className="grid sm:grid-cols-3 sm:gap-x-10 sm:gap-y-10 ">
                <div className="max-w-[250px] sm:max-w-none  mx-auto sm:mx-0">
                  <PieIngresosPorCuota />
                </div>
                <div className="max-w-[250px] sm:max-w-none  mx-auto sm:mx-0">
                  {/* <div> */}
                  <PieCuotas />
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default ListadoEstadisticas;
