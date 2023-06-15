import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../estilos/especifico.css"


const Detalle = function (){
    return (
    <>
    <Header />
    <section className="Detalle">
        <br />
        <h2>DENGUE</h2>
        <br />
        <p>El dengue ha tenido una alta incidencia en Colombia en los últimos años, siendo considerado un importante problema de salud pública. La presencia del mosquito Aedes aegypti, transmisor del virus del dengue, así como factores como el clima tropical y la falta de medidas de control efectivas, contribuyen a su propagación. El país ha implementado diversas estrategias de prevención y promoción de la salud para reducir la incidencia del dengue y mitigar sus efectos en la población.</p>
        <br />
        <div className="Grafica">
        <iframe title="2.pbx" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNzFhZGQwNzYtNjlkOC00ZDkzLTk2ZGItN2NlMWQxN2JjZTg5IiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    </section>
    <section className="Detalle">
        <br />
        <h2>MALARIA</h2>
        <br />
        <p>La malaria, también conocida como paludismo, sigue siendo un importante desafío de salud pública en Colombia. A pesar de los esfuerzos realizados, especialmente en las últimas décadas, para su control y prevención, la malaria continúa siendo endémica en varias regiones del país. La incidencia de la enfermedad varía según las zonas geográficas y climáticas, siendo las áreas rurales y de selva las más afectadas. </p>
        <br />
        <div className="Grafica">
        <iframe title="3" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiYjdhOGRhYTAtMzhlYi00ZmI4LWFmZmItZDZiNTllZDMxNWE5IiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9&pageName=ReportSection06ea6970608b134c4da1" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    </section>
    <Footer />
    </>
    )
}

export default Detalle;