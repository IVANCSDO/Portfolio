function genero() {
    if (document.getElementById("masculino").checked == true) {
        document.getElementById("foto").src = "media/chico.png";
    }
    if (document.getElementById("femenino").checked == true) {
        document.getElementById("foto").src = "media/chica.png";
    }if (document.getElementById("otro").checked == true){
        document.getElementById("foto").src = "media/otro.png";
    }
}

let band=0;
let cont=0;

function publi() {

    if (document.getElementById("publiCheck").checked == true){

        var resultado1=parseInt(Math.floor((Math.random() * 5) + 1));
        var resultado2=parseInt(Math.floor((Math.random() * 5) + 1));
        
        while (resultado1==resultado2) {
            resultado2=parseInt(Math.floor((Math.random() * 5) + 1));
        }
        
        var resultado3=parseInt(Math.floor((Math.random() * 5) + 1));
       
        while (resultado3 == resultado2 || resultado3 == resultado1) {
            resultado3=parseInt(Math.floor((Math.random() * 5) + 1));
        }

        document.getElementById('opcion'+resultado1).checked = true;
        document.getElementById('opcion'+resultado2).checked = true;
        document.getElementById('opcion'+resultado3).checked = true;

        if (band==0){
        aparecer();           
        }

    }if (document.getElementById("publiCheck").checked == false){
        
        for (let i = 1; i < 6 ; i++) {
            document.getElementById('opcion'+i).checked = false;
        }
    band=1
    }
    cont=cont+1;
    if (cont==9){
        swal("No Juanma, no se repiten", "Si no mira el JS",
            {buttons: {
                no: {
                    text: "Voy a revisar",
                    value: "nomefio"},
                si: {
                    text: "Me fío",
                    value: "mefio",},
            }
            }
            )
            .then((value) => {
                switch (value) {
               
                  case "nomefio":
                    swal("Aquí tienes!");
                    break;

                  default:
                    swal("Te lo enseño igual");
                }}
                )
            .then(() => {
                document.getElementById("codigo").hidden=false;
            });

    }
}

function aparecer() { 
    
    document.getElementById("form").style="left: 0%; position: relative; transition: 2s;";
        document.getElementById('publi').hidden = false;  
        var timeout = setTimeout(fondo, 5);
        function fondo() {
        document.getElementById('publi').style = "opacity:1; scale:1";
        }
 }

function registrar() { 
    if (document.getElementById("privacidad").checked==false){
        swal("Lee y acepta las políticas de privacidad antes de registrarte");
    }else{
        document.getElementById("principal").style.display="none";
        document.getElementById("titulo").style.display="none";
        swal("Gracias por registrarte ¡Ahora a defender la justicia!");
    }
}



//La zona de cargar

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("principal").style.display = "block";
}

function cerrarCodigo(){
    document.getElementById("codigo").hidden = true;
}