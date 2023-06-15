import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../estilos/general.css"


const SaludPais = function (){
    return (
    <>
    <Header />
    <section className="SaludPais">
        <h2>ANÁLISIS GENERAL</h2>
        <br />
        <p>El derecho a la salud es de vital importancia según lo consagrado en el articulo 49 de la Constitución Política de Colombia. Garantizar este derecho fundamental implica brindar a todos los ciudadanos acceso equitativo a servicios de salud de calidad, promoviendo la prevención, el tratamiento y la rehabilitación. La Constitución reconoce la salud como un derecho fundamental que debe ser protegido y garantizado por el Estado, con el objetivo de asegurar el bienestar y la calidad de vida de todos los colombianos.</p>
        <br />
        <div className="Grafica">
        <iframe title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNTFjZTc5OWMtMWYyZC00Y2IwLTk2NTItNjJjYTdiNWQ4YjlmIiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    </section>
    <Footer />
    </>
    )
}

export default SaludPais;