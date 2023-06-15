import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../estilos/conclusiones.css"


const Conclusion = function (){
    return (
    <>
    <Header />
    <section>
    <br />
    <h2>SUGERENCIAS</h2>
    <p>Tanto el fenómeno del Niño como de la Niña pueden influir en la incidencia de enfermedades transmitidas por vectores, creando condiciones favorables para la reproducción y propagación de los mosquitos vectores. <b>Durante el fenómeno del Niño</b>, se observa un aumento en las temperaturas y una disminución en las precipitaciones, lo cual crea condiciones propicias para la proliferación del mosquito Aedes aegypti, vector del dengue. El calor y la escasez de agua estancada pueden favorecer la reproducción y supervivencia de los mosquitos, aumentando el riesgo de transmisión del virus.</p>
    <br />
    <h2>Recomendaciones para afrontar enfermedades de transmisión por vectores durante el fenómeno del niño:</h2>
    <ul>
        <li>Implementar programas de control vectorial más intensivos y focalizados en las áreas de mayor riesgo.</li>
        <li>Fortalecer los sistemas de vigilancia epidemiológica para la detección temprana de brotes de dengue y malaria.</li>
        <li> Realizar campañas de educación y concientización dirigidas a la población sobre los riesgos del dengue y la malaria.</li>
        <li>Mejorar la capacidad de los sistemas de salud garantizando el acceso a pruebas diagnósticas, medicamentos y personal capacitado en la detección y manejo de estas enfermedades.</li>
        <li>Establecer mecanismos de coordinación efectivos con organismos de salud y países vecinos para compartir información, experiencias y buenas prácticas.</li>
    </ul>
    </section>
    <Footer />
    </>
    )
}

export default Conclusion;