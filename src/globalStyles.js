import {createGlobalStyle} from 'styled-components'
import PrimaryFont from  './utils/font/Hind-Light.woff';


const GlobalStyles=createGlobalStyle`

.ContainerCabecera img{
    width: 350.42px;
    height: 256px;
}

.ContainerText p{
    margin:10px;
    font-family:'Hind';
    font-size: 30px;
    text-align: justify;

}
.

#principalTitle{
    font-size: 50px;
    color:rgb(226,70,43);
}


.ContainerImagen{
    width: 50%;
    margin-top: 5%;
    margin-right: 2%;
    margin-left: 2%;
    height: 100%;
    justify-content: center;
}

/*Fuentes*/
@font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}
`;

export default GlobalStyles;