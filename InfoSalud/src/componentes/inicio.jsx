import React from "react";
import"../estilos/inicio.css";
import { Link } from 'react-router-dom'

const Inicio = function (){
    return (
    <>
    <br />
    <section className="grid">
        <div class="grid-item">
        <Link to={`/SaludPais`}>
            <img src="./images/mapa.png" alt="" />
        </Link>
        </div>
        <div class="grid-item">
            <br />
            <p>
            <h2>Sobre INFOSALUD</h2>
            <br />
            Colombia, como muchos otros países tropicales y subtropicales, enfrenta desafíos significativos en relación con las enfermedades transmitidas por vectores. Dado su clima diverso, su geografía variada y la presencia de diferentes ecosistemas, el país alberga una amplia gama de vectores y patógenos asociados por lo que el control de las enfermedades transmitidas por vectores en Colombia es un desafío constante.</p>
        </div>
    </section>
    <section className="introduccion">
        <h2>INTRODUCCIÓN</h2>
        <br />
        <h3>Objetivo</h3>
        <br />
        <p>El objetivo general de esta página web es proporcionar información clara y accesible sobre la incidencia de las enfermedades transmitidas por vectores en un país específico. A través de gráficos y datos actualizados, la página busca informar sobre la situación de estas enfermedades, destacando las áreas de mayor riesgo y promoviendo la conciencia y la adopción de medidas de prevención adecuadas.</p>
        <br />
        <h3>Metodología</h3>
        <br />
        <p>La metodología de la página web se basa en recopilar y analizar datos de la Secretaría de Salud, utilizando el Sistema de Salud Pública (SIViGILA) del Ministerio de Salud y considerando únicamente los años 2015, 2021 y 2022. La información epidemiológica recopilada se presenta a través de gráficos interactivos y visualizaciones desarrolladas en Power BI, teniendo en cuenta factores de riesgo como clima y geografía. El objetivo es proporcionar a los usuarios una visión informada de la incidencia de enfermedades transmitidas por vectores, facilitando la toma de decisiones en la prevención y control. La página web analiza las tendencias generales de las enfermedades transmitidas por vectores a nivel nacional y proporciona un enfoque detallado sobre las enfermedades más relevantes. Ofrece una comprensión completa de la situación general y detallada de estas enfermedades en el país.</p>
    </section>
    <br />
    </>
    )
}

export default Inicio;