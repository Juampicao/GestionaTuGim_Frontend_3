import React from "react";

const ContenedorGraficos = ({ children }) => {
  return (
    <>
      <div className="p-5  pb-32 xs:p-0 max-w-xl" data-aos="fade-left">
        {children}
      </div>
    </>
  );
};

export default ContenedorGraficos;
