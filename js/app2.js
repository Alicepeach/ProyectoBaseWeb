var correctas = 0;

    function incisos(numeritoAleatorio) {
      var posibilidades = "";
      for( var i = 0; i < arregloDeRespuestas[numeritoAleatorio].length; i ++){
        posibilidades += '<input type="radio" name = "preguntitas'+numeritoAleatorio+'" value= "'+i+'"><label>'+ arregloDeRespuestas[numeritoAleatorio][i] + '</label><br>';
      }
      return posibilidades;
    }
/*'21.  ¿Qué establece el postulado III de Peano?', '22.  ¿Qué establece el postulado IV de Peano?','23.  ¿Cuál es la primera propiedad que establece el postulado V de Peano?', '24. ¿Cuál es la segunda propiedad que establece el postulado V de Peano?','25.  ¿Cuál es el segundo teorema de la inducción matemática?', '26.  ¿Cuál es la primera propiedad del segundo teorema de inducción?', '27.  ¿Cuál es la segunda propiedad del segundo teorema de inducción?',  '28. Los dos principios de inducción son _____ ', '29. ¿En qué área de las matemáticas discretas y la computación se utiliza la inducción matemática?', '30. ¿Cuál de los siguientes ejemplos se puede demostrar por medio de la inducción matemática?', '31.  ¿Cuál es el primer paso del método para probar el teorema de división de Euclides?', '32. ¿Cuál es el segundo paso del método para probar el teorema de división de Euclides?', '33.  ¿Cuál es el tercer paso del método para probar el teorema de división de Euclides?', '34. ¿Cuál es el cuarto paso del método para probar el teorema de división de Euclides?', '35.  ¿Qué es la recursividad?', '36.  ¿Cuál es la similitud entre la recursividad utilizada en la implementación y la inducción?', '37. ¿Cuáles son las dos notaciones que se utilizan principalmente en la inducción?','38.  ¿Qué representa la notación sigma?', '39. ¿Cómo se representa una sucesión de una suma?', '40.  ¿Qué representa la notación del producto?', '41.  ¿Cuál es la notación correcta sigma?', '42. ¿Con qué letra griega se representa el producto?', '43. ¿Cuál es la notación correcta del producto?', '44.  ¿Cómo se representa un producto desarrollado?', '45.  ¿En dónde tienen aplicaciones la inducción matemática?' '46.  ¿Cuál es la representación de una serie informalmente?', '47. ¿Qué es una serie?', '48. ¿En qué consiste el estudio de las series?','49.  ¿Cuál es uno de los métodos que más se usan en las demostraciones matemáticas?', '50. Después de aplicar todos los pasos de la inducción matemática, ¿qué método se utiliza para llegar al resultado final?'*/
    var arregloDePreguntas = ['1. ¿Quién introdujo por primera vez el termino de inducción matemática?', '2.  ¿En qué año se introdujo por primera vez la inducción matemática?', '3. ¿Qué es la inducción matemática?', '4.  ¿Para qué se utiliza en la computación la inducción matemática?', '5. ¿Cuáles son los tres tipos de primigenios?', '6.  ¿En qué consiste la deducción?', '7.  ¿En qué consiste una inducción?', '8. ¿En qué consiste la abducción?', '9.  ¿Qué establece el principio de inducción matemática?', '10. ¿Cuál es el primer paso por demostrar en una inducción matemática?', '11. ¿Cuál es el segundo paso por demostrar en una inducción matemática?','12. ¿Cómo se le conoce al primer paso de la inducción?', '13. ¿Cómo se le conoce al segundo paso de la inducción?', '14.  ¿Cuál es el error más común al realizar una inducción matemática?', '15.  ¿En qué año Peano público “Principios de Aritmética”?', '16.  ¿En qué idioma publicó sus primeros axiomas?', '17. ¿En qué idioma publicó la modificación de sus axiomas?', '18. ¿Cuántos son los axiomas de Peano?', '25. ¿Cuál es el segundo teorema de la inducción matemática?', '26.  ¿Cuál es la primera propiedad del segundo teorema de inducción?'];

    var arregloDeRespuestas = [
    ['Mauloryco', 'Aristóteles', 'Pascal', 'Mauloricco'],['1575','1875','1755','1577'],['Una fórmula matemática','Un razonamiento lógico-matemático','Una proposición', 'Una conjetura matemática'],['Comparar eficiencia de algoritmos', 'Demostrar propiedades acerca de la complejidad','Programar sin errores','En el método algebraico de la lógica proposicional'], ['Deducción, inferencia e inducción','Deducción, abducción e inferencia','Deducción, inducción y abducción','Inducción, abducción y conjetura'],['Implica la inferencia de reglas a partir de casos particulares','Establecer una hipótesis y conjeturas para después demostrarlas','Deriva conclusiones a partir de un análisis basado en argumentos lógicos','Es el procedimiento general para llevar a cabo una prueba' ], ['Implica la inferencia de reglas a partir de casos particulares','Establecer una hipótesis y conjeturas para después demostrarlas','Deriva conclusiones a partir de un análisis basado en argumentos lógicos','Es el procedimiento general para llevar a cabo una prueba'], ['Es el procedimiento general para llevar a cabo una prueba','Implica la inferencia de reglas a partir de casos particulares','Establecer una hipótesis y conjeturas para después demostrarlas', 'Deriva conclusiones a partir de un análisis basado en argumentos lógicos'],['P(n) es verdadera para todas las n => k', 'P(n) es falsa para todas las n=>k', 'P(n) es verdadera para todas las n=>(k+1)', 'P(n) es verdadera para todas las n<=k'], ['P(k) es menor que k', 'P(k) es verdadera', 'P(k) es mayor a k', 'P(k) es menor que (n+1)'], ['Para todas las n<=k, siempre que P(n) sea verdadera, se sigue que P(n+1) es verdadera', 'Para todas las n=>k, siempre que P(n) sea verdadera, se sigue que P(n-1) es verdadera', 'Para todas las n=>eq k, siempre que P(n) sea verdadera, se sigue que P(n+1) es verdadera', 'Para todas las n<= k, siempre que P(n) sea verdadera, se sigue que P(n+1) es verdadera'], ['Paso primero', 'Primer paso', 'Paso básico', 'Paso uno'],  ['Paso deductivo', 'Paso inductivo', 'Paso  segundo', 'Segundo paso'], ['Realizar mal algún paso algebraico', 'Comenzar afirmando que P(n+1) es verdadero', 'Sustituir la formula con (n+2)', 'No se tienen errores con este método'],  ['1888','1988', '1989', '1889'],  ['Frances', 'Latín', 'Italiano', 'Alemán'],   ['Francés', 'Latín', 'Italiano', 'Alemán'], ['Dos', 'Cinco', 'Nueve', 'Trece'],  ['Para todos los enteros positivos n, S (n) es verdadero', 'Para todos los enteros positivos n, S (n) es mayor', 'Para todos los enteros positivos n, S (n) no se cumple', 'Para todos los enteros positivos n, S (n) es falso'], ['S (1) es equivalente a S (2)', 'S (1) es verdadero', 'S (1) debe sumarse al primer teorema', 'S (1) es falso']];    
    var arregloDeIncisosRespuestasCorrectas= ['0', '0', '1', '1', '2','2', '0', '2', '0', '1','2', '2', '1', '1', '3', '1', '0', '2', '2', '3'];

    /*Validación de preguntas aleatorias no repetidas*/
    var cantidadNumeros = arregloDePreguntas.length;
    var arregloDeAleatorios = []
    while(arregloDeAleatorios.length < cantidadNumeros ){
      var numeroAleatorio = Math.floor(Math.random()*cantidadNumeros);
      var existe = false;
      for(var i=0;i<arregloDeAleatorios.length;i++){
        if(arregloDeAleatorios [i] == numeroAleatorio){
          existe = true;
          break;
        }
      }
      if(!existe){
        arregloDeAleatorios[arregloDeAleatorios.length] = numeroAleatorio;
      }

    }

  /*document.write("números aleatorios : " + arregloDeAleatorios);*/

    var aleatorio1 = arregloDeAleatorios[0];
    var aleatorio2 = arregloDeAleatorios[1];
    var aleatorio3 = arregloDeAleatorios[2];
    var aleatorio4 = arregloDeAleatorios[3];
    var aleatorio5 = arregloDeAleatorios[4];
    var aleatorio6 = arregloDeAleatorios[5];
    var aleatorio7 = arregloDeAleatorios[6];
    var aleatorio8 = arregloDeAleatorios[7];
    var aleatorio9 = arregloDeAleatorios[8];
    var aleatorio10 = arregloDeAleatorios[9];

    document.getElementById('pregunta1').innerHTML = arregloDePreguntas[aleatorio1];
    document.getElementById('respuestas1').innerHTML = incisos(aleatorio1);

    document.getElementById('pregunta2').innerHTML = arregloDePreguntas[aleatorio2];
    document.getElementById('respuestas2').innerHTML = incisos(aleatorio2);

    document.getElementById('pregunta3').innerHTML = arregloDePreguntas[aleatorio3];
    document.getElementById('respuestas3').innerHTML = incisos(aleatorio3);

    document.getElementById('pregunta4').innerHTML = arregloDePreguntas[aleatorio4];
    document.getElementById('respuestas4').innerHTML = incisos(aleatorio4);

    document.getElementById('pregunta5').innerHTML = arregloDePreguntas[aleatorio5];
    document.getElementById('respuestas5').innerHTML = incisos(aleatorio5);

    document.getElementById('pregunta6').innerHTML = arregloDePreguntas[aleatorio6];
    document.getElementById('respuestas6').innerHTML = incisos(aleatorio6);

    document.getElementById('pregunta7').innerHTML = arregloDePreguntas[aleatorio7];
    document.getElementById('respuestas7').innerHTML = incisos(aleatorio7);

    document.getElementById('pregunta8').innerHTML = arregloDePreguntas[aleatorio8];
    document.getElementById('respuestas8').innerHTML = incisos(aleatorio8);

    document.getElementById('pregunta9').innerHTML = arregloDePreguntas[aleatorio9];
    document.getElementById('respuestas9').innerHTML = incisos(aleatorio9);

    document.getElementById('pregunta10').innerHTML = arregloDePreguntas[aleatorio10];
    document.getElementById('respuestas10').innerHTML = incisos(aleatorio10);

    var correctas = 0;

    function calificacion(arregloAleatorios){
      for (var i = 0; i < arregloAleatorios.length; i++) {
        var respuesta = $("input[name=preguntitas"+arregloAleatorios[i]+"]:checked").val();
        if (respuesta == arregloDeIncisosRespuestasCorrectas[arregloAleatorios[i]]){
          correctas++;
        }
      }
      alert('tu calificación es:'+correctas);
      correctas =0 ;
    }

    function comprobar(){
      calificacion(arregloDeAleatorios);

    }

