import React from "react";

const ContenedorFormularios = ({ children }) => {
  return (
    <>
      <div className="p-5 pb-32 xs:p-0" data-aos="fade-left">
        {children}
      </div>
    </>
  );
};

export default ContenedorFormularios;
