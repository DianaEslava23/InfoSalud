import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import"../estilos/Home.css"

const Header = function (){
    return (
    <>
    <header className='header'>
        <FontAwesomeIcon icon="laptop-medical" />
        <h1>INFOSALUD</h1>
        <ul className='navegacion'>
        <li><a href="" >Inicio</a></li>
        <li><a href="" >Salud pais</a></li>
        <li><a href="" >analisis en detalle</a></li>
        <li><a href="" >Conclusion</a></li>
        </ul>
    </header>
    </>
    )
}

export default Header;