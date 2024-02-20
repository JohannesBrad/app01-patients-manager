import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaPacientes from "./components/ListaPacientes";

function App() {
  return (
    <>
      <div className="container mx-auto mt-10 md:">
      <Header />
       <div className="mt-12 flex">
        <Formulario />
        <ListaPacientes />
       </div>
      </div>
    </>
  );
}

export default App;
