// import React from "react";
// import { Outlet } from "react-router-dom";
// import Login from "./Login";

// const AuthLayout = () => {
//   return (
//     <div
//       data-aos="fade-right"
//       className="bg-gradient-to-r from-cyan-900 to-blue-400 h-screen"
//     >
//       <main className="mx-auto p-5 md:flex md:justify-center">
//         <div className=" mx-auto pt-10 w-4/5 md:w-2/4 lg:w-1/4">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AuthLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const AuthLayout = () => {
  return (
    <div
      data-aos="fade-right"
      className="bg-gradient-to-r from-cyan-900 to-blue-400 h-screen"
    >
      <main className="mx-auto p-5 md:flex md:justify-center">
        <div className=" mx-auto pt-10 w-4/5 md:w-2/4 lg:w-1/4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
