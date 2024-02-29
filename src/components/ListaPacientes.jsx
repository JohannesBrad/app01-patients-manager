import React, { useEffect } from "react";
import Paciente from "./Paciente";

const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  //console.log(pacientes);
  console.log(pacientes && pacientes.length);

  useEffect( () => {
    if( pacientes.length > 0) {
      console.log('Nuevo paciente');
    }
    
  },[pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg mt-5 text-center text-indigo-600 font-bold mb-2">
            Administra tus pacientes
          </p>
          {pacientes.map(pacientes => {
            //return (
            //<p>{pacientes.nombreMascota}</p>);
            return ( 
            <Paciente 
              key={pacientes.id} 
              pacientes={pacientes} 
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            /> )
            
          })}

          {/* <Paciente /> */}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg mt-5 text-center text-indigo-600 font-bold mb-2">
            Comienze agregando sus pacientes
          </p>
        </>
      )}
    </div>
  );
};

export default ListaPacientes;
