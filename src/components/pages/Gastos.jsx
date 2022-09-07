import Header from "../atoms/Header";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const Gastos = () => {
  const [fecha, setFecha] = useState("");
  let date = new Date().toISOString().split("T")[0];
  return (
    <div>
      <Header title="Gastos" />
      <h1> Pagina en construccion.. </h1>
      {/* <input
        type="date"
        value={date}
        onChange={(e) => setFecha(e.target.value)}
      /> */}
    </div>
  );
};

export default Gastos;
