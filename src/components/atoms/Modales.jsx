import React from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";

const Modales = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  return (
    <>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
    </>
  );
};

export default Modales;
