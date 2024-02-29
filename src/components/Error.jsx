import React from "react";

//const Error = ({errormsg}) => {
    const Error = ({children}) => {
    return(
        <div className="bg-red-500 text-white text-center rounded-md py-2 mb-2">
        {/* <p>Todos los campos son obligatorios</p> */}
        {/* <p>{errormsg}</p> */}

        {/* Usando Children */}
        {children}
      </div>



    )
}

export default Error;