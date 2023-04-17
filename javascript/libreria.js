function elemento(elementId) {

    return document.getElementById(elementId);

}

function elementos(elementsClassName) {

    return document.getElementsByClassName(elementsClassName);

}

function aleatorioEntre(min,max){

    let resultado=parseInt(Math.floor((Math.random() * max) + min));

    return resultado;

}

function colorAleatorio() { 

    let color= '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    return color

}