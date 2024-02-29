import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaPacientes from "./components/ListaPacientes";

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    console.log('eliminando: ',id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

   //UseEffect 2
   useEffect(() => {
     const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
     }
   
     obtenerLS()
   }, [])
   
  // Usando localStorage 1
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  
  
  return (
    <>
      <div className="container mx-auto mt-10 md:">
      <Header/>
       <div className="mt-12 flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes ={setPacientes}
          paciente={paciente}
          setPaciente = {setPaciente}
        />
        <ListaPacientes 
          pacientes = { pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
       </div>
      </div>
    </>
  );
}

export default App;
