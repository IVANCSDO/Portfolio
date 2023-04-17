//matriz
let tabla=[
    ['Nombre','Apellidos',"Edad",'Dirección'], //cabecera
    ['José','Aceituno Ytal',18,'c/ Uno'],
    ['Jorge','Ucraniano',29,'plza/ Tiananmén'],
    ['Ana','Reina Css',38,'av/ Torre'],
    ['Tomas','Edison',60,'c/ Green Terrace'],
    ['Recomendaciones','de',60,'c/ Música'],
    ['Franz','Ferdinand',58,'c/ Take me out'],
    ['Locked','Club',20,'c/ Irak'],
    ['Kevin','Morby',29,'plza/ Harlem River'],
    ['Vasily','Kalinnikov',38,'av/ Symphony nº2'],
    ['Peach','Pit',42,'c/ Being so Normal'],
    ['Cage','the Elephant',63,'c/ Cold Cold Cold'],
    ['The','Neightbourhood',18,'c/ Cry Baby'], //más
    ['We were','Promised Jetpacks',29,'plza/ Its thunder and its lightning'],
    ['Block','Party',38,'av/ Helicopter'],
    ['White','Lies',60,'c/ To lose my life'],
    ['Gerry','Mulligan',60,'c/ Night Lights'],
    ['The','Drums',58,'c/ I dont know how to love'],
    ['Paco','de Lucía',10,'c/ Aires choqueros'],
    ['Molchat','Doma',29,'plza/ Tancerbat'],
    ['The','Filmmaker',38,'av/ Nocturnal'],
    ['Beach','Weather',42,'c/ Sex, Drugs, etc.'],
    ['Artic','Monkeys',63,'c/ Crying lightning']
];

//bandera
var band=0;

//fila seleccionada
var fila;

//index
var index;


//Funciones varias

function escribirTabla(){

    if(tabla.length>1){ //en caso de que tenga elementos:
    var result = "<table id='tablaP' border=0>"; //creamos la variable del resultado final
    for(var i=0; i<tabla.length; i++) { //para toda la longitud del vector
        result += '<tr onclick="mostrar(this)">'; //creamos el tableRow, con la función de mostrar
        for(var j=0; j<tabla[i].length; j++){ //para cada elemento (j) dentro de cada índice (i) creamos un td
            if(i==0){result += "<td class='primeraFila'><b>"+tabla[i][j]+"</b></td>"} //para la cabecera en negrita
            else{
                if(j==0){
                    result += "<td class='primeraColumna' id='"+i+j+"'>"+tabla[i][j]+"</td>"; //para poner clase a la primera columna
                }else{
                    result += "<td id='"+i+j+"'>"+tabla[i][j]+"</td>"; //el resto
                }
            }    
        }
        result += "</tr>"; //cerramos tableRow
    }
    result += "</table>"; //cerramos tabla

    document.getElementById('tabla').innerHTML=result; //escribimos la tabla
    
    }else{
        document.getElementById('tabla').innerHTML=""; //en caso de no haber elementos no aparece nada
    }

}

function carga() {

    //cargar la lista de borrar
    for(i=1;i<tabla.length;i++){
        var x = document.getElementById("seleccion");
        var option = document.createElement("option"); 
        option.text = (tabla[i][0]); //hacemos que el texto de la opción creada sea el primer nombre de cada índice
        option.id = i;
        x.add(option); //se añade
    }

    //escribir la tabla
    escribirTabla();
}

function registrar(){

    //longitud de la tabla
    var longitud=parseInt(tabla.length);

    //variables del input
    var nombre=document.getElementById('valor0').value, 
        apellido=document.getElementById('valor1').value,
        edad=parseInt(document.getElementById('valor2').value),
        direccion=document.getElementById('valor3').value;

    //crear un nuevo índice en la matriz
    tabla[longitud] = [nombre, apellido, edad, direccion];

    //actualizar la lista para borrar
    var opcionSelec = document.getElementById("seleccion"); 
    var option = document.createElement("option");
    option.text = (tabla[longitud][0]);
    option.id = tabla.length-1;
    opcionSelec.add(option);

    //escribir la tabla
    escribirTabla();

    //cambiamos el color al que está seleccionado
    colorSeleccionado()

}

