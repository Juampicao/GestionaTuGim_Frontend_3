import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { AuthProvider } from "./contexts/AuthProvider";
import { EstadisticasProvider } from "./contexts/EstadisticasProvider";
import { GeneralProvider } from "./contexts/GeneralProvider";

import Layout from "./components/pages/Layout";
import Suscriptores from "./components/pages/Suscriptores";
import Configuraciones from "./components/pages/Configuraciones";
import Dashboard from "./components/pages/Dashboard";
import Gastos from "./components/pages/Gastos";
import Inventario from "./components/pages/Pagos";

import VerSuscriptor from "./components/molecules/suscriptores/VerSuscriptor";
import EditarSuscriptor from "./components/molecules/suscriptores/EditarSuscriptor";
import NuevoSuscriptor from "./components/molecules/suscriptores/NuevoSuscriptor";
// import FormularioPagoSuscripcion from "./components/molecules/suscriptores/FormularioPagoSuscripcion";

import AuthLayout from "./components/pages/AuthLayout";
import Login from "./components/pages/Login";
import NuevoFormularioPagoSuscripcion from "./components/molecules/suscriptores/NuevoFormularioPagoSuscripcion";
import VerPagoSuscripcion from "./components/molecules/suscriptores/VerPagoSuscripcion";
import Pagos from "./components/pages/Pagos";
import Rutinas from "./components/pages/Rutinas";
import FormularioEjerciciodeRutina from "./components/molecules/rutinas/FormularioEjercicioDeRutina";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <EstadisticasProvider>
            <GeneralProvider>
              <Routes>
                <Route path="/" element={<AuthLayout />}>
                  <Route path="/login" index element={<Login />} />
                </Route>
                <Route path="/" element={<Layout />}>
                  <Route path="/suscriptores" element={<Suscriptores />} />
                  <Route
                    path="suscriptores/nuevosuscriptor"
                    element={<NuevoSuscriptor />}
                  />
                  <Route
                    path="suscriptores/pagosuscripcion"
                    element={<NuevoFormularioPagoSuscripcion />}
                  />
                  <Route
                    path="suscriptores/pagosuscripcion/:id"
                    element={<VerPagoSuscripcion />}
                  />

                  <Route path="suscriptores/:id" element={<VerSuscriptor />} />
                  <Route
                    path="/ejericicio/:id"
                    element={<FormularioEjerciciodeRutina />}
                  />
                  <Route
                    path="suscriptores/editar/:id"
                    element={<EditarSuscriptor />}
                  />

                  <Route path="/dashboard" index element={<Dashboard />} />
                  <Route path="/gastos" index element={<Gastos />} />
                  <Route path="/rutinas" index element={<Rutinas />} />

                  <Route path="/pagos" index element={<Pagos />} />
                  <Route
                    path="/configuraciones"
                    index
                    element={<Configuraciones />}
                  />

                  <Route
                    path="/configuraciones/:id"
                    index
                    element={<Configuraciones />}
                  />
                  <Route path="*" element={<h1> Pagina no encontrada. </h1>} />
                </Route>
              </Routes>
            </GeneralProvider>
          </EstadisticasProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
