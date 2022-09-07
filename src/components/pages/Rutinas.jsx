import React from "react";
import { useEffect } from "react";
import useGeneral from "../../hooks/useGeneral";
import Header from "../atoms/Header";
import ContenedorLayout from "../molecules/ContenedorLayout";
import ListadoEjercicicios from "../molecules/rutinas/ListadoEjercicicios";
import IconAdd from "../../img/newIcons/iconAdd.png";
import { useModal } from "../../hooks/useModal";
const Rutinas = () => {
  const { ejercicios, getAllEjercicios } = useGeneral();
  const { isOpen, IsClose, ha } = useModal();
  useEffect(() => {
    getAllEjercicios();
    console.log(ejercicios);
  }, []);

  return (
    <div>
      <ContenedorLayout>
        <Header title="Ejercicios" />

        <button
          className="px-3 flex py-2.5  font-medium text-xs leading-tight uppercase hover:scale-105 transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg  focus:outline-none hover:duration-200  cursor-pointer items-center rounded-full bg-green-700 hover:bg-green-800 text-white w-[170px]"
          type="button"
          // onClick={openModal}
          onClick={() => alert("Pronto estará disponible")}
          value="Agregar"
        >
          <img src={IconAdd} alt="" className="h-8 " />
          <p className="pl-2">Crear Ejercicio</p>
        </button>
        <ListadoEjercicicios ejercicios={ejercicios} />
      </ContenedorLayout>
    </div>
  );
};

export default Rutinas;
