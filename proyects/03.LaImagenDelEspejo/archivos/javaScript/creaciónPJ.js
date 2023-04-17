$(function() {

    $('.map').maphilight({
        strokeOpacity: 0,
        fillColor: "f7d7db",
        fillOpacity: 0.07
    });

});

//------------------------------Cuerpo

function sumarCuerpo(){

    let cuerpo=parseInt(document.getElementById("cuerpo").value);
    let puntosRestantes=parseInt(document.getElementById("puntosRestantes").value);

    if (puntosRestantes >= 1){
        if (cuerpo == 0 || cuerpo == -1 || cuerpo == 1) {
            puntosRestantes=puntosRestantes-1;
            cuerpo=cuerpo+1;

                
            document.getElementById("cuerpo").value=cuerpo;
            document.getElementById("puntosRestantes").value=puntosRestantes;
        }
    }

}

function restarCuerpo(){

    let cuerpo=parseInt(document.getElementById("cuerpo").value);
    let puntosRestantes=parseInt(document.getElementById("puntosRestantes").value);

        if (cuerpo == 0 || cuerpo == 2 || cuerpo == 1) {
            puntosRestantes=puntosRestantes+1;
            cuerpo=cuerpo-1;

                
            document.getElementById("cuerpo").value=cuerpo;
            document.getElementById("puntosRestantes").value=puntosRestantes;
        }

}


//------------------------------Mente

function sumarMente(){

    let mente=parseInt(document.getElementById("mente").value);
    let puntosRestantes=parseInt(document.getElementById("puntosRestantes").value);

    if (puntosRestantes >= 1){
        if (mente == 0 || mente == -1 || mente == 1) {
            puntosRestantes=puntosRestantes-1;
            mente=mente+1;

                
            document.getElementById("mente").value=mente;
            document.getElementById("puntosRestantes").value=puntosRestantes;
        }
    }
}

function restarMente(){

    let mente=parseInt(document.getElementById("mente").value);
    let puntosRestantes=parseInt(document.getElementById("puntosRestantes").value);

        if (mente == 0 || mente == 2 || mente == 1) {
            puntosRestantes=puntosRestantes+1;
            mente=mente-1;

                
            document.getElementById("mente").value=mente;
            document.getElementById("puntosRestantes").value=puntosRestantes;
        }

}

//------------------------------Alma

function sumarAlma(){

    let alma=parseInt(document.getElementById("alma").value);
    let puntosRestantes=parseInt(document.getElementById("puntosRestantes").value);

    if (puntosRestantes >= 1){
        if (alma == 0 || alma == -1 || alma == 1) {
            puntosRestantes=puntosRestantes-1;
            alma=alma+1;

                
            document.getElementById("alma").value=alma;
            document.getElementById("puntosRestantes").value=puntosRestantes;
        }
    }

}

function restarAlma(){

    let alma=parseInt(document.getElementById("alma").value);
    let puntosRestantes=parseInt(document.getElementById("puntosRestantes").value);


        if (alma == 0 || alma == 2 || alma == 1) {
            puntosRestantes=puntosRestantes+1;
            alma=alma-1;

                
            document.getElementById("alma").value=alma;
            document.getElementById("puntosRestantes").value=puntosRestantes;
        }
 

}

//------------------------------Restablecer puntos

function restablecer(){

    document.getElementById("alma").value=0;
    document.getElementById("mente").value=0;
    document.getElementById("cuerpo").value=0;

    document.getElementById("puntosRestantes").value=2;

}
