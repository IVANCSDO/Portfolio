var estilos=[
    ["Color","#000000"],
    ["Fuentes","Comic Sans MS","Times New Roman","Arial","Calibri",
    "xx-small","x-small","small","medium","large","x-large","xx-large",
    "normal","bold","lighter","bolder",
    "normal","italic","oblique",
    "normal","no-common-ligatures proportional-nums","common-ligatures tabular-nums","small-caps slashed-zero"],
    ["Text Align","start","end","center","justify"],
    ["Line height","Number","em","porciento","px"],
    ["Text decoration","solid","double","dotted","dashed","wavy"]
]

var color

var tamano="medium"
var bandTamano=0

var weight="normal"

var estiloFuente="normal"

var varianteFuente="normal"

var justificadoVar="start"

var bandAltura=0

var altura

var decoration="solid"

var posicionLinea

var colorDecoration

function carga(){

    document.write(' <div class="container"> <div class="cabecera">The dark - The Third Eye Foundation</div> <div class="foto"><img src="media/the-dark.png" alt="" srcset=""></div> <div   class="texto"  id="principal" oninput="cambio()"> ');

    for(i=0;i<estilos.length;i++){

        //inicio del div genérico
        document.write('<div class="cosas" >');

        document.write('<h3>'+estilos[i][0]+'</h3>');

        //color pick para el color
        if(i==0){
            document.write('Selecciona el color <input type="color" id="color" ><br><br>');

            document.write('<span id="textoColor">')
            for(a=0;a!=4;a++){
                document.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            document.write('</span>')

        }

        //fuentes
        if(i==1){

            document.write('<div class="cosas2"> Selecciona la familia  <select id="familiaFuente">  <option value="1">Comic Sans</option> <option value="2">Times New Roman</option>  <option value="3">Arial</option>  <option value="4">Calibri</option>   </select> <br> <br>');
            document.write('<div class="cosas2"> Selecciona el tamaño:  <br>  <input onInput="nuevoTamano(5)" type="radio" id="xx-small" name="size" value="xx-small"><label for="xx-small">xx-small</label>   <input onInput="nuevoTamano(6)" type="radio" id="x-small" name="size" value="x-small"> <label  for="x-small">x-small</label> <input onInput="nuevoTamano(7)" type="radio" id="small" name="size" value="small ">      <label for="small">small</label>  <input onInput="nuevoTamano(8)" type="radio" id="medium" name="size" value="medium" checked> <label for="medium">medium</label>  <input onInput="nuevoTamano(9)" type="radio" id="large" name="size" value="large"> <label for="large">large</label> <input onInput="nuevoTamano(10)" type="radio" id="x-large" name="size" value="x-large "><label for="x-large">x-large</label><input  onInput="nuevoTamano(11)" type="radio" id="xx-large" name="size" value="xx-large ">  <label for="xx-large">xx-large</label> <br> <br>  <input onInput="nuevoTamanoSlider()" type="range" id="rangeSize" min="1" max="100"> <span id="tamanoTextoPx">0px</span>  </div>               <br> <br>');
            document.write('<div class="cosas2"> Selecciona el Weight: <br> <input onInput="nuevoWeight(12)" type="radio" id="normalWeight" name="weight" value="normal" checked> <label for="normalWeight">normal</label> <input onInput="nuevoWeight(13)" type="radio" id="boldWeight" name="weight" value="bold"> <label for="boldWeight">bold</label> <input onInput="nuevoWeight(14)" type="radio" id="lighterWeight" name="weight" value="lighter "> <label for="lighterWeight">lighter</label> <input onInput="nuevoWeight(15)" type="radio" id="bolderWeight" name="weight" value="bolder"> <label for="bolderWeight">bolder</label> <br> <br> <input onInput="weightSlider()" type="range" id="rangeWeight" min="1" max="1000"> <span id="tamanoWeight">0</span>   </div>  <br>');
            document.write('<div class="cosas2"> Selecciona el estilo: <br> <input onInput="seleccionarEstilo(16)" type="radio" id="normalStyle" name="style" value="normal" checked> <label for="normalStyle">normal</label> <input onInput="seleccionarEstilo(17)" type="radio" id="italicStyle" name="style" value="italicStyle"> <label for="italicStyle">italic</label> <input onInput="seleccionarEstilo(18)" type="radio" id="obliqueStyle" name="style" value="obliqueStyle "> <label for="obliqueStyle">oblique</label> <br> <br> </div>');
            document.write('<div class="cosas2"> Selecciona la variante: <br> <input onInput="seleccionVariante(19)" type="radio" id="normalVariant" name="Variant" value="normal" checked> <label for="normalVariant">normal</label> <input onInput="seleccionVariante(20)" type="radio" id="no-common-ligaturesProportional-nums" name="Variant" value="no-common-ligatures proportional-nums"> <label for="no-common-ligaturesProportional-nums">no-common-ligatures proportional-nums</label> <input onInput="seleccionVariante(21)" type="radio" id="common-ligaturesTabular-nums" name="Variant" value="common-ligatures tabular-nums "> <label for="common-ligaturesTabular-nums">common-ligatures tabular-nums</label> <input onInput="seleccionVariante(22)" type="radio" id="small-capsSlashed-zero" name="Variant" value="small-caps slashed-zero"> <label for="small-capsSlashed-zero">small-caps slashed-zero</label> <br> <br> <br>  <br> </div>');

            document.write('<span id="textoFuente">')
            for(a=0;a!=4;a++){
                document.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. 1234567890 Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            document.write('</span> ')
                        document.write('</div>')

        }

        //alineamiento
        if(i==2){

            document.write('<div class="cosas2"> Selecciona el justificado: <br> <input onInput="seleccionJustificado(1)" type="radio" id="startJust" name="just" value="start" checked> <label for="startJust">start</label> <input onInput="seleccionJustificado(2)" type="radio" id="endJust" name="just" value="end"> <label for="endJust">end</label> <input onInput="seleccionJustificado(3)" type="radio" id="centerJust" name="just" value="center"> <label for="centerJust">center</label> <input onInput="seleccionJustificado(4)" type="radio" id="justificadoJust" name="just" value="justificado"> <label for="justificadoJust">justificado</label> <br> <br></div>');
  
            document.write('<div id="textoAlineamiento">')
            for(a=0;a!=4;a++){
                document.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam THE GAME dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            document.write('</div>')
  
        }
        

        //altura
        if(i==3){

            for(j=1;j!=estilos[3].length;j++){
                document.write('<input type="range" onInput="nuevoTamano'+estilos[3][j]+'()" id="range'+estilos[3][j]+'" min="1" max="100" value="1"> <span id="'+estilos[3][j]+'Texto">0 '+estilos[3][j]+'</span> <br>')
            }
            document.write(' <br>    <div id="textoAltura">')

            for(a=0;a!=4;a++){
                document.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            document.write('</div>')

        }

        //text decoration
        if(i==4){

            for(z=1;z!=estilos[4].length;z++){
                document.write('<input type="radio" name="deco" onInput="nuevoDecoration('+z+')" id="'+estilos[4][z]+'"><label for="'+estilos[4][z]+'">'+estilos[4][z]+'</label> <br>')
            }

            document.write('<input type="color"  onInput="decoracion()" id="colorDecoration" ></input> <br>')

            document.write('<input type="checkbox" onInput="decoracion()" checked id="under"><label for="under">underline</label>')

            document.write('<input type="checkbox" onInput="decoracion()" id="top"><label for="top">overline</label> <br><br>')

            document.write(' <br>    <div style="text-decoration: underline;" id="textoDecoration">')

            
            for(a=0;a!=4;a++){
                document.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            document.write('</div>')

        }


    }

    document.write('</div>');
    

    cambio()

}

function cambio(){

    color()
    fuentes()
    weightF()
    estilo()
    variante()
    justificado()
    alturas()
    decoracion()

}

function color(){

    estilos[0][1]=document.getElementById("color").value
    document.getElementById("textoColor").style.color=estilos[0][1]

}

function fuentes(){

    familia()
    if(bandTamano==0){
        sizeText()
    }else{
        sizeRange()
    }


}

function familia(){ //ese pedrolu

    var fuente=document.getElementById("familiaFuente").options[document.getElementById("familiaFuente").selectedIndex].value
    document.getElementById("textoFuente").style.fontFamily=estilos[1][fuente]

}

//tamaño

function nuevoTamano(n) { 

    tamano=estilos[1][n]

}

function nuevoTamanoSlider() { 

    tamano=(document.getElementById("rangeSize").value)+"px"

    sizeRange()

}

function sizeText(){
    
    document.getElementById("textoFuente").style.fontSize=tamano

}

function sizeRange(){

    document.getElementById("xx-small").checked=false
    document.getElementById("x-small").checked=false
    document.getElementById("small").checked=false
    document.getElementById("medium").checked=false
    document.getElementById("large").checked=false
    document.getElementById("x-large").checked=false

    document.getElementById("textoFuente").style.fontSize=tamano
    document.getElementById("tamanoTextoPx").innerHTML=tamano

}

//weight
function nuevoWeight(n){

    weight=estilos[1][n]
}

function weightSlider() {
    
    weight=document.getElementById("rangeWeight").value

    document.getElementById("normalWeight").checked=false
    document.getElementById("boldWeight").checked=false
    document.getElementById("lighterWeight").checked=false
    document.getElementById("bolderWeight").checked=false

    document.getElementById("tamanoWeight").innerHTML=weight

}

function weightF(){

    document.getElementById("textoFuente").style.fontWeight=weight

}

//estilo
function seleccionarEstilo(n){

    estiloFuente=estilos[1][n]
    estilo()

}

function estilo(){

    document.getElementById("textoFuente").style.fontStyle=estiloFuente

}

//variante
function seleccionVariante(n){

    varianteFuente=estilos[1][n]
    variante()

}

function variante(){

    document.getElementById("textoFuente").style.fontVariant=varianteFuente

}

//justificado
function seleccionJustificado(n){

    justificadoVar=estilos[2][n]
    justificado()

}

function justificado(){

    document.getElementById("textoAlineamiento").style.textAlign=justificadoVar

}

//line-height
function alturas(){

    if(bandAltura==0){
        nuevoTamanoNumber()
    }else if(bandAltura==1){
        nuevoTamanoem()
    }else if(bandAltura==2){
        nuevoTamanoporciento()
    }else if(bandAltura==3){
        nuevoTamanopx()
    }

}

function nuevoTamanoNumber(){

    bandAltura=0

    altura=document.getElementById("rangeNumber").value

    document.getElementById("NumberTexto").innerHTML=altura

    document.getElementById("textoAltura").style.lineHeight=altura


}

function nuevoTamanoem(){

    bandAltura=1

    altura=(document.getElementById("rangeem").value)+"em"

    document.getElementById("emTexto").innerHTML=altura

    document.getElementById("textoAltura").style.lineHeight=altura

}

function nuevoTamanoporciento(){

    bandAltura=2

    altura=(document.getElementById("rangeporciento").value)+"%"

    document.getElementById("porcientoTexto").innerHTML=altura

    document.getElementById("textoAltura").style.lineHeight=altura

}

function nuevoTamanopx(){

    bandAltura=3

    altura=(document.getElementById("rangepx").value)+"px"

    document.getElementById("pxTexto").innerHTML=altura

    document.getElementById("textoAltura").style.lineHeight=altura

}

//decoración
function nuevoDecoration(n){

    decoration=estilos[4][n]
    decoracion()

}


function decoracion(){

    if(document.getElementById("top").checked && document.getElementById("under").checked){
        posicionLinea="overline underline"
    }else if(document.getElementById("top").checked){
        posicionLinea="overline"
    }else if(document.getElementById("under").checked){
        posicionLinea="underline"
    }

    colorDecoration=document.getElementById("colorDecoration").value

    document.getElementById("textoDecoration").style.textDecoration=(posicionLinea+' '+decoration+' '+colorDecoration)
    
}
