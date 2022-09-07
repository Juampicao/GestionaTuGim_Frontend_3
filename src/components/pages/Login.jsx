import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../atoms/Error";
import Alerta from "../atoms/Alerta";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { auth, setAuth, cargando } = useAuth();
  console.log(auth);
  console.log(cargando);
  // window.localStorage.clear();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/usuarios/login`,
        {
          email,
          password,
        }
      );
      setAlerta({});
      setAuth(data);
      localStorage.setItem(`token`, data.token);
      navigate("/suscriptores");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      console.log(error);
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-white font-black text-2xl capitalize">
        Inicia sesión y administra tu
        <span className="text-white">negocio</span>
      </h1>
      <form action="submit" className="mt-5 bg-white shadow rounded-lg p-6">
        {msg && <Alerta alerta={alerta} />}
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className=" w-full p-3 mt-3 border rounded-xl bg-gray-50 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className=" w-full p-3 mt-3 border rounded-xl bg-gray-50 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input
          onClick={handleSubmit}
          to="/gastos"
          type="submit"
          value="Iniciar Sesion"
          className="bg-sky-700 mb-5 w-full p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to="/registrar"
          className="block text-center my-5 text-slate-300 uppercase text-sm"
        >
          {" "}
          No tienes una cuenta? Registrate
        </Link>
        <Link
          to="/olvide-password"
          className="block text-center my-5 text-slate-300 uppercase text-sm"
        >
          {" "}
          Olvide mi password
        </Link>
      </nav>
    </>
  );
};

export default Login;

// import axios from "axios";
// import React, { useContext } from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Error from "../atoms/Error";
// import Alerta from "../atoms/Alerta";
// import useAuth from "../../hooks/useAuth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [alerta, setAlerta] = useState({});

//   const { auth, setAuth, cargando } = useAuth();
//   console.log(auth);
//   console.log(cargando);
//   window.localStorage.clear();

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if ([email, password].includes("")) {
//       setAlerta({
//         msg: "Todos los campos son obligatorios",
//         error: true,
//       });
//       return;
//     }
//     try {
//       const { data } = await axios.post(
//         `${import.meta.env.VITE_API_URL}/usuarios/login`,
//         {
//           email,
//           password,
//         }
//       );
//       setAlerta({});
//       setAuth(data);
//       localStorage.setItem(`token`, data.token);
//       navigate("/gastos");
//     } catch (error) {
//       setAlerta({
//         msg: error.response.data.msg,
//         error: true,
//       });
//     }
//   };

//   const { msg } = alerta;

//   return (
//     <>
//       <h1 className="text-white font-black text-2xl capitalize">
//         Inicia sesión y administra tu {``}
//         <span className="text-white">negocio</span>
//       </h1>
//       <form action="submit" className="mt-5 bg-white shadow rounded-lg p-6">
//         {msg && <Alerta alerta={alerta} />}
//         <div className="my-5">
//           <label
//             htmlFor="email"
//             className="uppercase text-gray-600 block text-xl font-bold"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Email de Registro"
//             className=" w-full p-3 mt-3 border rounded-xl bg-gray-50 "
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="my-5">
//           <label
//             htmlFor="password"
//             className="uppercase text-gray-600 block text-xl font-bold"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="Password de Registro"
//             className=" w-full p-3 mt-3 border rounded-xl bg-gray-50 "
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <input
//           onClick={handleSubmit}
//           to="/gastos"
//           type="submit"
//           value="Iniciar Sesion"
//           className="bg-sky-700 mb-5 w-full p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
//         />
//       </form>

//       <nav className="lg:flex lg:justify-between">
//         <Link
//           to="/registrar"
//           className="block text-center my-5 text-slate-300 uppercase text-sm"
//         >
//           {" "}
//           No tienes una cuenta? Registrate
//         </Link>
//         <Link
//           to="/olvide-password"
//           className="block text-center my-5 text-slate-300 uppercase text-sm"
//         >
//           {" "}
//           Olvide mi password
//         </Link>
//       </nav>
//     </>
//   );
// };

// export default Login;
