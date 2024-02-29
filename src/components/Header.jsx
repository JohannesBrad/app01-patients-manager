import React from "react";

const Header = ({nameUser}) => {
    console.log(nameUser);
    return(
        <>
            <h1 className="text-4xl font-bold text-indigo-600 text-center md:w-2/3 mx-auto">Seguimiento de Pacientes - Veterinaria</h1>
        </>
    )
}

export default Header;