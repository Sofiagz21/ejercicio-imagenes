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


#principalTitle{
    font-size: 50px;
    color: #608C97;
    font-family:'Hind';
}


.ContainerImagen{
    width: 50%;
    margin-top: 5%;
    margin-right: 2%;
    margin-left: 2%;
    height: 100%;
    justify-content: center;
}

button{
    padding: 15px;
    margin:0 10px 25px 0;
    font-size: 15px;
    font-family: 'Hind';
    border-radius:10px;
    border: none;
    background: rgb(250,144,56);
    background: linear-gradient(0deg, rgba(250,144,56,1) 0%, rgba(96,140,151,0.9747235387045814) 57%);
    color: black;
}

button:hover{
    background: rgb(96,140,151);
    background: linear-gradient(0deg, rgba(96,140,151,0.9747235387045814) 1%, rgba(250,144,56,1) 100%);
    color:  #002933;
}

/*Fuentes*/
@font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}
`;

export default GlobalStyles;