function colorAzar() {

    let color11= '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    let color22= '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    let color33= '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');


    document.getElementById("color1").value=color11;
    document.getElementById("color2").value=color22;
    document.getElementById("colorBorde").value=color33;

    mostrar();

}

function mostrar(){

    let ancho=document.getElementById("ancho").value;
    let alto=document.getElementById("alto").value;

    let borde=parseInt(2*(ancho/6)); 
    let colorBorde=document.getElementById("colorBorde").value;

    document.getElementById("tablero").style.width=parseInt(ancho*8)+'px';
    document.getElementById("tablero").style.height=parseInt(alto*8)+'px';
    document.getElementById("tablero").style.border='solid '+borde+'px '+colorBorde+'';

    document.getElementById('tablero').style.marginTop='-'+(alto*4)+'px';  
    document.getElementById('tablero').style.marginLeft='-'+(ancho*4)+'px';  

    document.getElementById('tablero').innerHTML="";

    let color1= document.getElementById("color1").value;
    let color2= document.getElementById("color2").value;

    //la wea de calcular los cuadrado

    for (let band = 0; band < 8; band++) {

        if(band % 2 == 0){
            for (var i=0;i<8;i++){
                if (i % 2 == 0){
                    document.getElementById('tablero').innerHTML+='<div id="contenedor-'+i+band+'" style="background-color: '+color1+' ;width:'+parseInt(ancho)+'px; height:'+parseInt(alto)+'px;float:left; class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)""></div>';
                }else{
                    document.getElementById('tablero').innerHTML+='<div id="contenedor-'+i+band+'" style="background-color: '+color2+' ;width:'+parseInt(ancho)+'px; height:'+parseInt(alto)+'px;float:left; class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)""></div>';       
                }
            }
        }else{
            for (var i=0;i<8;i++){
                if (i % 2 == 0){
                    document.getElementById('tablero').innerHTML+='<div id="contenedor-'+i+band+'" style="background-color: '+color2+' ;width:'+ancho+'px; height:'+alto+'px;float:left; class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)""></div>';
                }else{
                    document.getElementById('tablero').innerHTML+='<div id="contenedor-'+i+band+'" style="background-color: '+color1+' ;width:'+ancho+'px; height:'+alto+'px;float:left; class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)""></div>';       
                }
            }
        } 
    }

    //intento poner fichas

    //Torres blancas
    document.getElementById("contenedor-00").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/rookN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget">';
    document.getElementById("contenedor-70").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/rookN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget2">';
    //Torres negras
    document.getElementById("contenedor-07").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/rookB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget3">';
    document.getElementById("contenedor-77").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/rookB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget4">';
    //Bishops negros
    document.getElementById("contenedor-20").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/bishopN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget5">';
    document.getElementById("contenedor-50").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/bishopN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget6">';
    //Bishops blancos
    document.getElementById("contenedor-27").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/bishopB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget7">';
    document.getElementById("contenedor-57").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/bishopB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget8">';
    //Knights negros
    document.getElementById("contenedor-10").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/knightN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget9">';
    document.getElementById("contenedor-60").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/knightN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget10">';
    //Knights negros
    document.getElementById("contenedor-17").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/knightB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget11">';
    document.getElementById("contenedor-67").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/knightB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget12">';
    //rey negro y blanco
    document.getElementById("contenedor-47").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/kingB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget13">';
    document.getElementById("contenedor-40").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/kingN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget14">';
    //reina negra y blanca
    document.getElementById("contenedor-30").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/queenN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget15">';
    document.getElementById("contenedor-37").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/queenB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget16">';
    //peones blancos
    document.getElementById("contenedor-06").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget17">';
    document.getElementById("contenedor-16").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget18">';
    document.getElementById("contenedor-26").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget19">';
    document.getElementById("contenedor-36").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget20">';
    document.getElementById("contenedor-46").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget21">';
    document.getElementById("contenedor-56").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget22">';
    document.getElementById("contenedor-66").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget23">';
    document.getElementById("contenedor-76").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnB.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget24">';
    //peones negros
    document.getElementById("contenedor-01").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget25">';
    document.getElementById("contenedor-11").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget26">';
    document.getElementById("contenedor-21").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget27">';
    document.getElementById("contenedor-31").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget28">';
    document.getElementById("contenedor-41").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget29">';
    document.getElementById("contenedor-51").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget30">';
    document.getElementById("contenedor-61").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget31">';
    document.getElementById("contenedor-71").innerHTML='<img class="pieza" style="width:'+parseInt(ancho)+'px;height:'+parseInt(alto)+'px;" src="media/piezas/pawnN.png" ondragstart="dragStart(event)" draggable="true" id="dragtarget32">';

}

//se mueven y todo
function dragStart(event) {
    event.dataTransfer.setData("innerHTML", event.target.id);
}
  
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {

    event.dataTransfer.setData("text", ev.target.id);
}

//la parte de capturar fichas
  
function drop(event) {

    event.preventDefault();
    var data = event.dataTransfer.getData("innerHTML");
    event.target.appendChild(document.getElementById(data));

    variable1 =  event.target.className;


    
    //console.log(variable1);

    //comprueba si el div en el que va a caer es una pieza, si lo es la borra y se pone la nueva
    if (variable1 == "pieza"){
        event.target.replaceWith(document.getElementById(data));
        var audio1 = document.getElementById("Scapturar");
        audio1.play();

    }else{

        var audio2 = document.getElementById("Smover");
        audio2.play();

    }
}

//movimientos legales /Too much ;(  



