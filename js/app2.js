var correctas = 0;

    function incisos(numeritoAleatorio) {
      var posibilidades = "";
      for( var i = 0; i < arregloDeRespuestas[numeritoAleatorio].length; i ++){
        posibilidades += '<input type="radio" name = "preguntitas'+numeritoAleatorio+'" value= "'+i+'"><label>'+ arregloDeRespuestas[numeritoAleatorio][i] + '</label><br>';
      }
      return posibilidades;
    }
/*'21.  ¿Qué establece el postulado III de Peano?', '22.  ¿Qué establece el postulado IV de Peano?','23.  ¿Cuál es la primera propiedad que establece el postulado V de Peano?', '24. ¿Cuál es la segunda propiedad que establece el postulado V de Peano?','25.  ¿Cuál es el segundo teorema de la inducción matemática?', '26.  ¿Cuál es la primera propiedad del segundo teorema de inducción?', '27.  ¿Cuál es la segunda propiedad del segundo teorema de inducción?',  '28. Los dos principios de inducción son _____ ', '29. ¿En qué área de las matemáticas discretas y la computación se utiliza la inducción matemática?', '30. ¿Cuál de los siguientes ejemplos se puede demostrar por medio de la inducción matemática?', '31.  ¿Cuál es el primer paso del método para probar el teorema de división de Euclides?', '32. ¿Cuál es el segundo paso del método para probar el teorema de división de Euclides?', '33.  ¿Cuál es el tercer paso del método para probar el teorema de división de Euclides?', '34. ¿Cuál es el cuarto paso del método para probar el teorema de división de Euclides?', '35.  ¿Qué es la recursividad?', '36.  ¿Cuál es la similitud entre la recursividad utilizada en la implementación y la inducción?', '37. ¿Cuáles son las dos notaciones que se utilizan principalmente en la inducción?','38.  ¿Qué representa la notación sigma?', '39. ¿Cómo se representa una sucesión de una suma?', '40.  ¿Qué representa la notación del producto?', '41.  ¿Cuál es la notación correcta sigma?', '42. ¿Con qué letra griega se representa el producto?', '43. ¿Cuál es la notación correcta del producto?', '44.  ¿Cómo se representa un producto desarrollado?', '45.  ¿En dónde tienen aplicaciones la inducción matemática?' '46.  ¿Cuál es la representación de una serie informalmente?', '47. ¿Qué es una serie?', '48. ¿En qué consiste el estudio de las series?','49.  ¿Cuál es uno de los métodos que más se usan en las demostraciones matemáticas?', '50. Después de aplicar todos los pasos de la inducción matemática, ¿qué método se utiliza para llegar al resultado final?'*/
    var arregloDePreguntas = ['1. ¿Quién introdujo por primera vez el termino de inducción matemática?', '2.  ¿En qué año se introdujo por primera vez la inducción matemática?', '3. ¿Qué es la inducción matemática?', '4.  ¿Para qué se utiliza en la computación la inducción matemática?', '5. ¿Cuáles son los tres tipos de primigenios?', '6.  ¿En qué consiste la deducción?', '7.  ¿En qué consiste una inducción?', '8. ¿En qué consiste la abducción?', '9.  ¿Qué establece el principio de inducción matemática?', '10. ¿Cuál es el primer paso por demostrar en una inducción matemática?', '11. ¿Cuál es el segundo paso por demostrar en una inducción matemática?','12. ¿Cómo se le conoce al primer paso de la inducción?', '13. ¿Cómo se le conoce al segundo paso de la inducción?', '14.  ¿Cuál es el error más común al realizar una inducción matemática?', '15.  ¿En qué año Peano público “Principios de Aritmética”?', '16.  ¿En qué idioma publicó sus primeros axiomas?', '17. ¿En qué idioma publicó la modificación de sus axiomas?', '18. ¿Cuántos son los axiomas de Peano?','19. ¿Qué establece el axioma I de Peano?', '20.  ¿Qué establece el postulado II de Peano?','21.  ¿Qué establece el postulado III de Peano?','22. ¿Qué establece el postulado IV de Peano?','23.  ¿Cuál es la primera propiedad que establece el postulado V de Peano?','24.  ¿Cuál es la segunda propiedad que establece el postulado V de Peano?','25. ¿Cuál es el segundo teorema de la inducción matemática?', '26.  ¿Cuál es la primera propiedad del segundo teorema de inducción?', '28. Los dos principios de inducción son _____ ','29.  ¿En qué área de las matemáticas discretas y la computación se utiliza la inducción matemática?','30.  ¿Cuál de los siguientes ejemplos se puede demostrar por medio de la inducción matemática?','31. ¿Cuál es el primer paso del método para probar el teorema de división de Euclides?','32.  ¿Cuál es el segundo paso del método para probar el teorema de división de Euclides?','33. ¿Cuál es el tercer paso del método para probar el teorema de división de Euclides?','34.  ¿Cuál es el cuarto paso del método para probar el teorema de división de Euclides?','¿Qué es la recursividad?','36. ¿Cuál es la similitud entre la recursividad utilizada en la implementación y la inducción?','37.  ¿Cuáles son las dos notaciones que se utilizan principalmente en la inducción?','38.  ¿Qué representa la notación sigma?','39.  ¿Cómo se representa una sucesión de una suma?','40. ¿Qué representa la notación del producto?','41. ¿Cuál es la notación correcta sigma?','42.  ¿Con qué letra griega se representa el producto?','43.  ¿Cuál es la notación correcta del producto?','44. ¿Cómo se representa un producto desarrollado?','45. ¿En dónde tienen aplicaciones la inducción matemática?','46.  ¿Cuál es la representación de una serie informalmente?','47.  ¿Qué es una serie?','48.  ¿En qué consiste el estudio de las series?','49.  ¿Cuál es uno de los métodos que más se usan en las demostraciones matemáticas?','50.  Después de aplicar todos los pasos de la inducción matemática, ¿qué método se utiliza para llegar al resultado final?'];

    var arregloDeRespuestas = [
      ['Mauloryco', 'Aristóteles', 'Pascal', 'Mauloricco'],
      ['1575','1875','1755','1577'],
      ['Una fórmula matemática','Un razonamiento lógico-matemático','Una proposición', 'Una conjetura matemática'],
      ['Comparar eficiencia de algoritmos', 'Demostrar propiedades acerca de la complejidad','Programar sin errores','En el método algebraico de la lógica proposicional'],
      ['Deducción, inferencia e inducción','Deducción, abducción e inferencia','Deducción, inducción y abducción','Inducción, abducción y conjetura'],
      ['Implica la inferencia de reglas a partir de casos particulares','Establecer una hipótesis y conjeturas para después demostrarlas','Deriva conclusiones a partir de un análisis basado en argumentos lógicos','Es el procedimiento general para llevar a cabo una prueba' ],
      ['Implica la inferencia de reglas a partir de casos particulares','Establecer una hipótesis y conjeturas para después demostrarlas','Deriva conclusiones a partir de un análisis basado en argumentos lógicos','Es el procedimiento general para llevar a cabo una prueba'], 
      ['Es el procedimiento general para llevar a cabo una prueba','Implica la inferencia de reglas a partir de casos particulares','Establecer una hipótesis y conjeturas para después demostrarlas', 'Deriva conclusiones a partir de un análisis basado en argumentos lógicos'],
      ['P(n) es verdadera para todas las n => k', 'P(n) es falsa para todas las n=>k', 'P(n) es verdadera para todas las n=>(k+1)', 'P(n) es verdadera para todas las n<=k'],
      ['P(k) es menor que k', 'P(k) es verdadera', 'P(k) es mayor a k', 'P(k) es menor que (n+1)'],
      ['Para todas las n<=k, siempre que P(n) sea verdadera, se sigue que P(n+1) es verdadera', 'Para todas las n=>k, siempre que P(n) sea verdadera, se sigue que P(n-1) es verdadera', 'Para todas las n=>eq k, siempre que P(n) sea verdadera, se sigue que P(n+1) es verdadera', 'Para todas las n<= k, siempre que P(n) sea verdadera, se sigue que P(n+1) es verdadera'],
      ['Paso primero', 'Primer paso', 'Paso básico', 'Paso uno'],
      ['Paso deductivo', 'Paso inductivo', 'Paso  segundo', 'Segundo paso'],
      ['Realizar mal algún paso algebraico', 'Comenzar afirmando que P(n+1) es verdadero', 'Sustituir la formula con (n+2)', 'No se tienen errores con este método'],
      ['1888','1988', '1989', '1889'],  
      ['Frances', 'Latín', 'Italiano', 'Alemán'],   
      ['Francés', 'Latín', 'Italiano', 'Alemán'], 
      ['Dos', 'Cinco', 'Nueve', 'Trece'],  
      ['1 pertenece a los reales', '1 que no pertenece a los reales', '1 que pertenece a los naturales', '1 que no pertenece a los naturales'],
      ['Para cada n que pertenece a los reales existe un único, n* que pertenece a los naturales llamado "Siguiente o sucesor de n".','Para cada n que no pertenece a los naturales existe un único, n* que pertenece a los naturales llamado "Siguiente o sucesor de n".','Para cada n que pertenece a los naturales existe un único, n* que pertenece a los naturales llamado "Antecesor de n".','Para cada n que pertenece a los naturales existe un único n* que pertenece a los naturales llamado "Siguiente o sucesor de n".'],
      ['Para cada n que pertenecea los naturales tiene que n ≠ 1.','  Para cada n que pertenece a los naturales tiene que n* ≠ 1.','Para cada n que pertenece a los reales tiene que n* ≠ 1','Para cada n que pertenece a los naturales tiene que n* ≠ 1'],
      [ 'Si m,n, pertenecen a los reales y m* = n* entonces m = n','Si m,n, pertenecen a los naturales y m* = n* entonces m = n','Si m,n, pertenecen a los naturales y m* = n* entonces m ≠ n','Si m,n, pertenecen a los naturales y m* = n* entonces m <= n'],
      ['1 pertenece a S','1 no pertenece a S','1 es <= que S','1 pertenece a Z'],
      ['S* Є S siempre que s Є S, es el mismo ℝ','S* = S siempre que s Є S, es el mismo N','S* Є S siempre que s <= S, es el mismo N','S* Є S siempre que s Є S, es el mismo N'],
      ['Para todos los enteros positivos n, S (n) es verdadero', 'Para todos los enteros positivos n, S (n) es mayor', 'Para todos los enteros positivos n, S (n) no se cumple', 'Para todos los enteros positivos n, S (n) es falso'],
      ['S (1) es equivalente a S (2)', 'S (1) es verdadero', 'S (1) debe sumarse al primer teorema', 'S (1) es falso'],  
      ['Para todos los enteros positivos n, si S (1) y S (2) y ... y S (n) son todos verdaderos, entonces S (n * 1) es verdadero.','Para todos los enteros positivos n, si S (1) y S (2) y ... y S (n) son todos verdaderos, entonces S ((k+1) + 1) es verdadero.','Para todos los enteros positivos n, si S (1) y S (2) y ... y S (n) son todos verdaderos, entonces S (n + 1) es verdadero.','Para todos los enteros positivos n, si S (1) y S (2) y ... y S (n) son todos verdaderos, entonces S (n - 1) es verdadero.'],
      ['Equivalentes','Totalmente diferentes','Una sumatoria','Un producto'],
      ['En la programación ','En los autómatas','En el desarrollo de software','Tiempo de ejecución o espacio utilizado en memoria'],
      ['Leyes de adición y multiplicación, conmutatividad y asociatividad','Ley de Ohm','Leyes de Kirchhoff','d. Autómatas finitos determinísticos'],
      ['Declaración de las variables que se quiere utilizar','Declaración de q(k) que se quiere demostrar','Probar para n=k+1','Determinar la hipótesis'],
      ['Suponer que es verdadero; entonces, debe haber una k más pequeña para la cual q (k) es falsa.','Suponer que es falso; entonces, debe haber una k más pequeña para la cual q (k) es verdadera.  ','Suponer que es falso; entonces, debe haber una k más pequeña para la cual q (k) es falsa.  ','Suponer que es falso; entonces, debe haber una k más grande para la cual q (k) es falsa.'],
      ['Asumir que q (k\'\) es verdadero para todos los k\'\ en los complejos','Asumir que q (k\'\) es falso para todos los k\'\ en el universo','Asumir que q (k\'\) es verdadero para todos los k\'\ en los reales','Asumir que q (k\'\) es verdadero para todos los k\'\ en el universo'],
      ['Derivar una prueba generadora de q (k)','Derivar una prueba generadora de q (k+1)', 'Derivar una prueba generadora de q (k)*q (1)','Derivar una prueba generadora de q (k)+q (1)'],
      ['Una técnica utilizada en programación que nos permite que un bloque de instrucciones se ejecute un cierto número de veces llamándose a sí mismo.','Una técnica utilizada en programación que nos permite sumar un determinado bloque de instrucciones','Una técnica utilizada en programación que nos permite ejecutar linealmente un bloque de instrucciones','Una técnica utilizada en programación que nos permite que un bloque de instrucciones se ejecute un cierto número de veces'],
      ['Son conmutativos','Ambos hablan de casos hipótesis y son circulares','Ambos hablan de casos básicos y a primera vista ambos pueden parecer circulares','No hay similitud entre ellos'],
      ['Notación sigma y producto','Notación del cociente y resta','Notación más/menos y producto','Notación del valor absoluto y sigma'],
      ['Un cociente de funciones','Una multiplicación de una cantidad arbitraria','Una resta de una cantidad','Una suma de varios sumandos, n o infinitos sumandos'],
      ['a+a+a+a+...+a','a(m)*a(m+1)*a(m+2)*a(m+3)*...*a(n)','a(m)+a(m+1)+a(m+2)+a(m+3)+...+a(n)','a(m)+a(m+n)+a(m+(n+1))+a(m+(n+2))+...+a(n+n)'],
      ['Un cociente de funciones','Una multiplicación de una cantidad arbitraria','Una resta de una cantidad','Una suma de varios sumandos, n o infinitos sumandos'],
      ['a+a+a+a+...+a','a(m)*a(m+1)*a(m+2)*a(m+3)*...*a(n)','a(m)+a(m+1)+a(m+2)+a(m+3)+...+a(n)','a(m)+a(m+n)+a(m+(n+1))+a(m+(n+2))+...+a(n+n)'],
      ['Alpha','Sigma','Pi mayúscula','Pi minúscula'],
      ['a+a+a+a+...+a','a(m)*a(m+1)*a(m+2)*a(m+3)*...*a(n)','a(m)+a(m+1)+a(m+2)+a(m+3)+...+a(n)','a(m)+a(m+n)+a(m+(n+1))+a(m+(n+2))+...+a(n+n)'],
      ['a+a+a+a+...+a','a(m)*a(m+1)*a(m+2)*a(m+3)*...*a(n)','a(m)+a(m+1)+a(m+2)+a(m+3)+...+a(n)','a(m)+a(m+n)+a(m+(n+1))+a(m+(n+2))+...+a(n+n)'],
      ['En la notación científica','En la programación','En las series y sucesiones','En el producto de funciones'],
      ['S = S1 + S2 + S3 + S4 +...','S = Sn + Sn + Sn + Sn +...','S = S(n+1) + S(n+2) + S3(n+3) + S4(n+4)+...','S = S1 <= S2 <= S3 <= S4 +...'],
      ['Una suma de un conjunto de fracciones','El resultado de una inducción matemática','Un producto de funciones matemáticas','La generalización de la noción de suma a los términos de una sucesión matemática'],
      ['Evaluación del producto de un número finito n de términos sucesivos','Evaluación de un solo número finito n ','Evaluación de la suma de un número finito n de términos sucesivos','Evaluación de la resta de un número finito n de términos sucesivos'],
      ['Método de los cuatro pasos','Regla de la cadena','Inducción matemática','Regla de la mano derecha'],
      ['Algebraico','Matemático','Inductivo','Recursivo']];


var arregloDeIncisosRespuestasCorrectas= ['0', '0', '1', '1', '2','2', '0', '2', '0', '1', '2', '2', '1', '1', '3', '1', '0', '2', '2', '3', '1', '1', '0', '3', '2', '3','2','0','3','0','1','2', '3', '0', '0', '2', '0', '3', '2', '1', '1', '2', '0', '1', '2', '0', '3', '2', '2', '1'];

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

