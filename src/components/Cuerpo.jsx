import React from 'react'; //Importar siempre react
import '../utils/css/cuerpo.estilos.css'
import Harry2 from '../utils/images/harry2.jpg';

const Cuerpo = () => {
    return (
        <div className="ContainerCuerpo">
            <div className="ContainerText">
                <h1>Cuerpo component</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nesciunt molestiae cum, doloremque recusandae illo a. Sint, fuga quos? Debitis ipsum corrupti consequatur velit ullam enim exercitationem minima id eos.
                Deserunt culpa nobis architecto ratione quae quisquam rem rerum dolorum eveniet ducimus, velit laudantium, laboriosam error delectus? Voluptatibus amet labore autem dicta doloribus tempore recusandae, hic nemo voluptatum exercitationem sint?
                </p>
            </div>
            <div className="ContainerImagen">
                <img id="image2" src={Harry2} alt="Hola esta es Harry2" />
            </div>
        </div>
    )
}

export default Cuerpo