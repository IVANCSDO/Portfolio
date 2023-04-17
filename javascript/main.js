$(document).ready(function() {
    // agrega un escuchador de eventos click a todos los elementos a con la clase link
    $('a.link, a.linkActive').click(function() {
      // quita la clase linkActive de todos los elementos a al cargar la página
      $('a.linkActive').toggleClass('linkActive link');
      // cambia la clase del elemento clickeado entre link y linkActive
      $(this).toggleClass('link linkActive');
  
      switch(document.querySelector(".linkActive").innerHTML){
        case "Inicio":
          generateMain()
        break;
        
        case "Proyectos":
          loadProyect()
        break;

        case "Sobre mí":
          loadAboutMe()
        break;

        case "Otros":
          loadOthers
        break;
  
        default:
        break
      }
    });
});

var mainImage,
  content,
  contenedor

$(document).ready(function() {
  mainImage = $("#centralImg");
  content = $("#content");
  generateMain()

});
  

  // ----------Generar páginas



  // ------------MAIN---------------
function generateMain() { 

  mostrarImg()
  content.html(main);

  loadHighlights()
  loadLastWorks()

}

function mostrarImg() { 
  mainImage.prop("hidden", false);
  mainImage.css("display", "flex");
}

function ocultarImg() { 
  mainImage.prop("hidden", true);
  mainImage.css("display", "none");
}



function loadHighlights() { 

  for(i=0; i!=destacados.length; i++){
    elemento("conjuntoDestacados").innerHTML+=`
      <a draggable="false" href="${destacados[i].proyect}" target="_blank"  class="tarjeta" id="destacado${i}">
      <h3>${destacados[i].titulo}</h3>
      <p>${destacados[i].contenido}</p>
      <img src="${destacados[i].image}">
      </a>
      `
      ;
  }

}

function loadLastWorks() { 

  var contador=0

  for (var proyecto in proyects) {
    
    elemento("ConjuntoUltimosTrabajos").innerHTML+=`
    <a draggable="false" href="${proyects[proyecto].proyect}" target="_blank" class="tarjeta" id="ultimosTrab${contador}">
    <h3>${proyects[proyecto].titulo}</h3>
    <p>${proyects[proyecto].contenido}</p>
    <img src="${proyects[proyecto].image}">
    </a>
    `;
    contador++;
  }

}


  // ------------PROYECTOS---------------
function loadProyect() { 

  ocultarImg()
  content.html(proyectsPage);
  loadProyectCards()

}


function loadProyectCards() { 

  var contador=0

  for (var proyecto in proyects) {
    
    elemento(proyects[proyecto].fuente).innerHTML+=`
    <div draggable="false" href="${proyects[proyecto].proyect}" target="_blank" class="tarjeta2" id="ultimosTrab${contador}">
    <h3>${proyects[proyecto].titulo}</h3>
    <p>${proyects[proyecto].contenido}</p>
    <img src="${proyects[proyecto].image}">
    </div>
    `;
    contador++;
  }

}




  // ------------SOBRE MI---------------
function loadAboutMe() { 

  ocultarImg()
  content.html("");

}
  

  // ------------OTROS---------------
function loadOthers() { 

  ocultarImg()
  content.html("");

}
  


// -----------MISC----------------

// scroll lateral
