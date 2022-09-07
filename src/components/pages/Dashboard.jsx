import React from "react";
import Header from "../atoms/Header";
import ListadoEstadisticas from "../molecules/estadisticas/ListadoEstadisticas";
import ContenedorLayout from "../molecules/ContenedorLayout";

const Dashboard = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <ContenedorLayout>
        <ListadoEstadisticas />
      </ContenedorLayout>
    </div>
  );
};

export default Dashboard;
