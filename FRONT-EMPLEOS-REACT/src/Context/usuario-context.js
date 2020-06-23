import { React, useMemo } from "react"
//agragamos funciones
/*
traer data del user
verificar token y asi 
*/


const UsuarioContext = React.createContext()


//Provider para el padre
export function UsuarioProvider (props) {
    //variables globales
    const usuario = "GAA";//variable global?


    //metodos que cambiarn las variables globales


    const value = useMemo(() => {
        return ({
            usuario//variables
            //metodos

        })
    }, [usuario])//variable global, si se modifica estas variables se actualiza el return {}

    return <UsuarioContext.Provider value={value}{...props}></UsuarioContext.Provider>
}





//funcion para acceder desde los componentes directamente
export function useUsuario () {
    const context = React.useContext(UsuarioContext)
    if (!context) {
        throw new Error("useUsuario debe estar dentro del proveedor UsuarioContext")
    }
    return context
}

//provider provee el contexto