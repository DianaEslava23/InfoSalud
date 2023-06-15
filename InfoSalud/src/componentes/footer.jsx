import React from "react";
import "../estilos/footer.css"

const Footer =()=>{
    return(
        <footer>
            <div className="redes">

                    <a href="" class="redes-sociales"><img src="./images/icontwitter.png" alt="" /></a>
                    <a href="" class="redes-sociales"><img src="./images/iconfacebook.png" alt="" /></a>
                    <a href="" class="redes-sociales"><img src="./images/iconinstagram.png" alt="" /></a>

            </div>
           
                <span className="coyrigth">
                    &copy;2023, INFOSALUD
                </span>
            
        </footer>
    )
}

export default Footer;
