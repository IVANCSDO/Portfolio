function cambio(){

    color()
    fuentes()
    weightF()
    estilo()
    variante()
    justificado()
    alturas()
    decoracion()
    transformacionT()
    verticalF()
    indentF()
    spacingF()
    spaceF()

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

    conjuntoLineas=""

    if(document.getElementById("top").checked){
        conjuntoLineas +="overline "
    }
    if(document.getElementById("under").checked){
        conjuntoLineas +="underline "
    }
    if(document.getElementById("line").checked){
        conjuntoLineas +="line-through "
    }
    colorDecoration=document.getElementById("colorDecoration").value

    document.getElementById("textoDecoration").style.textDecoration=(decoration+' '+conjuntoLineas+' '+colorDecoration)
    
}


// transformación
function nuevoTransformacion(n){

    transformacionV=estilos[5][n]
    transformacionT()

}

function transformacionT(){
    document.getElementById("textoTransformacion").style.textTransform=transformacionV

}


// vertical
function nuevoVertical(n){
    vertical=estilos[6][n]
    if(n==2){vertical="top"}
}

function verticalF(){
    document.getElementById("verticalAl").style.verticalAlign=vertical
}



// indent
function nuevoIndent(){
    
    indentV=(document.getElementById("valorIndent").value)

    if(document.getElementById("numeroI").checked){
        indentV=0
        document.getElementById("valorIndent").value=0
    }
    if(document.getElementById("Porcentaje").checked){
        indentV+="%"
    }
    if(document.getElementById("em").checked){
        indentV+="em"
    }
    
}

function indentF(){

    document.getElementById("textoIndent").style.textIndent=indentV

}


// spacing
function spacingF(){

    valorSpacing= document.getElementById("valorSpacing").value

    if(document.getElementById("pxSpacing").checked){
        document.getElementById("pxSpacing").checked=true
        document.getElementById("textoSpacing").style.wordSpacing=(valorSpacing+"px")
    }else{
        document.getElementById("remSpacing").checked=true
        document.getElementById("textoSpacing").style.wordSpacing=(valorSpacing+"rem")
    }

}


// whiteSpace

function spaceG(n){

    spaceV=estilos[9][n]
    spaceF()

}

function spaceF(){

    document.getElementById("textoSpace").style.whiteSpace=spaceV

}