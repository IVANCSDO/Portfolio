function carga(){


    for(i=0;i<estilos.length;i++){

        contenido += ('<h3 id=Tit'+i+'>'+estilos[i][0]+'</h3>');

        //color pick para el color
        if(i==0){
            contenido += ('Selecciona el color <input type="color" value="#b3a24d" id="color" ><br><br>');

            contenido += '<div class="lorem" id="textoColor">'

            for(a=0;a!=4;a++){
                contenido += 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!'
            }
            
            contenido += '</div>'

        }

        //fuentes
        if(i==1){

            contenido += ('<div class="cosas2"> Selecciona la familia  <select id="familiaFuente">  <option value="1">Comic Sans</option> <option value="2">Times New Roman</option>  <option value="3">Arial</option>  <option value="4">Calibri</option>   </select> <br> <br>');
            contenido += ('<div class="cosas2"> Selecciona el tamaño:  <br>  <input onInput="nuevoTamano(5)" type="radio" id="xx-small" name="size" value="xx-small"><label for="xx-small">xx-small</label>   <input onInput="nuevoTamano(6)" type="radio" id="x-small" name="size" value="x-small"> <label  for="x-small">x-small</label> <input onInput="nuevoTamano(7)" type="radio" id="small" name="size" value="small ">      <label for="small">small</label>  <input onInput="nuevoTamano(8)" type="radio" id="medium" name="size" value="medium" checked> <label for="medium">medium</label>  <input onInput="nuevoTamano(9)" type="radio" id="large" name="size" value="large"> <label for="large">large</label> <input onInput="nuevoTamano(10)" type="radio" id="x-large" name="size" value="x-large "><label for="x-large">x-large</label><input  onInput="nuevoTamano(11)" type="radio" id="xx-large" name="size" value="xx-large ">  <label for="xx-large">xx-large</label> <br> <br>  <input onInput="nuevoTamanoSlider()" type="range" id="rangeSize" min="1" max="100"> <span id="tamanoTextoPx">0px</span>  </div>               <br> <br>');
            contenido += ('<div class="cosas2"> Selecciona el Weight: <br> <input onInput="nuevoWeight(12)" type="radio" id="normalWeight" name="weight" value="normal" checked> <label for="normalWeight">normal</label> <input onInput="nuevoWeight(13)" type="radio" id="boldWeight" name="weight" value="bold"> <label for="boldWeight">bold</label> <input onInput="nuevoWeight(14)" type="radio" id="lighterWeight" name="weight" value="lighter "> <label for="lighterWeight">lighter</label> <input onInput="nuevoWeight(15)" type="radio" id="bolderWeight" name="weight" value="bolder"> <label for="bolderWeight">bolder</label> <br> <br> <input onInput="weightSlider()" type="range" id="rangeWeight" min="1" max="1000"> <span id="tamanoWeight">0</span>   </div>  <br>');
            contenido += ('<div class="cosas2"> Selecciona el estilo: <br> <input onInput="seleccionarEstilo(16)" type="radio" id="normalStyle" name="style" value="normal" checked> <label for="normalStyle">normal</label> <input onInput="seleccionarEstilo(17)" type="radio" id="italicStyle" name="style" value="italicStyle"> <label for="italicStyle">italic</label> <input onInput="seleccionarEstilo(18)" type="radio" id="obliqueStyle" name="style" value="obliqueStyle "> <label for="obliqueStyle">oblique</label> <br> <br> </div>');
            contenido += ('<div class="cosas2"> Selecciona la variante: <br> <input onInput="seleccionVariante(19)" type="radio" id="normalVariant" name="Variant" value="normal" checked> <label for="normalVariant">normal</label> <input onInput="seleccionVariante(20)" type="radio" id="no-common-ligaturesProportional-nums" name="Variant" value="no-common-ligatures proportional-nums"> <label for="no-common-ligaturesProportional-nums">no-common-ligatures proportional-nums</label> <input onInput="seleccionVariante(21)" type="radio" id="common-ligaturesTabular-nums" name="Variant" value="common-ligatures tabular-nums "> <label for="common-ligaturesTabular-nums">common-ligatures tabular-nums</label> <input onInput="seleccionVariante(22)" type="radio" id="small-capsSlashed-zero" name="Variant" value="small-caps slashed-zero"> <label for="small-capsSlashed-zero">small-caps slashed-zero</label> <br> <br> <br>  <br> </div>');

            contenido += ('<div class="lorem" id="textoFuente">')
            for(a=0;a!=4;a++){
                contenido += ('Lorem ipsum dolor sit amet consectetur adipisicing elit. 1234567890 Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            contenido += ('</div> ')
                        contenido += ('</div>')

        }

        //alineamiento
        if(i==2){

            contenido += ('<div class="cosas2"> Selecciona el justificado: <br> <input onInput="seleccionJustificado(1)" type="radio" id="startJust" name="just" value="start" checked> <label for="startJust">start</label> <input onInput="seleccionJustificado(2)" type="radio" id="endJust" name="just" value="end"> <label for="endJust">end</label> <input onInput="seleccionJustificado(3)" type="radio" id="centerJust" name="just" value="center"> <label for="centerJust">center</label> <input onInput="seleccionJustificado(4)" type="radio" id="justificadoJust" name="just" value="justificado"> <label for="justificadoJust">justificado</label> <br> <br></div>');
  
            contenido += ('<div class="lorem" id="textoAlineamiento">')
            for(a=0;a!=4;a++){
                contenido += ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam THE GAME dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            contenido += ('</div>')
  
        }
        

        //altura
        if(i==3){

            contenido += 'Elige la altura: <br>'

            for(j=1;j!=estilos[3].length;j++){
                contenido += ('<input type="range" onInput="nuevoTamano'+estilos[3][j]+'()" id="range'+estilos[3][j]+'" min="1" max="100" value="1"> <span id="'+estilos[3][j]+'Texto">0 '+estilos[3][j]+'</span> <br>')
            }
            contenido += (' <br>    <div class="lorem" id="textoAltura">')

            for(a=0;a!=4;a++){
                contenido += ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            contenido += ('</div>')

        }

        

        //a partir de aquí si se generan en plan guay

        //text decoration
        if(i==4){

            contenido += 'Elige la decoración: <br>'


            for(z=1;z!=estilos[4].length;z++){
                contenido += ('<input type="radio" name="deco" onInput="nuevoDecoration('+z+')" id="'+estilos[4][z]+'"><label for="'+estilos[4][z]+'">'+estilos[4][z]+'</label> ')
            }

            contenido += '<br> <br> Color: <br>'

            contenido += ('<input type="color" value="#fff0f0"  onInput="decoracion()" id="colorDecoration" ></input> <br> <br> Línea: <br>')

            contenido += ('<input type="checkbox" onInput="decoracion()" checked id="under"><label for="under">underline</label>')

            contenido += ('<input type="checkbox" onInput="decoracion()" id="top"><label for="top">overline</label> ')

            contenido += ('<input type="checkbox" onInput="decoracion()" id="line"><label for="line">inline</label> <br><br>')


            contenido += (' <br>    <div class="lorem" style="text-decoration: underline; line-height: 2;" id="textoDecoration">')

            
            for(a=0;a!=4;a++){
                contenido += ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            contenido += ('</div>')

        }


        //text transform
        if(i==5){

            contenido += 'Elige la transformación: <br>'


            for(z=1;z!=estilos[5].length;z++){
                contenido += ('<input type="radio" name="trans" onInput="nuevoTransformacion('+z+')" id="'+estilos[5][z]+'"><label for="'+estilos[5][z]+'">'+estilos[5][z]+'</label> ')
            }

            contenido += (' <br>  <br>  <div class="lorem" id="textoTransformacion">')

            
            for(a=0;a!=4;a++){
                contenido += ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            contenido += ('</div>')

        }

        //vertical align
        if(i==6){

            contenido += 'Elige el alineamiento: <br>'

            for(z=1;z!=estilos[6].length;z++){
                if(z==2){contenido += ('<input type="radio" name="trans" onInput="nuevoVertical('+z+')" id="topV"><label for="topV">top</label> ')
            }else{
                contenido += ('<input type="radio" name="trans" onInput="nuevoVertical('+z+')" id="'+estilos[6][z]+'"><label for="'+estilos[6][z]+'">'+estilos[6][z]+'</label> ')
            }
            }

            contenido += (' <br>  <br>  <div class="lorem" id="textoVertical">')

            contenido += ('Anhedonia (☞ﾟヮﾟ)☞<img id="verticalAl" style="width: 20%;" src="media/png.png" >');
            
            contenido += ('</div>')

        }

        
        //text indent
        if(i==7){

            contenido += 'Elige el indent: <br>  <input type="number" onInput="nuevoIndent()" id="valorIndent" value="0">'

            for(z=1;z!=estilos[7].length;z++){
                if(z==1){ contenido += ('<input type="radio" checked name="indent" onInput="nuevoIndent('+z+')" id="numeroI"><label for="numeroI">None</label>')
            }else{
                contenido += ('<input type="radio" name="indent" onInput="nuevoIndent('+z+')" id="'+estilos[7][z]+'"><label for="'+estilos[7][z]+'">'+estilos[7][z]+'</label> ')
            }
            }

            contenido += (' <br>  <br>  <div class="lorem" id="textoIndent">')

            for(a=0;a!=4;a++){
                contenido += ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            contenido += ('</div>')            
            contenido += ('</div>')

        }

        //letter spacing
        if(i==8){

            contenido += 'Elige el indent: <br>  <input type="number" onInput="spacingF()" id="valorSpacing" value="0">'

            for(z=1;z!=estilos[8].length;z++){
                contenido += ('<input type="radio" name="spacing" onInput="spacingF()" id="'+estilos[8][z]+'Spacing"><label for="'+estilos[8][z]+'Spacing">'+estilos[8][z]+'</label> ')
            }

            contenido += (' <br>  <br>  <div class="lorem" id="textoSpacing">')

            for(a=0;a!=4;a++){
                contenido += ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidunt ipsum perferendis molestias, architecto, ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');
            }
            contenido += ('</div>')            
            contenido += ('</div>')

        }


        // white Space
        if(i==9){

            contenido += 'Elige el espacio: <br>'


            for(z=1;z!=estilos[9].length;z++){
                contenido += ('<input type="radio" name="space" onInput="spaceG('+z+')" id="'+estilos[9][z]+'Space"><label for="'+estilos[9][z]+'Space">'+estilos[9][z]+'</label> ')
            }

            contenido += (' <br>  <br>  <div class="lorem" id="textoSpace">')


                contenido += ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam incidas, architecto: ut quisquam dolor quo itaque repudiandae, earum cum eaque. Reprehenderit magnam dolore dignissimos vel autem!');

            contenido += ('</div>')

        }

    }

    contenido += ('</div>');


    document.getElementById('texto').innerHTML = contenido

    pie = ('¿Qué es "The Third Eye Foundation? <br> <br> ¿Respuesta corta? Un hombre que hace música electrónica "rara" que me gusta mucho. Respuesta oficial: <br> <br> Electronic/illbient project from Bristol, UK. Started in 1994 by Matt Elliott as a solo project. For a short time from 1996 to 1997 was expanded to a duo with Debbie Parsons (aka Foehn) on vocals. Since 1997 again became a solo project of Matt Elliott. <br> <br> La página está inspirada en la estética del disco homónimo, aquí lo tenéis, no recomiendo escucharlo realmente:  (Baja el volumen antes de darle al play) <br> <br> <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/45Hcr8Vw85jOa3MHGxU39N?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')

    document.getElementById('pie').innerHTML = pie


    cambio()

}