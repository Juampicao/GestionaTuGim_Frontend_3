import React from "react";
import "./BarraSearch.css";
import IconoSearch from "../../img/iconoSearchGris.png";

const BarraSearch = ({ onClick, placeholder }) => {
  return (
    <>
      <div className="input-wrapper flex items-center">
        <img
          src={IconoSearch}
          className="absolute h-6 pl-2 "
          alt="search Icon"
        />
        <input
          type="search"
          className="input rounded-2xl p-3 pl-5 pr-10 cursor-pointer"
          placeholder={placeholder}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default BarraSearch;