function borrar(){

    let text = "¿Seguro que deseas borrar el usuario?";
    if (confirm(text) == true) {

        //borar el nombre de la matriz
        var select=document.getElementById('seleccion');
        var options = select.options;
        var idOption = options[options.selectedIndex].id;

        for(i=0;i<tabla.length;i++){
            if(i==idOption){
                tabla.splice(i,1)
            }
        }

        //borrar nombre de la lista
        var opcionSelec = document.getElementById("seleccion");  
        opcionSelec.remove(opcionSelec.selectedIndex);

        index=index-1

        //actualizar ids y más cosas
        actualizarIds()
               


    } else {
    }

}

function mostrar(x) {

    index=x.rowIndex; //te devuelve un valor numérico con la posición en el vector

    if(index!=0){ //en caso de no ser la cabecera de la tabla:

        document.getElementById('spanNombre').value=tabla[index][0];
        document.getElementById('spanApellidos').value=tabla[index][1];
        document.getElementById('spanEdad').value=tabla[index][2];
        document.getElementById('spanDireccion').value=tabla[index][3];

    }else{}

    //comprobamos si hay que dehabilitar algún botón
    comprobarBotones()

    //cambiamos el color al que está seleccionado
    colorSeleccionado()

}

function editar(){

    //ocultar y mostrar el botón de "guardar"
    if (band==0){
        document.getElementById('guardarBtn').hidden=false;
        document.getElementById('cancelarBtn').hidden=false;
        document.getElementById('editarBtn').disabled=true;

        band=1

        //(No funciona con "readonly=false")
        document.getElementById('spanNombre').removeAttribute('readonly');
        document.getElementById('spanApellidos').removeAttribute('readonly');
        document.getElementById('spanEdad').removeAttribute('readonly');
        document.getElementById('spanDireccion').removeAttribute('readonly');

        //botones de recorrer vector
        document.getElementById('pri').disabled=true;
        document.getElementById('ant').disabled=true;
        document.getElementById('sig').disabled=true;
        document.getElementById('ult').disabled=true;

    }else{
        document.getElementById('guardarBtn').hidden=true;
        document.getElementById('cancelarBtn').hidden=true;
        document.getElementById('editarBtn').disabled=false;

        band=0

        //y aquí tengo que ponerle "true" o si no no va ;[ 
        document.getElementById('spanNombre').setAttribute('readonly',true);
        document.getElementById('spanApellidos').setAttribute('readonly',true);
        document.getElementById('spanEdad').setAttribute('readonly',true);
        document.getElementById('spanDireccion').setAttribute('readonly',true);

        //botones de recorrer vector
        document.getElementById('pri').disabled=false;
        document.getElementById('ant').disabled=false;
        document.getElementById('sig').disabled=false;
        document.getElementById('ult').disabled=false;

    }
}

function guardar(){

    // nuevas variables para guardar los datos
    var nombre2=document.getElementById('spanNombre').value,
        apellido2=document.getElementById('spanApellidos').value,
        edad2=parseInt(document.getElementById('spanEdad').value),
        direccion2=document.getElementById('spanDireccion').value;

    //se MODIFICAN los valores del índice seleccionado (variable index definida por el onclick)
    tabla[index] = [nombre2, apellido2, edad2, direccion2];

    escribirTabla();
    editar();

    //cambiar el nombre en el "select"
    document.getElementById('seleccion').options[index-1].text=nombre2
    document.getElementById('seleccion').options[index-1].value=nombre2

    colorSeleccionado()

}

function cancelar(){

    //se desactiva el modo editar
    editar();

    // para que no ponga los valores de la cabecera
    if(index!=0){

        document.getElementById('spanNombre').value=tabla[index][0];
        document.getElementById('spanApellidos').value=tabla[index][1];
        document.getElementById('spanEdad').value=tabla[index][2];
        document.getElementById('spanDireccion').value=tabla[index][3];

    }else{}

}

function primero(){

    //lee el primero
    document.getElementById('spanNombre').value=tabla[1][0];
    document.getElementById('spanApellidos').value=tabla[1][1];
    document.getElementById('spanEdad').value=tabla[1][2];
    document.getElementById('spanDireccion').value=tabla[1][3];

    //asignamos el nuevo index
    index=1;

    //se comprueban qué botones deben estár deshabilitados
    comprobarBotones()

    //cambiamos el color al que está seleccionado
    colorSeleccionado()

}

function ultimo(){

    //Tomamos el último valor
    var ultimoValor=parseInt((tabla.length)-1);

    //lo leemos
    document.getElementById('spanNombre').value=tabla[ultimoValor][0];
    document.getElementById('spanApellidos').value=tabla[ultimoValor][1];
    document.getElementById('spanEdad').value=tabla[ultimoValor][2];
    document.getElementById('spanDireccion').value=tabla[ultimoValor][3];

    //asignamos el nuevo index
    index=tabla.length-1;

    //se comprueban qué botones deben estár deshabilitados
    comprobarBotones()

    //cambiamos el color al que está seleccionado
    colorSeleccionado()

}

