var main=`
<div id="destacado">
    <h2>Destacados</h2>
    <div class="contenedorTarjetas" id="conjuntoDestacados">
    </div>
</div>
<div id="ultimosTrabajos">
    <h2>Últimos trabajos</h2>
    <div  class="contenedorTarjetas" id="ConjuntoUltimosTrabajos">
    </div>
</div>
`

var proyectsPage=`
<div>
    <h2>Proyectos personales</h2>
    <div class="contenedorProyectos" id="proyectosPersonales">
    </div>
</div>
<div>
    <h2>Primer curso D.A.W [22/23]</h2>
    <div  class="contenedorProyectos" id="primerCursoDAW">
    </div>
</div>
`

var proyects={

    //los más recientes primero

    dark:{
        titulo:"Propiedades de texto en CSS",
        contenido:`Un programa que muestra las distintas propiedades que se pueden aplicar al texto en CSS.`,
        image:"media/texto.png",
        proyect:"proyects/06.PropiedadesTexto/index.html",
        fuente:"primerCursoDAW"
    },

    formulario2:{
        titulo:"Formulario Junta de Andalucía",
        contenido:`Práctica sobre el registro y manejo de datos en JavaScript.`,
        image:"media/junta.png",
        proyect:"proyects/07.EstructurasDeDatos/index.html",
        fuente:"primerCursoDAW"
    },

    imagen:{
        titulo:"La imagen del espejo",
        contenido:`Una especie de aventura interactiva del estilo "Elige tu camino". Se trata de un trabajo grupal, mi primer contacto con la gestión de un grupo de trabajo.`,
        image:"media/muerte.png",
        proyect:"proyects/03.LaImagenDelEspejo/index.html",
        fuente:"primerCursoDAW"
    },

    formulario1:{
        titulo:"My hero world",
        contenido:`Un formulario de registro en el cual debíamos marcar de forma aleatoria las preferencias de publicidad entre 5 opciones.`,
        image:"media/hero.png",
        proyect:"proyects/06. Formulario/index.html",
        fuente:"primerCursoDAW"
    },

    chessnt:{
        titulo:"Chessn't",
        contenido:`Un programa con estética low-poly en el que puedes "jugar" al ajedrez.`,
        image:"media/chessnt.png",
        proyect:"proyects/05.TableroAjedrez/index.html",
        fuente:"primerCursoDAW"
    },

    dados2:{
        titulo:"Dice So Nice",
        contenido:"Una interfaz para lanzar dados con un log.",
        image:"media/dicesonice.png",
        proyect:"proyects/03.DiceSoNice/index.html",
        fuente:"primerCursoDAW"
    },
    
    dados1:{
        titulo:"Da-Dos",
        contenido:"Mi primer encuentro con HTML, los números aletorios y CSS.",
        image:"media/dados.png",
        proyect:"proyects/01.EjercicioCatálogo/menu.html",
        fuente:"primerCursoDAW"
    }    

}

var destacados=[

    proyects.dark,
    proyects.formulario2,
    proyects.imagen,
    proyects.chessnt 

]
