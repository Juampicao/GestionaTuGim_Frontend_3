import ListadoSuscriptores from "../molecules/suscriptores/ListadoSuscriptores";
import useGeneral from "../../hooks/useGeneral";
import Spiner from "../atoms/Spiner";
import { useEffect, useState } from "react";
import { inputStyles } from "../../helpers/styles";
import Header from "../atoms/Header";
import BarraSearch from "../atoms/BarraSearch";
import Busqueda from "../atoms/Busqueda";
import ContenedorLayout from "../molecules/ContenedorLayout";
import { useNavigate } from "react-router-dom";

// import "./searchBar.css";
const Suscriptores = () => {
  const {
    isCargando,
    suscriptores,
    getSuscriptores,
    setSuscriptor,
    handleBuscador,
    suscriptor,
  } = useGeneral();

  const navigate = useNavigate();

  useEffect(() => {
    getSuscriptores();
    setSuscriptor("");
  }, []);

  const [suscriptorABuscar, setSuscriptorABuscar] = useState("");

  // Completar el Suscriptor._ID
  // const obtenerSuscriptorPorNombre = (e) => {
  //   console.log(e);
  //   const iterarSuscriptores = () => {
  //     for (let i = 0; i < suscriptores.length; i++) {
  //       // console.log(suscriptores[i].nombre);
  //       if (suscriptores[i].nombre === e) {
  //         setSuscriptorABuscar(suscriptores[i]);
  //       }
  //       console.log(suscriptorABuscar);
  //     }
  //   };
  //   iterarSuscriptores();
  // };

  // ir a Ver Suscriptor.
  if (suscriptorABuscar._id) {
    navigate(`/suscriptores/${suscriptorABuscar._id}`);
  }

  return (
    <>
      <Header title="Suscriptores" />
      <ContenedorLayout>
        {isCargando ? (
          <Spiner />
        ) : (
          <div>
            <div className="flex gap-x-5 mb-3">
              <div className="w-1/2">
                <Busqueda urlDestino={`./suscriptores`} array={suscriptores} />
                <BarraSearch
                  onClick={handleBuscador}
                  placeholder="Buscar un suscriptor ..."
                />
              </div>
            </div>
            <ListadoSuscriptores />
          </div>
        )}
      </ContenedorLayout>
    </>
  );
};

export default Suscriptores;
