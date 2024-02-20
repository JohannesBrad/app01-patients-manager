import React, { useState } from "react";

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [mensajeError, setMensajeError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion
    if ([nombreMascota, nombrePropietario, email, alta, sintomas].includes("")) {
      console.log("estan vacios");
      setMensajeError(true)
      return
    }
    setMensajeError(false)
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-2xl text-center">
          Seguimiento de Pacientes
        </h2>
        <p className="text-lg mt-5 text-center text-indigo-600 font-bold mb-2">
          Añade Pacientes
        </p>

        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white shadow-lg py-5 px-5 rounded-lg"
        >
            
             {/* {mensajeError && 'si hay error'} */}
              {/* si mensajeError es true, entonces muestra si hay error  */}
              {mensajeError && (

                <div className="bg-red-500 text-white text-center rounded-md py-2 mb-2">
                    <p>Todos los campos son obligatorios</p>
                </div>
              )}
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold mb-1"
          >
            Nombre Mascota
          </label>

          <input
            type="text"
            id="mascota"
            className="border-2 w-full rounded-md p-2 placeholder-gray-400 mb-2"
            placeholder="Nombre Mascota"
            onChange={(e) => setNombreMascota(e.target.value)}
            value={nombreMascota}
          />

          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold mb-1"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            className="border-2 w-full rounded-md p-2 placeholder-gray-400 mb-2"
            placeholder="Nombre Propietario"
            onChange={(e) => setNombrePropietario(e.target.value)}
            value={nombrePropietario}
          />

          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold mb-1"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border-2 w-full rounded-md p-2 placeholder-gray-400 mb-2"
            placeholder="Email propietario"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold mb-1"
          >
            Alta
          </label>
          <input
            className="border-2 w-full rounded-md p-2 placeholder-gray-400 mb-2"
            id="alta"
            type="date"
            placeholder="Alta"
            onChange={(e) => setAlta(e.target.value)}
            value={alta}
          ></input>

          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold mb-1"
          >
            Sintomas
          </label>
          <textarea
            name=""
            id="sintomas"
            cols="30"
            rows="5"
            className="border-2 w-full rounded-md p-2 mb-2"
            placeholder="Sintomas"
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
          ></textarea>
          <input
            className="bg-indigo-600 w-full rounded-md p-3 hover:bg-indigo-700 cursor-pointer transition-colors text-white"
            type="submit"
            value="Agregar Paciente"
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;
