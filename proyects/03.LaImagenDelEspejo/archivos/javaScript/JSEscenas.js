$(function() {

    $('.map').maphilight({
        strokeOpacity: 0,
        fillColor: "f7d7db",
        fillOpacity: 0.07
    });

});

function dado(){

        let resultado1=parseInt(Math.floor((Math.random() * 6) + 1));
    
        var audio = document.getElementById("audio");
            audio.play();

        let resultado2=parseInt(Math.floor((Math.random() * 6) + 1));
        
        var audio = document.getElementById("audio");
            audio.play();
            
        document.getElementById("resultadoDado").value=resultado1+resultado2;


        //la paranolla para actualizar el texto del lanzador

        let resultado=parseInt(document.getElementById("resultadoDado").value);


        //console.debug(resultado);

        if (resultado == 2){

            document.getElementById("resultadoTexto").value="PIFIA";

        }else if (resultado > 2 && resultado < 8){

            document.getElementById("resultadoTexto").value="FALLO";

        }else if (resultado > 7 && resultado < 12){

            document.getElementById("resultadoTexto").value="ACIERTO";

        }else if (resultado == 12){

            document.getElementById("resultadoTexto").value="CRÍTICO";

        }

}