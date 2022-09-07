import React from "react";

import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import axios from "axios";
import useGeneral from "../../../hooks/useGeneral";
import Header from "../../atoms/Header";
import Error from "../../atoms/Error";
import Spiner from "../../atoms/Spiner";
import ContenedorFormularios from "../ContenedorFormularios";
import FormularioSuscriptor from "./FormularioSuscriptor";

const EditarSuscriptor = () => {
  const { suscriptor, setSuscriptor } = useGeneral();
  const { id } = useParams();
  const params = useParams();

  async function getSuscriptorId() {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const respuesta = await axios.get(
        `${import.meta.env.VITE_API_URL}/suscriptores/${params.id}`,
        config
      );
      setSuscriptor(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSuscriptorId();
  }, []);

  return (
    <div data-aos="fade-left">
      <Header
        title={suscriptor?.nombre ? "Editar Suscriptor " : "Nuevo Suscriptor"}
      />
      <FormularioSuscriptor />
    </div>
  );
};

export default EditarSuscriptor;
