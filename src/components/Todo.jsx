import React from 'react'; //Importar siempre react
import '../utils/css/todo.estilos.css'
import Harry1 from '../utils/images/harry1.jpg'

const Todo = () => {
    return (
        <div className="ContainerCabecera">
            <div className="ContainerText">
            <h1>
                Hola este es el componente de la cabecera
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nesciunt molestiae cum, doloremque recusandae illo a. Sint, fuga quos? Debitis ipsum corrupti consequatur velit ullam enim exercitationem minima id eos.
            Deserunt culpa nobis architecto ratione quae quisquam rem rerum dolorum eveniet ducimus, velit laudantium, laboriosam error delectus? Voluptatibus amet labore autem dicta doloribus tempore recusandae, hic nemo voluptatum exercitationem sint?
            </p>
            </div>
            <div className="ContainerImagen">
            <img id="image1" src={Harry1} alt="Este es Harry1"/>
            </div>
        </div>
    )
}

export default Todo
