import React from "react";
import"../estilos/header.css"
import icono from"../imagenes/icono.png";

const Header = function (){
    return (
    <>
    <header className='header'>
        <a href="#" className="icono-nav"><img src={icono} alt="icono" />
        <h1>INFOSALUD</h1></a>
        <a href="/" >Inicio</a>
        <a href="/SaludPais" >Salud pais</a>
        <a href="/Detalle" >Análisis en detalle</a>
        <a href="/Conclusion" >Conclusión</a>
    </header>
    </>
    )
}

export default Header;