import React, { useEffect, useState } from "react";
import { BotonBlancoRedondeado } from "../../../helpers/colores";
import {
  botonDivStyles,
  divStyles,
  inputStyles,
} from "../../../helpers/styles";
import useGeneral from "../../../hooks/useGeneral";
import { BotonPrimario } from "../../atoms/Botones";

const FormularioPostDeleteSuscripcion = ({ inputs, suscripcion }) => {
  const { DeleteTiposSuscripcion } = useGeneral();
  const [value, setValue] = useState("");

  const useField = ({ type = "text" }) => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
      setValue(event.target.value);
    };
    return {
      type,
      value,
      onChange,
    };
  };

  const viejaSuscripcion = useField({ type: "text" });

  const returnInputs = () => {
    if (inputs) {
      console.log(inputs);
      return (
        <>
          {inputs.map((e) => (
            <div className={divStyles}>
              {e.type === "text" ? (
                <>
                  <div className={divStyles}>
                    <label> {e.label} </label>

                    <input
                      {...viejaSuscripcion}
                      name={viejaSuscripcion.value}
                      className={inputStyles}
                      value={suscripcion.nombre}
                      disabled
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className={divStyles}>
                    <label>{e.label}</label>
                    <select
                      name={e.title}
                      id={e.title}
                      className={inputStyles}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    >
                      {e.array.map((e) => {
                        return <option value={e._id}>{e.nombre}</option>;
                      })}
                    </select>
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      );
      //   return (
      //     <>
      //       {inputs.map((e) => (
      //         <div className={divStyles}>
      //           {e.type === "text" ? (
      //             <>
      //               <label> {e.label} </label>
      //               <input
      //                 type={e.type}
      //                 placeholder={e.placeholder}
      //                 className={inputStyles}
      //                 // value={e.title}
      //                 id={e.title}
      //                 value={value}
      //                 onChange={(e) => setValue(e.target.value)}
      //               />
      //               <p className="text-center font-bold my-2"> Cambiar Por: </p>
      //             </>
      //           ) : (
      //             <>
      //               <label>{e.label}</label>
      //               <select
      //                 name={e.title}
      //                 id={e.title}
      //                 className={inputStyles}
      //                 value={value}
      //                 onChange={(e) => setValue(e.target.value)}
      //               >
      //                 {e.array.map((e) => {
      //                   return <option>{e.nombre}</option>;
      //                 })}
      //               </select>
      //             </>
      //           )}
      //         </div>
      //       ))}
      //     </>
      //   );
    }
    return [value];
  };

  return (
    <div>
      <form action="submit">
        <h2 className="text-center mb-5 font-bold uppercase">
          Eliminar Suscripcion
        </h2>
        <p className="text-slate-400 text-xs">
          Todos los suscriptores con {suscripcion.nombre} seran reemplazadas
        </p>
        {returnInputs()}
        {/* <div>
          <label> Username </label>
          <input {...userName} name={userName.value} placeholder="Escribe.." />
        </div> */}

        <div className={botonDivStyles}>
          <BotonPrimario
            onClick={() =>
              DeleteTiposSuscripcion(suscripcion.nombre, suscripcion.id, value)
            }
            Color={BotonBlancoRedondeado}
            value={`Eliminar ${suscripcion.nombre} y guardar los cambios`}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default FormularioPostDeleteSuscripcion;
