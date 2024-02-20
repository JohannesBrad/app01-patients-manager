import React from "react";

const Paciente = () => {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-lg py-4 px-5 text-sm ml-5 mb-4">
        <p className="font-bold text-gray-700 uppercase mb-2">
          Nombre Mascota: <span className="font-normal">Trek</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">
          Nombre propietario: <span className="font-normal">TJohannes</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">
          Email: <span className="font-normal">Tb23@gmail.com</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">
          Fecha Alta: <span className="font-normal">T12-02-24</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">
          Síntomas:
          <span className="font-normal">TLorem ipsum dolor sit amet.</span>
        </p>
      </div>
    </>
  );
};
export default Paciente;
