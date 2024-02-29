import React from "react";

const Paciente = ({pacientes, setPaciente, eliminarPaciente}) => {
  console.log(pacientes);

  // o aplicar destructuring
  // const {nombreMascota, nombrePropietario, email, alta, sintomas} = pacientes
  // en el codigo solo llamamos a la vairable: nombreMascota ...

  return (
    <>
      <div className=" bg-white rounded-lg shadow-lg py-4 px-5 text-sm ml-5 mb-4">
      
      <p className="font-bold text-gray-700 uppercase mb-2">
        Codigo:<span className="font-normal"> {pacientes.id}</span>
      </p>
        <p className="font-bold text-gray-700 uppercase mb-2">
          Nombre Mascota:<span className="font-normal"> {pacientes.nombreMascota}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">
          Nombre propietario: <span className="font-normal">{pacientes.nombrePropietario}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">
          Email: <span className="font-normal">{pacientes.email}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">
          Fecha Alta: <span className="font-normal">{pacientes.alta}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">
          Síntomas:
          <span className="font-normal">{pacientes.sintomas}</span>
        </p>

        <div className="flex justify-between mt-4">
          <button type="button"
            className="py-2 px-10 text-white rounded-md bg-indigo-600 hover:bg-indigo-700"
            onClick={() => setPaciente(pacientes)}
          >Editar</button>
          <button type="button"
            className="py-2 px-10 text-white rounded-md bg-red-600 hover:bg-red-700"
            onClick={() => eliminarPaciente(pacientes.id)}
          >Eliminar</button>

        </div>
      </div>
    </>
  );
};
export default Paciente;
