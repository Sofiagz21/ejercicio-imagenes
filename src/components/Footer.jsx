import React from 'react'; //Importar siempre react
import '../utils/css/footer.estilos.css';
import Harry3 from '../utils/images/harry3.jpg';

const Footer = () => {
    return (
       <div className="ContainerFooter">
           <div className="ContainerText">
                <h1>
                Hola, este es el contenido  footer
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nesciunt molestiae cum, doloremque recusandae illo a. Sint, fuga quos? Debitis ipsum corrupti consequatur velit ullam enim exercitationem minima id eos.
                Deserunt culpa nobis architecto ratione quae quisquam rem rerum dolorum eveniet ducimus, velit laudantium, laboriosam error delectus? Voluptatibus amet labore autem dicta doloribus tempore recusandae, hic nemo voluptatum exercitationem sint?
                </p>
            </div>
            <div className="ContainerImagen">
                <img id="image3"src={Harry3} alt="Este es Harry3" />
           </div>
       </div>
    )
}
export default Footer
