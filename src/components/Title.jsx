import React from 'react'; //Importar siempre react
import '../utils/css/title.estilos.css'
import { Link } from 'react-router-dom';


const Title= () => {
    return (
        <div className="ContainerTitle">
        <h1 id="principalTitle">Harry Styles</h1>
        <Link to ="/Contact">
        <button type="button"> Me voy para contact</button>
        </Link>
        <Link to ="/">
        <button type="button"> Me voy para Home</button>
        </Link>
        </div>
    )
}

export default Title