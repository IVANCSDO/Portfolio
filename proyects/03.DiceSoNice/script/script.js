function dado(min,max){

    let resultado=parseInt(Math.floor((Math.random() * max) + min));

    return resultado;

}

function calcular(min,max){

    var audio = document.getElementById("audio");
    audio.play();


    let resultado=dado(min,max);

    document.getElementById("resultadoDado").value=resultado;

    if (max==6){

        switch (resultado) {
            case 1:
                document.getElementById("imagen").src="media/d6-1.png";
                break;
            case 2:
                document.getElementById("imagen").src="media/d6-2.png";
                break;
            case 3:
                document.getElementById("imagen").src="media/d6-3.png";
                break;   
            case 4:
                document.getElementById("imagen").src="media/d6-4.png";
                break;
            case 5:
                document.getElementById("imagen").src="media/d6-5.png";
                break;
            case 6:
                document.getElementById("imagen").src="media/d6-6.png";
                break;
            default:
                break;
        }

    }else if (max==10){

        switch (resultado) {       
            case 1:
                document.getElementById("imagen").src="media/d10-1.png";
                break;
            case 2:
                document.getElementById("imagen").src="media/d10-2.png";
                break;
            case 3:
                document.getElementById("imagen").src="media/d10-3.png";
                break;   
            case 4:
                document.getElementById("imagen").src="media/d10-4.png";
                break;
            case 5:
                document.getElementById("imagen").src="media/d10-5.png";
                break;
            case 6:
                document.getElementById("imagen").src="media/d10-6.png";
                break;
            case 7:
                document.getElementById("imagen").src="media/d10-7.png";
                break;
            case 8:
                document.getElementById("imagen").src="media/d10-8.png";
                break;   
            case 9:
                document.getElementById("imagen").src="media/d10-9.png";
                break;
            case 10:
                document.getElementById("imagen").src="media/d10-10.png";
                break;
            default:
                break;
        }

    }else{

        switch (resultado) {    
            case 1:
                document.getElementById("imagen").src="media/d20-1.png";
                break;
            case 2:
                document.getElementById("imagen").src="media/d20-2.png";
                break;
            case 3:
                document.getElementById("imagen").src="media/d20-3.png";
                break;   
            case 4:
                document.getElementById("imagen").src="media/d20-4.png";
                break;
            case 5:
                document.getElementById("imagen").src="media/d20-5.png";
                break;
            case 6:
                document.getElementById("imagen").src="media/d20-6.png";
                break;
            case 7:
                document.getElementById("imagen").src="media/d20-7.png";
                break;
            case 8:
                document.getElementById("imagen").src="media/d20-8.png";
                break;   
            case 9:
                document.getElementById("imagen").src="media/d20-9.png";
                break;
            case 10:
                document.getElementById("imagen").src="media/d20-10.png";
                break;
            case 11:
                document.getElementById("imagen").src="media/d20-11.png";
                break;
            case 12:
                document.getElementById("imagen").src="media/d20-12.png";
                break;
            case 13:
                document.getElementById("imagen").src="media/d20-13.png";
                break;   
            case 14:
                document.getElementById("imagen").src="media/d20-14.png";
                break;
            case 15:
                document.getElementById("imagen").src="media/d20-15.png";
                break;
            case 16:
                document.getElementById("imagen").src="media/d20-16.png";
                break;
            case 17:
                document.getElementById("imagen").src="media/d20-17.png";
                break;
            case 18:
                document.getElementById("imagen").src="media/d20-18.png";
                break;   
            case 19:
                document.getElementById("imagen").src="media/d20-19.png";
                break;
            case 20:
                document.getElementById("imagen").src="media/d20-20.png";
                break;
            default:
                break;
        }

    }

    var log=("D"+max+": "+resultado+"\n")

    document.getElementById("registroTexto").innerHTML += log;
    
    setInterval(function(){
        
        document.getElementById("registroTexto").scrollTop = document.getElementById("registroTexto").scrollHeight;
    }, 1000);


}

function limpiar(){

    document.getElementById("registroTexto").innerHTML = "";

}