function siguiente(){

    //si no es el último:
    if(index!=tabla.length){
    document.getElementById('spanNombre').value=tabla[index+1][0];
    document.getElementById('spanApellidos').value=tabla[index+1][1];
    document.getElementById('spanEdad').value=tabla[index+1][2];
    document.getElementById('spanDireccion').value=tabla[index+1][3];

    //se suma 1 al index
    index=index+1;
    }

    //se comprueban qué botones deben estár deshabilitados
    comprobarBotones()

    //cambiamos el color al que está seleccionado
    colorSeleccionado()

    
}

function anterior(){

    //en caso de que no sea el primero:
    if(index!=1){
        document.getElementById('spanNombre').value=tabla[index-1][0];
        document.getElementById('spanApellidos').value=tabla[index-1][1];
        document.getElementById('spanEdad').value=tabla[index-1][2];
        document.getElementById('spanDireccion').value=tabla[index-1][3];

        //se resta uno al index
        index=index-1;
    }

    //se comprueban qué botones deben estár deshabilitados
    comprobarBotones()

    //cambiamos el color al que está seleccionado
    colorSeleccionado()


}

function comprobarBotones(){

    //Si estamos en el modo editar y seleccionamos algo:
    if(document.getElementById('editarBtn').disabled){

        //deshabilita los botones cuando está en modo edición
        document.getElementById('sig').disabled=true;
        document.getElementById('ant').disabled=true;
    
    //cuando no estamos en el modo editar
    }else{

        //dehabilita el botón si se llega al último
        if(index==tabla.length-1){
            document.getElementById('sig').disabled=true;
        }else{
            document.getElementById('sig').disabled=false;
        }

        //igual pero con el primero
        if(index==1){
            document.getElementById('ant').disabled=true;
        }else{
            document.getElementById('ant').disabled=false;
        }
    }

}

function colorSeleccionado(){

    //borrar resaltado anteriores
    for(i=0 ; i<document.getElementById('tablaP').rows.length ; i++){

        if(document.getElementById('tablaP').rows[i].className == "resaltado"){
            document.getElementById('tablaP').rows[i].classList.remove("resaltado")
        }

    }

    if(index==tabla.length){

        //para cambiar de color la fila seleccionada
        document.getElementById('tablaP').rows[index-1].setAttribute("class", "resaltado")

    }else{

        //para cambiar de color la fila seleccionada
        document.getElementById('tablaP').rows[index].setAttribute("class", "resaltado")

    }



}

function actualizarIds(){

    for(i=0;i<(tabla.length-1);i++){
        document.getElementById("seleccion")[i].id = (i+1); //asignamos las Id
    }

    if (index==0){index=1}

    //escribir la tabla
    escribirTabla()

    //comprobamos si hay que dehabilitar algún botón
    comprobarBotones()

    //cambiamos el color al que está seleccionado
    colorSeleccionado()

    //actualizamos información de usuario
    if(index!=0){ //en caso de no ser la cabecera de la tabla:

        document.getElementById('spanNombre').value=tabla[index][0];
        document.getElementById('spanApellidos').value=tabla[index][1];
        document.getElementById('spanEdad').value=tabla[index][2];
        document.getElementById('spanDireccion').value=tabla[index][3];

    }else{}
}

function borrarTodo(){

    let text = "¿Seguro que deseas borrar todo?";
    if (confirm(text) == true) {

        tabla.splice(1,tabla.length);

        index=0
    
        //escribir la tabla
        escribirTabla()
    
        //actualizamos información de usuario
        if(index!=0){ //en caso de no ser la cabecera de la tabla:
    
            document.getElementById('spanNombre').value=tabla[index][0];
            document.getElementById('spanApellidos').value=tabla[index][1];
            document.getElementById('spanEdad').value=tabla[index][2];
            document.getElementById('spanDireccion').value=tabla[index][3];
    
        }else{
    
            document.getElementById('spanNombre').value="";
            document.getElementById('spanApellidos').value="";
            document.getElementById('spanEdad').value="";
            document.getElementById('spanDireccion').value="";
    
        }
    
        //para borrar todas las opciones
        while (document.getElementById("seleccion").options.length > 0) {                
            document.getElementById("seleccion").remove(0);
        }

    } else {
    }

}