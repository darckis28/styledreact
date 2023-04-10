import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icono } from "../UI";

export default ({tema})=>{
    const claro = <Icono src={themeOff} alt="claro"/>
    const oscuro = <Icono src={themeOn}  alt="oscuro"/>
    return<>{tema ? claro:oscuro}</>
}
