import React from "react"
import alimentacion from "./assets/images/alimentacion.svg"
import salud from "./assets/images/salud.svg"
import otros from "./assets/images/otros.svg"
import transporte from "./assets/images/transporte.svg"
import utilidades from "./assets/images/utilidades.svg"
import { Icono,IconoTema } from "./Components/UI"
export default(type)=>{
    const Images = {
        Restaurante:<IconoTema src={alimentacion} alt="Restaurante"/>,
        Salud:<IconoTema src={salud} alt="Restaurante"/>,
        Otros:<IconoTema src={otros} alt="Restaurante"/>,
        Transporte:<IconoTema src={transporte} alt="Restaurante"/>,
        Utilidades:<IconoTema src={utilidades} alt="Restaurante"/>,
        default:<IconoTema src={otros} alt="Restaurante"/>
    }
    return Images[type] || Images["default"];
}