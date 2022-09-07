import React, { useState } from "react";

const CuadroEstadisticas = ({ tittle, tittle2, value }) => {
  const [data, setData] = useState(value);

  return (
    <>
      <div className="grid grid-cols-5 text-center  bg-white  rounded-r-xl  ">
        <div className="col-span-3 bg-blue-700 text-white  rounded-l-xl py-2 capitalize ">
          <h2 className="">{tittle}</h2>
          <h2>{tittle2}</h2>
        </div>
        <p className="col-span-2 bg-white  text-center  rounded-r-xl my-auto  ">
          {value}
        </p>
        {/* <input
          type="number"
          className="col-span-2 bg-white  text-center  rounded-r-xl my-auto  "
          value={data}
          onChange={(e) => setData(e.target.value)}
          // disabled
        /> */}
      </div>
    </>
  );
};

export default CuadroEstadisticas;
