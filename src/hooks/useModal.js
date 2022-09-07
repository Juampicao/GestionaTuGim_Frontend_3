import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(!isOpen);

  const closeModal = () => setIsOpen(!isOpen);

  return [isOpen, openModal, closeModal];
};
