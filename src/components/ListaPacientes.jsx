import React from "react";
import Paciente from "./Paciente";

const ListaPacientes = () => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-2xl text-center">
          Listado de pacientes
        </h2>
        <p className="text-lg mt-5 text-center text-indigo-600 font-bold mb-2">
          Administra tus pacientes
        </p>

        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />

      </div>
    </>
  );
};

export default ListaPacientes;
