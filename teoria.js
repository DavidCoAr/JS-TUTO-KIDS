//SECCIÓN 1:TIPOS DATOS-VARIABLES-OPERACIONES-SEC ESCAPE-CONCATENAR
console.log("\n------SECCIÓN 1:TIPOS DATOS-VARIABLES-OPERACIONES-SEC. ESCAPE-CONCATENAR------");
//#region Seccion 1

//------------------------------------------------------------------
/*01-TIPOS DE DATOS*/ 
//------------------------------------------------------------------

/*
undefined: no existe un valor asignado
null:objeto no existe o es nulo
boolean: true o false
string: cadenas de caracteres
symbol
number: número
object: estructura con propiedades y objetos
*/
console.log("\n1-TIPOS DE DATOS");
console.log('undefined: no existe un valor asignado\nnull:objeto no existe o es nulo \nboolean: true o false \nstring: cadenas de caracteres\nsymbol \nnumber: número \nobject: estructura con propiedades y objetos');

//------------------------------------------------------------------
/*02-CREACIÓN DE VARIABLES*/ 
//------------------------------------------------------------------
console.log("\n2-CREACIÓN DE VARIABLES");
// #region

//Crear variable (var,let,const) inicializada (asignando un valor) miVariable con el valor Hola Mundo
var miVariable ="Hola Mundo";
console.log("el saludo es" + " " + miVariable);

miVariable = -15;
console.log("el saludo cambia a" + " " + miVariable);

//Crear variable no inicializada (sin asignar ningún valor)
var a;
console.log("Variable a:" + a)

//A Var a le asigno 20 con el operador de asignación
a = 20;
console.log("Variable a:" + a)

//Creo una var b y c y les asigno es valor de la var a
var b = a;
var c;
console.log("Variable b toma valor de a:" + a)

c = a;
console.log("Variable c toma valor de a:" + a)
// #endregion

//------------------------------------------------------------------
/*03-OPERACIONES ARIMÉTICAS*/ 
//------------------------------------------------------------------
console.log("\n3-OPERACIONES ARIMÉTICAS");
// #region

var suma = 7 + 12;
console.log("La suma de 7 + 12:" + suma)

var resta = 12 - 7;
console.log(`La resta de 12 - 7:  ${resta}`)

var producto = 12 * 2;
console.log(`La multip. de 12 x 2:  ${producto}`)

var division = 12 / 2;
console.log(`La división de 12 / 2:  ${division}`)
// #endregion

//------------------------------------------------------------------
/*04-NÚMEROS DECIMALES*/ 
//------------------------------------------------------------------
console.log("\n4-NÚMEROS DECIMALES");
// #region

var productoDecimal = 12 * 2.2;
console.log(`La multip. de 12 x 2:  ${productoDecimal}`)

var divisionDecimal = 12 / 2.2;
console.log(`La división de 12 / 2:  ${divisionDecimal}`)

/*RESTO DE UNA DIVISIÓN (para saber si un num es par o impar)*/
console.log("\nRESTO DE UNA DIVISIÓN"); 

var restoDivision = 15 % 5;
console.log(`El resto de 15 / 5:  ${restoDivision}`)

var restoDivision2 = 15 % 4;
console.log(`El resto de 15 / 4:  ${restoDivision2}`)
// #endregion

//------------------------------------------------------------------
/*05-INCREMENTAR/REDUCIR EL VALOR DE UNA VARIABLE)*/ 
//------------------------------------------------------------------
console.log("\n5-INCREMENTAR/REDUCIR EL VALOR DE UNA VARIABLE"); 
// #region

var librosComprados = 100;
console.log(`Tienes ${librosComprados} libros comprados`)
//Opción 1 para incrementar en +1
librosComprados = librosComprados + 1;
console.log(`Ahora tienes ${librosComprados} libros comprados`)
//Opción 2 para incrementar en +1
librosComprados++;
console.log(`Y ahora ${librosComprados} libros comprados`)

//Opción 1 para reducir en -1
librosComprados = librosComprados - 1;
console.log(`Ahora tienes ${librosComprados} libros comprados`)
//Opción 2 para reducir en -1
librosComprados--;
console.log(`Y ahora ${librosComprados} libros comprados`)

//Opción 1 para incrementar en + X
librosComprados = librosComprados + 5;
console.log(`Ahora tienes ${librosComprados} libros comprados`)
//Opción 2 para incrementar en + X
librosComprados += 5;
console.log(`Y ahora ${librosComprados} libros comprados`)

//Opción 1 para reducir en + X
librosComprados = librosComprados - 5;
console.log(`Ahora tienes ${librosComprados} libros comprados`)
//Opción 2 para reducir en + X
librosComprados -= 5;
console.log(`Y ahora ${librosComprados} libros comprados`)
// #endregion

//------------------------------------------------------------------
/*06-MULTIPLICAR/DIVIDIR EL VALOR DE UNA VARIABLE)*/ 
//------------------------------------------------------------------
console.log("\n6-INCREMENTAR/REDUCIR EL VALOR DE UNA VARIABLE"); 
// #region

//Opción 1 para multiplicar x X
librosComprados = librosComprados * 5;
console.log(`Ahora tienes ${librosComprados} libros comprados`)
//Opción 2 para multiplicar x X
librosComprados *= 5;
console.log(`Y ahora ${librosComprados} libros comprados`)

//Opción 1 para dividir por X
librosComprados = librosComprados / 5;
console.log(`Ahora tienes ${librosComprados} libros comprados`)
//Opción 2 para dividir por X
librosComprados /= 5;
console.log(`Y ahora ${librosComprados} libros comprados`)
// #endregion

//------------------------------------------------------------------
/*07-VARIABLES CON CADENAS DE CARACTERES(STRINGS)*/ 
//------------------------------------------------------------------
console.log("\n7-VARIABLES CON CADENAS DE CARACTERES"); 
// #region

//Usar comillas dobles
var nombre = "David";
console.log(`Mi nombre es ${nombre}`)
//Usar comillas simples
var apellidos = 'Costales Arango';
console.log(`Mi apellido es ${apellidos}`)

//Usar comillas dobles dentro comillas dobles con secuencia de escape \"
var nombre = "David";
console.log("Mi mote es \"Pollo\""); 

//Usar comillas dobles dentro comillas simples
var nombre = "David";
console.log('Mi mote es "Pollo"');
// #endregion

//------------------------------------------------------------------
/*08-SECUENCIAS DE ESCAPE*/ 
//------------------------------------------------------------------
console.log('\n8-SECUENCIAS DE ESCAPE');
// #region
/*
Código | Resultado en pantalla
------------------
\'      Comila simple
\"      Comila doble
\\      Barra invertida 
\n      línea nueva
\r      retorno de carro
\t      tabulación
\b      retroceso
\f      salto de página
...
*/

const textoConBarraInvertida = "Esta es una cadena con una barra invertida: \\";
console.log(textoConBarraInvertida);

const textoConLineaNueva = "Esta es una cadena con una línea nueva:\nPrimera línea\nSegunda línea";
console.log(textoConLineaNueva);

const textoConRetornoDeCarro = "Esta es una cadena con retorno de carro:\rPrimera línea\rSegunda línea";
console.log(textoConRetornoDeCarro);

const textoConTabulacion = "Esta es una cadena con tabulación:\tColumna1\tColumna2";
console.log(textoConTabulacion);

const textoConRetroceso = "Esta es una cadena con retroceso:\b\b\bHola";
console.log(textoConRetroceso);

const textoConSaltoDePagina = "Esta es una cadena con salto de página:\n\nNuevo Párrafo";
console.log(textoConSaltoDePagina);
// #endregion

//------------------------------------------------------------------
/*09-CONCATENAR CARACTERES/VARIABLES*/ 
//------------------------------------------------------------------
console.log("\n9-CONCATENAR CARACTERES/VARIABLES");
// #region

//Opción 1 con +
var nombreCompleto = "David" + "Costales";
console.log(nombreCompleto);

var nombreCompleto2 = "David" + " " + "Costales";
console.log(nombreCompleto2);

var nombreCompleto3 = "David" + " Costales";
console.log(nombreCompleto3);

var verbo = "programar";
var sms = "Estoy aprendiendo a " + verbo + " con tutoriales"
console.log(sms);

//Agregar variables a cadenas de caracteres
var smsCompleto = "Estoy aprendiendo a programar ";
var ParteFinal = "con tutoriales";

console.log(smsCompleto);

smsCompleto += ParteFinal;// Idem sms completo = sms completo + ParteFinal
console.log(smsCompleto);

//Opción 2 con `
var password1 = "GP";
var password2 = "TW";
console.log(`El password completo es ${password1}${password2}`);
// #endregion

//------------------------------------------------------------------
/*10-LONGITUD DE UNA CADENA CARACTERES (PROPIEDAD .LENGTH)*/ 
//------------------------------------------------------------------
console.log("\n10-LONGITUD DE UNA CADENA CARACTERES (.LENGTH)");
// #region

var cadenaCaracteres = "JavaScript";
console.log(`El nº de caracteres de "JavaScript" es ${cadenaCaracteres.length}`)
// #endregion

//------------------------------------------------------------------
/*11-NOTACIÓN DE CORCHETES:PRIMER,ÚLTIMO Y CUALQUIER CARACTER DE LA CADENA)*/ 
//------------------------------------------------------------------
console.log("\n11-NOTACIÓN DE CORCHETES:PRIMER, ÚLTIMO Y CUALQUIER CARACTER(DE DER A IZQ) DE LA CADENA ([])");
// #region

/* 
Cadena: J a v a S c r i p t
Índice: 0 1 2 3 4 5 6 7 8 9
*/
var primerCaracter = "JavaScript";
// Muestra el primer caracter de la cadena JavaScript
console.log(`El primer caracter de JavaScript es ${primerCaracter[0]}`)

var ultimoCaracter = "JavaScript";
// Muestra el último caracter de la cadena JavaScript (LONGITUD CADENA - 1)
console.log(`El último caracter de JavaScript es ${ultimoCaracter[9]}`)
console.log(`El último caracter de JavaScript es LONGITUD - 1: ${ultimoCaracter[ultimoCaracter.length - 1]}`)

var cualquierCaracter  = "JavaScript";
var n;
// Muestra penúltimo caracter de la cadena JavaScript (LONGITUD CADENA - 2)
console.log(`El penúltimo caracter de JavaScript es ${cualquierCaracter[8]}`)
console.log(`El penúltimo caracter de JavaScript es LONGITUD - 2: ${cualquierCaracter[cualquierCaracter.length - 2]}`)

n = 2
console.log(`El penúltimo caracter de JavaScript es LONGITUD - n donde n=2: ${cualquierCaracter[cualquierCaracter.length - n]}`)
// #endregion

//------------------------------------------------------------------
/*12-INMUTABILIDAD DE LAS CADENAS DE CARACTERES*/ 
//------------------------------------------------------------------
console.log("\n12-INMUTABILIDAD DE LAS CADENAS DE CARACTERES");
// #region
var cadenaInmutable = "Jola Mundo";
console.log(`No puedo cambiar el índice 0 de ${cadenaInmutable} porque es inmutable`);

cadenaInmutable = "Hola Mundo";
console.log(`Asigno una cadena nueva a la variable para obtener ${cadenaInmutable}`);
// #endregion

//------------------------------------------------------------------
/*13-APP CONCATENAR CARACTERES*/ 
//------------------------------------------------------------------
console.log("\n13-APP CONCATENAR CARACTERES");
// #region

var sustantivo = "perro";
var adjetivo = "negro";
var verbo = "corrió";
var adverbio = "rápidamente";

//Opción 1 con Comillas dobles (igual con comilla simple)
var miFraseConcatenada = "El " + sustantivo + " " + adjetivo +  " " + verbo + " " + adverbio + " de casa";
console.log(miFraseConcatenada);

//Opción 2 con acento invertido
var miFraseConcatenadaConAcentoInvertido =`El ${sustantivo}${adjetivo} ${verbo} ${adverbio} de casa` ;
console.log(miFraseConcatenadaConAcentoInvertido);
// #endregion

//#endregion Seccion 1


//SECCIÓN 2:ARRAY
console.log("\n------SECCIÓN 2:ARRAY------");
//#region Seccion 2

//------------------------------------------------------------------
/*1-ARRAYS*/ 
//------------------------------------------------------------------
console.log("\n1-ARRAYS");
// #region

// Array con diferentes tipos de elementos (numero,string,booleano, objeto, array)
var miArray = [1, 'Hola', true, { nombre: 'Juan', edad: 30 }, ['manzana', 'naranja'], null, undefined];

console.log(miArray);
// #endregion

//------------------------------------------------------------------
/*2-ARRAYS ANIDADOS*/ 
//------------------------------------------------------------------
console.log("\n2-ARRAYS ANIDADOS");
// #region

//Arrays anidados
var listadoEstudiantes = [["Juan", "Caucásico", 7.2], ["Xin", "Asiático", 9.9]]
console.log(listadoEstudiantes);
// #endregion

//------------------------------------------------------------------
/*3-ACCESO A POSICIONES DE LOS ARRAYS*/ 
//------------------------------------------------------------------
console.log("\n3-ACCESO A POSICIONES DE LOS ARRAYS"); 
// #region  

var notasStarfield = [10, 9.8, 5];

/* 
Array:  [10, 9.8, 5]
Índice:   0   1   2
*/

//Posición 0 del array
console.log(`Posición 0 del array [10, 9.8, 5]: ${notasStarfield[0]}`);
//Posición 1 del array
console.log(`Posición 1 del array [10, 9.8, 5]: ${notasStarfield[1]}`);
//Posición 2 del array
console.log(`Posición 2 del array [10, 9.8, 5]: ${notasStarfield[2]}`);

//media notas Starfield
var mediaStarfield =  (notasStarfield[0] +  notasStarfield[1] +  notasStarfield[2])/3;
console.log(`La media de las notas de Stardield para [10, 9.8, 5] es: ${mediaStarfield}`);
// #endregion

//------------------------------------------------------------------
/*4-MODIFICAR ELEMENTOS DE UN ARRAY*/ 
//------------------------------------------------------------------
console.log("\n4-MODIFICAR ELEMENTOS DE UN ARRAY");  
// #region

//Modifico la posición 2 (5) del array notasStarfield
notasStarfield[2] = ["GOTY"];
console.log(`El 5 lo convierto en "GOTY" en [10, 9.8, 5]: ${notasStarfield}`);
// #endregion

//------------------------------------------------------------------
/*5-ACCEDER A ARRAYS MULTIDEMENSIONALES (CON ARRAYS ANIDADOS)*/ 
//------------------------------------------------------------------
console.log("\n5-ACCEDER A ARRAYS MULTIDEMENSIONALES (CON ARRAYS ANIDADOS)"); 
// #region

//Array con 3 arrays anidados
var arrayMultidemnsional = [[5, 6, 7], [8, 9, 10], [4, 3, 2]];

/*
Array:              [5, 6, 7], [8, 9, 10], [4, 3, 2]
Índice:                 0          1           2
Índice interno:     0   1   2  0   1   2   0   1   2
*/

//Quiero acceder al array en la posición 2: [4, 3, 2]
    // Quiero acceder a la posición 0 de dicho array: 4
console.log(`Array posición 2, elemento 0 (4) en el array multidimensional [[5, 6, 7], [8, 9, 10], [4, 3, 2]]: ${arrayMultidemnsional[2][0]}`);
// #endregion

//------------------------------------------------------------------
/*6-MÉTODO PUSH:AÑADIR ELEMENTOS AL FINAL DEL ARRAY*/ 
//------------------------------------------------------------------
console.log("\n6-MÉTODO PUSH: AÑADIR ELEMENTOS AL FINAL DEL ARRAY");
// #region 

var estaciones = ["Primavera", "Verano", "Otoño"];
console.log(`La estaciones son ${estaciones}`);

//El método push es una función que añade elementos al final del array
estaciones.push("Invierno", "Invierno Nuclear", "Neo Primavera");
console.log(`La estaciones serán tras el Fallout: ${estaciones}`);
// #endregion

//------------------------------------------------------------------
/*7-MÉTODO POP:ELIMINA Y RETORNA EL ÚLTIMO ELEMENTO DEL ARRAY*/ 
//------------------------------------------------------------------
console.log("\n7-MÉTODO POP:ELIMINA Y RETORNA EL ÚLTIMO ELEMENTO DEL ARRAY"); 
// #region

//Eliminamos el último elemento del array estaciones(Neo Primavera)
    //Dicho elemento lo retorna (Pop lo devuelve como resultado)

var estacionEliminada;

//El elemento eliminado (devuelto como resultado) lo asignamos a la variable estacion Eliminada
estacionEliminada = estaciones.pop();

console.log(`La estaciones tras invadir Rusia: ${estaciones}`);
console.log(`La estación que se eliminó: ${estacionEliminada}`);
// #endregion

//------------------------------------------------------------------
/*8-MÉTODO SHIFT: IDEM POP PERO ELIMINANDO EL 1º ELEMENTO*/ 
//------------------------------------------------------------------
console.log("\n8-MÉTODO SHIFT: IDEM POP PERO ELIMINANDO EL 1º ELEMENTO"); 
// #region

var frutas = ['manzana', 'pera', 'plátano', 'naranja'];
console.log(`Frutas en Rusia: ${frutas}`); 

//El elemento eliminado (devuelto como resultado) lo asignamos a la variable estacion primeraFruta
var primeraFruta = frutas.shift();

console.log(`Frutas en Rusia tras el bloqueo: ${frutas}`); // Imprime: ["pera", "plátano", "naranja"]
console.log(`Fruta al principio eliminada de Rusia tras el bloqueo econímoco: ${primeraFruta}`); // Imprime: "manzana"
// #endregion

//------------------------------------------------------------------
/*9-MÉTODO UNSHIFT: AGREGAR ELEMENTOS AL PRINCIPIO DEL ARRAY*/ 
//------------------------------------------------------------------
console.log("\n9-MÉTODO UNSHIFT:AGREGAR ELEMENTOS AL PRINCIPIO DEL ARRAY"); 
// #region

console.log(`Frutas en Rusia tras el bloqueo: ${frutas}`); // Imprime: ["pera", "plátano", "naranja"]
//Añado 3 frutas al principio del array frutas
frutas.unshift("kiwi","fresa","uvas")
console.log(`3 frutas que se añadieron al principio a Rusia: ${frutas}`)
// #endregion

//------------------------------------------------------------------
/*10-MÉTODO SLICE: DEVOLVER COPIA DE UNA PORCIÓN ARRAY*/ 
//------------------------------------------------------------------
console.log("\n10-MÉTODO SLICE: DEVOLVER COPIA DE UNA PORCIÓN ARRAY"); 
// #region
const listadoFrutas = ['manzana', 'banana', 'naranja', 'mango', 'uva'];
console.log(`1 array con 5 frutas: ${listadoFrutas}`);

// Ejemplo 1: Extraer elementos desde el índice 1 (incluido)-parámetro inicio hasta el 3 (no incluido)-parámetro de fin de la copia
const porcion1 = frutas.slice(1, 3);
console.log(`Desde el índice 1 (incluido) hasta el 3 (no incluido): ${porcion1}`); // Resultado: ['banana', 'naranja']

// Ejemplo 2: Extraer elementos desde el índice 2 hasta el final del array
const porcion2 = frutas.slice(2);
console.log(`Desde el índice 2 (incluido) hasta el final del array (sin parámetros de fin): ${porcion2}`); // Resultado: ['naranja', 'mango', 'uva']

// Ejemplo 3: Crear una copia completa del array original
const copiaCompleta = frutas.slice();
console.log(`Todo el array al no poner parámetros de entrada: ${copiaCompleta}`); // Resultado: ['manzana', 'banana', 'naranja', 'mango', 'uva']


// #endregion

//------------------------------------------------------------------
/*11-APP: LISTA DE COMPRA*/ 
//------------------------------------------------------------------
console.log("\n11-APP: LISTA DE COMPRA"); 
// #region
var miListadoCompras = [["cereal",3],["yogur",6]];
console.log("Array del listado compra:" + miListadoCompras);

/*
Array:              ["cereal",3],["yogur",6]]
Índice:                   0           1           
Índice interno:         0   1       0   1 
*/

//Cereal 
console.log("Voy a comprar " + miListadoCompras[0][1] + " unidades de " +  miListadoCompras[0][0]);

console.log(`Voy a comprar ${miListadoCompras[1][1]} unidades de ${miListadoCompras[1][0]}`);
// #endregion

//#endregion Seccion 2


//SECCIÓN 3:FUNCIONES
console.log("\n------SECCIÓN 3:FUNCIONES------");
//#region SOBJETOSeccion 3

//------------------------------------------------------------------
/*1-FUNCIONES*/ 
//------------------------------------------------------------------
console.log("\n1-FUNCIONES"); 
// #region

//Concepto y Formá básica de crear una F(x)
function mostrarMensaje() {
    console.log("Hola Mundo es mi primera función");
}

//Llamo a la función para que se ejecute tantas veces como quiera para reusar código
mostrarMensaje()
mostrarMensaje()
mostrarMensaje()

// #endregion

//------------------------------------------------------------------
/*2-PARÁMETROS Y ARGUMENTOS DE FUNCIONES*/ 
//------------------------------------------------------------------
console.log("\n2-PARÁMETROS Y ARGUMENTOS DE FUNCIONES"); 

// #region

//F(x) con 2 parámetros de entrada (a,b) que se suman y se muestra su resultado por consola
function suma2Numeros (a,b) {
    var suma = a + b;
    console.log(`El resultado de sumar ${a} y ${b} es ${suma} `)
}

// Llamada a la función con Argumentos (2,3) -valores asignados a los parámetos- donde 2 es a y 3 es b, etc
console.log(suma2Numeros (2,3)); //Al no tener return la F(x), me muestra undefined al intentar un console.log fuera de la F(x)
suma2Numeros (20,3);
suma2Numeros (200,3);

//Variante con Return:devolver el resultado de la operación para realizar más operaciones o almacenarlo en una variable
console.log("+Ejemplo sumar 2 números con RETURN en el cuerpo de la F(x):")

// Definición de una función con parámetros
function sumaConReturn(a, b) {
  return a + b;
}

// Llamada a la función con  Argumentos (2,3) donde 2 es a y 3 es b
const resultado = sumaConReturn(1, 30); //El resultado retornado de la F(x) lo asignamos a la variable resultado

console.log(`El resultado de sumar con return es ${resultado} `); // Salida: 5

//Ejemplo de Pasar variables como argumentos
console.log("+Ejemplo pasando variables como argumentos para la F(x) de sumar 2 números:")

var num1 = 2000;
var num2= 3000;

suma2Numeros (num1,num2);

//Ejemplo de concatenar caracteres
console.log("+Ejemplo de concatenar caracteres:")

function concantenarTresCadenas (cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3)
    console.log(`${cadena1} ${cadena2} ${cadena3}` )
}

concantenarTresCadenas ("Estoy", "Aprendendo", "a programar");
concantenarTresCadenas ("Me", "compraré", "Starfield");

// #endregion

//------------------------------------------------------------------
/*3-ÁMBITO GLOBAL Y VARIABLES GLOBALES*/ 
//------------------------------------------------------------------
console.log("\n3-ÁMBITO GLOBAL Y VARIABLES GLOBALES"); 

// #region

//Acceso de la variable global desde cualquier punto del programa
var miVariableGlobal = "Soy una variable global que se puede acceder, usar y modificar en CUALQUIER lugar del programa"
console.log("Caso 1: Antes de la F(x) " + miVariableGlobal);

function miFuncionConVariableGlobal () {
    console.log("Caso 2: Dentro de una F(x) " + miVariableGlobal); 
}

miFuncionConVariableGlobal ();

console.log("Caso 3: Después de la F(x) " + miVariableGlobal);


// #endregion

//------------------------------------------------------------------
/*4-ÁMBITO LOCAL Y VARIABLES LOCALES*/ 
//------------------------------------------------------------------
console.log("\n4-ÁMBITO LOCAL Y VARIABLES LOCALES"); 

// #region

//Variables que definimos dentro de una F(x) y solo se puede acceder, usar y modificar dentro de la F(x)
function miFuncionConVariableLocal() {
    var miVariableLocal = "Soy una variable local que SOLO estoy disponible en la F(x) en la que me defino";
    console.log(`Dentro de una F(x): ${miVariableLocal}`);
}

miFuncionConVariableLocal ();

//Fuera de la F(x) da este error al intentar acceder a la variable local: "Uncaught ReferenceError: miVariableLocal is not defined"
//console.log(`Fuera de una F(x) donde se definió: ${miVariableLocal}`);



// #endregion

//------------------------------------------------------------------
/*5-PRIORIDAD VARIABLE LOCAL >>> VARIABLE GLOBAL EN AMBITO LOCAL*/ 
//------------------------------------------------------------------
console.log("\n5-PRIORIDAD VARIABLE LOCAL >>> VARIABLE GLOBAL EN AMBITO LOCAL"); 

// #region

var miNombre = "David";

function mostrarMiNombre () {
    var miNombre = "No soy David, soy una variable local con prioridad ante una global con el mismo nombre"
    console.log(miNombre);
}

mostrarMiNombre ();

console.log("La variable global se muestra después de la F(x): " + miNombre);

// #endregion

//------------------------------------------------------------------
/*6-RETORNAR UN VALOR EN LAS F(X)*/ 
//------------------------------------------------------------------
console.log("\n6-RETORNAR UN VALOR EN LAS F(X)"); 

// #region

function sumaReturn(a, b) {
    return a + b;
  }
  
// Llamada a la función con  Argumentos (2,3) donde 2 es a y 3 es b
const resultadoSuma = sumaReturn(2, 3); //El resultado retornado de la F(x) lo asignamos a la variable resultado
  
console.log(`El resultado de sumar ${a} y ${b} con return es ${resultadoSuma} `); // Salida: 5

// Muestro por consola el valor retornado de la F(x) con los argumentos 2 y 3
console.log("Muestro directamente el valor retornado de la función: " + sumaReturn(2, 3));

// #endregion

//------------------------------------------------------------------
/*7-RETORNAR POR DEFECTO: UNDEFINED*/ 
//------------------------------------------------------------------
console.log("\n7-RETORNAR POR DEFECTO: UNDEFINED"); 

// #region

function sumarSinReturn (a,b) {
    console.log (`No return, solo postrar por consola a + b: ${a + b}`);//Esto no es return (a + b), mostrará 50
}

console.log (sumarSinReturn(20,30)); //Mostrará undefined al no haber return (a + b) en la F(x) e intentar el console.log fuera de la F(x)

// #endregion

//------------------------------------------------------------------
/*8-ASIGNAR UN VALOR RETORNADO A UNA VARIABLE*/ 
//------------------------------------------------------------------
console.log("\n8-ASIGNAR UN VALOR RETORNADO A UNA VARIABLE"); 

// #region

function restaReturn(a, b) {
    return a - b;
  }
  
// Llamada a la función con  Argumentos (8,3) donde 80 es a y 3 es b
const resultadoResta = restaReturn(80, 3); //const resultadoResta = 73 (f(x)  con los argumentos se sustituye por su resultado), El resultado retornado de la F(x) lo asignamos a la variable resultado
  
console.log(`El resultado de restar con return es ${resultadoResta} `); // Salida: 73

// Muestro por consola el valor retornado de la F(x) con los argumentos 80 y 3
console.log("Muestro directamente el valor retornado de la función: " + restaReturn(80, 3));

//Retornando caracteres
function crearCadena(lenguaje) {
    return "Mi meta es aprender " + lenguaje;
}

var miMeta = crearCadena("Js");
console.log(miMeta);


// #endregion

//------------------------------------------------------------------
/*9-APP: ELIMINAR Y AGREGAR ELEMENTOS EN UN ARRAY PARA UNA QUEUE*/ 
//------------------------------------------------------------------
console.log("\n9-APP: ELIMINAR Y AGREGAR ELEMENTOS EN UN ARRAY PARA UNA QUEUE"); 

// #region

//Descripción del ejercicio Permanencer en la fila:
    // F(x) proximoEnLaFila toma como argumentos un array (array) y un numero(elemento del array)
    // (1) Agrega el numero al final del array 
    // (2) Elimina el primer elemento del array
    // (3) Retorna el elemento que fue removido

//Creo la F(x)    
function proximoEnLaFila (array, elemento) {
    array.push(elemento);  // (1) Agregar al final del array
    // (3) Return el elemento removido por shift, lo que sería igual a return "1º elemento"
    return array.shift()    // (2) Elimina el primer elemento del array y shift lo retorna como resultado para poder usarse después
}

//Creo el array con los elementos de la Queue (fila)
var miArrayApp = ["1º elemento", "2º elemento", "3º elemento" ]

//Formato presentación array "poco legible" si no está en formato JSON o mediante concatenación
console.log(miArrayApp );

//Lo muestro en formato JSON (colección de pares clave-valor, donde las claves son cadenas y los valores pueden ser cualquier tipo de dato válido en JSON)
    // para que pueda ser 
        //transmitido a través de la red, almacenado en archivos, 
        //o utilizado en comunicación con otros sistemas que utilizan JSON como formato de intercambio de datos.

//Antes del cambio en formato JSON
console.log("Antes del cambio en formato JSON: " + JSON.stringify(miArrayApp) ); //Método JSON.stringify convierte un objeto o una matriz en una cadena de texto JSON

//Llamo a la F(x) con 2 argumentos (miArrayApp,"Último elemento") y de paso muestro por consola el elemento retornado
console.log("El elemento retornado tras eliminarlo: " + proximoEnLaFila(miArrayApp,"Último elemento"));

//Después del cambio en formato JSON
console.log("Después del cambio en formato JSON: " + JSON.stringify(miArrayApp) ); //Método JSON.stringify convierte un objeto o una matriz en una cadena de texto JSON

// #endregion

//------------------------------------------------------------------
/*10- VALORES BOOLEANOS: TRUE Y FALSE*/ 
//------------------------------------------------------------------
console.log("\n10- VALORES BOOLEANOS: TRUE Y FALSE"); 

// #region

console.log("Se escribe " + true);
console.log(true);
console.log("Se escribe " + false);
console.log(false);

// #endregion

//#endregion Seccion 3


//SECCIÓN 4:OPERADORES
console.log("\n------SECCIÓN 4:OPERADORES------");
//#region Seccion 4

//------------------------------------------------------------------
/*1-OPERADOR DE IGUALDAD*/ 
//------------------------------------------------------------------
console.log("\n1-OPERADOR DE IGUALDAD: = VALOR"); 

// #region

//Con la expresión "==" comparamos si representan el mismo valor
console.log("Si comparamos 5 == 5, nos dará " + (5 == 5)); //Como es verdadera, será True

//Con la expresión "==" comparamos si representan el mismo valor
console.log("Si comparamos 5 == 1, nos dará " + (5 == 1)); //Como es falso, será false

//No comparar Arrays PUES FALLA
console.log ("Si comparamos 2 arrays iguales, nos dará " + ([1,2,3] == [1,2,3]));

// #endregion

//------------------------------------------------------------------
/*2-OPERADOR DE ESTRICTA IGUALDAD*/ 
//------------------------------------------------------------------
console.log("\n1-OPERADOR DE ESTRICTA IGUALDAD: = TIPO DE DATO, = VALOR"); 

// #region

//Con la expresión "==" comparamos si el numero 55 y el numero 55 representan el mismo valor + igual tipo dato 
console.log("Si comparamos 55 == 55, nos dará " + (55 == 55)); //Como es verdadera, será true

//Con la expresión "==" comparamos si el numero 55 y el numero 30 representan el mismo valor  + igual tipo dato 
console.log("Si comparamos 55 == 30, nos dará " + (55 == 30)); //Como es verdadera, será true

//Con la expresión "==" comparamos si el numero 55 y el string "55" representan el mismo valor + igual tipo dato 
console.log('Si comparamos 55 == "55", nos dará ' + (55 == "55")); //Como es verdadera, será true, pero son distintos tipos dato

//Con la expresión "===" comparamos si el numero 55 y el string "55" representan el mismo valor y mismo tipo de dato
console.log('Si comparamos 55 === "55", nos dará ' + (55 === "55")); //Como es falso, será false

//Con la expresión "===" comparamos si el numero 55 y el número "55" representan el mismo valor y mismo tipo de dato
console.log('Si comparamos 55 === 55, nos dará ' + (55 === 55)); //Como es verdadera, será true


// #endregion

//------------------------------------------------------------------
/*3-OPERADOR DE DESIGUALDAD: DISTINTO VALOR*/ 
//------------------------------------------------------------------
console.log("\n1-OPERADOR DE DESIGUALDAD: DISTINTO VALOR"); 

// #region

//Con la expresión "!=" comparamos si NO representan el mismo valor
console.log("Si comparamos 5 != 5, nos dará " + (5 != 5)); //Como es FALSO, será false

//Con la expresión "!="" comparamos si NO representan el mismo valor
console.log("Si comparamos 5 != 1, nos dará " + (5 != 1)); //Como es VERDADERO, será TRUE

//No comparar Arrays PUES FALLA
console.log ("Si comparamos 2 arrays IGUALES, nos dará " + ([1,2,3] != [1,2,3]));

// #endregion


//------------------------------------------------------------------
/*4-OPERADOR DE ESTRICTA DESIGUALDAD: DISTINTO TIPO DE DATO, DISTINTO VALOR*/ 
//------------------------------------------------------------------
console.log("\n4-OPERADOR DE ESTRICTA DESIGUALDAD: DISTINTO TIPO DE DATO, DISTINTO VALOR"); 

// #region

//Con la expresión "!=" comparamos si el numero 55 y el numero 55 NO representan el mismo valor + igual tipo dato 
console.log("Si comparamos 55 != 55, nos dará " + (55 != 55)); //Como es falso, será false

//Con la expresión "!=" comparamos si el numero 55 y el numero 30 NO representan el mismo valor  + igual tipo dato 
console.log("Si comparamos 55 != 30, nos dará " + (55 != 30)); //Como es verdadero, será true

//Con la expresión "!=" comparamos si el numero 55 y el string "55" NO representan el mismo valor + igual tipo dato 
console.log('Si comparamos 55 != "55", nos dará ' + (55 != "55")); //Como es falso, será false, pues representan el mismo valor

//Con la expresión "!==" comparamos si el numero 55 y el string "55" representan el mismo valor y mismo tipo de dato
console.log('Si comparamos 55 !== "55", nos dará ' + (55 !== "55")); //Como es verdadero, será true

//Con la expresión "!==" comparamos si el numero 55 y el número "55" representan el mismo valor y mismo tipo de dato
console.log('Si comparamos 55 !== 55, nos dará ' + (55 !== 55)); //Como es falso, será false, pues representan el mismo valor

// #endregion

//------------------------------------------------------------------
/*5-OPERADOR "MAYOR QUE": >*/ 
//------------------------------------------------------------------
console.log('\n5-OPERADOR "MAYOR QUE": >');

// #region

console.log("Comparo si 6 es > que 5: " + (6 > 5));

console.log("Comparo si 10 es > que 100: " + (10 > 100));

//B es > que A porque está más a la derecha en el abecedeario
console.log("Comparo si A es > que B: " + ("A" > "B"));

//B es > que A porque está más a la derecha en el abecedeario
console.log("Comparo si B es > que A: " + ("B" > "A"));

//Bella es > que Baca porque se mira la siguiente letra a B y e > que a
console.log("Comparo si Bella es > que Baca: " + ("Bella" > "Baca"));

//Comparo 2 variables
var n1 = 200;
var n2 = 10;

console.log("Comparo si 200 es > que 10: " + (n1 > n2));

// #endregion

//------------------------------------------------------------------
/*6-OPERADOR "MAYOR QUE": >=*/ 
//------------------------------------------------------------------
console.log('\n6-OPERADOR "MAYOR QUE": >=');

// #region

console.log("Comparo si 6 es >= que 5: " + (6 >= 5));

console.log("Comparo si 100 es >= que 100: " + (10 >= 100));

//B es > que A porque está más a la derecha en el abecedeario
console.log("Comparo si A es >= que B: " + ("A" >= "B"));

//B es > que A porque está más a la derecha en el abecedeario
console.log("Comparo si B es >= que A: " + ("B" >= "A"));

//Bella es > que Baca porque se mira la siguiente letra a B y e > que a
console.log("Comparo si Bella es >= que Baca: " + ("Bella" >= "Baca"));

// #endregion

//------------------------------------------------------------------
/*7-OPERADOR "MENOR QUE": <*/ 
//------------------------------------------------------------------
console.log('\n7-OPERADOR "MENOR QUE": <');

// #region
console.log("Comparo si 6 es < que 5: " + (6 < 5));

console.log("Comparo si 10 es < que 100: " + (10 < 100));

//B es > que A porque está más a la derecha en el abecedeario
console.log("Comparo si A es < que B: " + ("A" < "B"));

//B es > que A porque está más a la derecha en el abecedeario
console.log("Comparo si B es < que A: " + ("B" < "A"));

//Bella es > que Baca porque se mira la siguiente letra a B y e > que a
console.log("Comparo si Bella es < que Baca: " + ("Bella" < "Baca"));

// #endregion

//------------------------------------------------------------------
/*8-OPERADOR "MENOR O IGUAL QUE": <=*/ 
//------------------------------------------------------------------
console.log('\n8-OPERADOR "MENOR O IGUAL QUE": <=');

// #region

console.log("Comparo si 6 es <= que 5: " + (6 <= 5));

console.log("Comparo si 10 es <= que 100: " + (10 <= 100));

//B es > que A porque está más a la derecha en el abecedeario
console.log("Comparo si A es <= que B: " + ("A" <= "B"));

//B es > que A porque está más a la derecha en el abecedeario
console.log("Comparo si B es <= que A: " + ("B" <= "A"));

//Bella es > que Baca porque se mira la siguiente letra a B y e > que a
console.log("Comparo si Bella es <= que Baca: " + ("Bella" <= "Baca"));

// #endregion

//------------------------------------------------------------------
/*9-OPERADOR LÓGICO "AND": &&*/ 
//------------------------------------------------------------------
console.log('\n9-OPERADOR LÓGICO "AND": &&');

// #region

/*
Tabla de verdad del operandor AND
Para: X&&Y
| X | Y | X&&Y  |
----------------
| T | T |   T   |
| T | F |   F   |
| F | T |   F   |
| F | F |   F   |

la expresión SOLO es VERDADERA cuando ambos operandos son TRUE
*/

console.log("true && true: " + true && true);
console.log("true && false: " + true && false);
console.log("false && true: " + false && true);
console.log("false && false: " + true && false);

var starfield = 9;
// (starfield > 5) && (starfield < 10 ) => true && true => true
console.log ("Starfiel como juego de 9 es > que uno de 5 (FF16) y < que uno de 10 (Elder 6): " + ((starfield > 5) && (starfield < 10 )));

// #endregion

//-------------------------------------------------------------------
/*10-OPERADOR LÓGICO "OR": ||*/ 
//------------------------------------------------------------------
console.log('\n10-OPERADOR LÓGICO "OR": ||');

// #region

/*
Tabla de verdad del operandor OR
Para: X||Y
| X | Y | X||Y  |
----------------
| T | T |   T   |
| T | F |   T   |
| F | T |   T   |
| F | F |   F   |

la expresión SOLO es VERDADERA cuando ALGUNO de los operandos son TRUE
*/

console.log("true || true: " + true || true);
console.log("true || false: " + true || false);
console.log("false || true: " + false || true);
console.log("false || false: " + true || false);

var ff16 = 5;
// (ff16 > 9) || (ff16 < 10 ) => false || true => true
console.log ("FF16 como juego de 5 es > que uno de 9 (Starfield) y < que uno de 10 (Elder 6): " + ((ff16 > 9) || (ff16 < 10 )));

// #endregion

//-------------------------------------------------------------------
/*11-OPERADOR LÓGICO "NOT" PARA NEGAR EXPRESIONES: !*/ 
//------------------------------------------------------------------
console.log('\n11-OPERADOR LÓGICO "NOT": !');

// #region
/*
Tabla de verdad del operandor NOT
Para: !X
| X | !X |
----------
| T | F |  
| F | T |  

Si la expresión es TRUE, la convierte en FALSE
Si la expresion es FALSE, la convierte en TRUE 
*/

console.log("Una expresión TRUE la convierto EN FALSE con !:" + (!true));
console.log("Una expresión FALSE la convierto EN TRUE con !:" + (!false));

var ff16 = 5;
// !(ff16 > 9) => !false => true
console.log ("FF16 como juego de 5 es > que uno de 9 (Starfield): " + (!(ff16 > 9)));

// #endregion

//#endregion Seccion 4


//SECCIÓN 5:SENTENCIAS CONDICIONALES
console.log("\n------SECCIÓN 5:SENTENCIAS CONDICIONALES------");
//#region Seccion 5

//-------------------------------------------------------------------
/*1-IF*/ 
//------------------------------------------------------------------
console.log('\n1-IF');

// #region

// El código entre {} solo se ejecuta si la condición entre () es TRUE
if (true) {
    console.log("Si la condición entre () es TRUE, se ejecuta el código entre {}");
}

// Se ejecuta el código si condiciónTrue > 2
var condicionTrue = 5;

if (condicionTrue > 2) {
    console.log("Si la condición (5 > 2) entre () es TRUE, se ejecuta el código entre {}");
}

// Se ejecuta el código si condiciónTrue > 2 y < que 10
var condicionTrue = 5;

if (condicionTrue > 2 && condicionTrue<10) {
    console.log("Si la condición (5 > 2 && 5 <10) entre () es TRUE, se ejecuta el código entre {}");
}

console.log("Si la condición es FALSE, no se ejecuta el código y salto aquí")

// Se ejecuta el código si estacionTrue == "Primavera"
var estacionTrue = "Primavera";

if (estacionTrue == "Primavera") {
    console.log('Si la condición (estacionTrue == "Primavera") entre () es TRUE, se ejecuta el código entre {}');
}

// #endregion

//-------------------------------------------------------------------
/*2-IF...ELSE*/ 
//------------------------------------------------------------------
console.log('\n2-IF... ELSE');

// #region

//Se ejecutará la 1º CONDICIÓN QUE SEA TRUE

//Si NO se cumple la condición entre (), se ejecuta el ELSE
if (true) {
    console.log("Evalúa la 1º condición de IF \nSi La condición es TRUE, se ejecuta este código del IF");
} else { //Si NO se cumple la condición
    console.log("Evalúa la 1º condición de IF \nSi La condición es FALSE, se ejecuta  código del ELSE");
}

// Se ejecuta el código si condiciónTrue > 2 y < que 10
var condicionTrue = 5;

if (condicionTrue > 11 && condicionTrue<10) {
    console.log("Evalúa la 1º condición de IF \nSi la condición (5 > 2 && 5 <10) entre () es TRUE, se ejecuta el código entre {} del IF");
} else {
    console.log("Evalúa la 1º condición de IF \nSi la condición (5 > 11 && 5 <10) es FALSE, no se ejecuta el código del IF \nEjecuto el ELSE");
}

// Se ejecuta el código si estacionTrue === "Verano"
var estacionTrue = "Primavera";

if (estacionTrue === "Verano") {
    console.log('Evalúa la 1º condición de IF \nSi la condición (estacionTrue === "Verano") entre () es TRUE, se ejecuta el código entre {} del IF');
} else {
    console.log('Evalúa la 1º condición de IF \nSi la condición (estacionTrue === "Verano") entre () es FALSE, se ejecuta este código del ELSE');
}

// #endregion

//-------------------------------------------------------------------
/*3-ELSE IF*/ 
//------------------------------------------------------------------
console.log('\n3-ELSE IF');

// #region

//F(x) que clasifica si el valor (9) es divisible entre 2, 3
//Se ejecutará la 1º CONDICIÓN QUE SEA TRUE

function clasificarValor (valor){
    if (valor % 2 == 0) {
        console.log("Evalúa la 1º condición de IF \nTRUE 1º condición:Valor divisible entre 2. Aquí se para el programa");
    } else if (valor % 3 == 0) {
        console.log("Evalúa la 1º condición de IF \nFALSE 1º condición. \nSe pasa a la 2º evaluación de ELSE IF... \nTRUE 2º condición:Valor divisible entre 3. Aquí se para el programa");
    } else {
        console.log("FALSE 1º condición. FALSE 2º condición. Se ejecuta el ELSE:No es divisible entre las opciones");
    }
}

clasificarValor (9);

// #endregion


//-------------------------------------------------------------------
/*4-ENCADENAS SENTENCIAS IF...ELSE*/ 
//------------------------------------------------------------------
console.log('\n4-ENCADENAS SENTENCIAS IF...ELSE IF');

// #region

//Determinar el peso en base al índice de masa corporal(IMC)
/*
RANGOS IMC     <18.5    |<=24.9    |<=29.9       |  >29.9
ESTADO      "BAJO PESO" | "NORMAL" | "SOBREPESO" | "OBESO"
*/

// Va por tramos (de bajo peso a obeso) de IMC evaluando las condiciones una a una, 
    //si no se cumple la 1º, pasa a la 2º, y así hasta llegar al ELSE, que es el código de respaldo por si no se cumple ninguna condición
function interpretarImc (imc) {
    if (imc < 18.5) {
        console.log("Tu IMC es < 18.5, tienes BAJO PESO");
    } else if (imc <= 24.9) {
        console.log("Tu IMC es <=24.9, tienes PESO NORMAL");
    } else if (imc <= 29.9) {
        console.log("Tu IMC es <=29.9, tienes SOBREPESO");
    } else {
        console.log("Tu IMC es > 29.9, eres OBESO");
    }
}
//IMC de 28, dará sobrepeso
interpretarImc (28);

//IMC de 20, dará peso normal
interpretarImc (20);



// #endregion

//-------------------------------------------------------------------
/*5-APP: GOLF*/ 
//------------------------------------------------------------------
console.log('\nAPP: GOLF');

// #region
/*
- Cada hoyo tiene un PAR
- PAR = nº promedio de golpes esperado para meterla
- En f(x) de cuantos golpes por encima/debajo del PAR, se asigna un nombre
-La F(X):
    + toma como argumentos: PAR (nº GOLPES esperado para meterla) y GOLPES (Nº golpes para meterla)
    + retorna la cadena correcta según la table que muestra
    los GOLPES en orden de > a < prioridad

    GOLPES   |   RETORNAR
    ------------------------
    1           "HOLE-IN-ONE"
    <= PAR - 2  "EAGLE"         Si es <= que "PAR - 2")
    PAR - 1     "BIRDIE"
    PAR         "PAR"
    PAR + 1     "BOGEY"
    PAR + 2     "DOUBLE BOGEY"
    >= PAR + 3  "GO HOME"       Si es >= que "PAR + 3")
*/

// Con la secuencia if else if el orden de evaluación es secuencial en el orden que aparecen hasta llegar al ELSE

//Versión F(X) sin retornar
function puntuajeGolpes (par, golpes) {
    if (golpes == 1) {
        console.log ("De 1 golpe, HOLE-IN-ONE");
    } else if ( golpes <= (par - 2)) {
        console.log ("<= que PAR - 2, EAGLE");
    } else if ( golpes == (par - 1)) {
        console.log ("= que PAR, BIRDIE");
    } else if ( golpes == par) {
        console.log ("= que PAR, PAR");
    } else if ( golpes == (par + 1)) {
        console.log ("= que PAR + 1, BOGEY");
    } else if ( golpes == (par + 2)) {
        console.log ("= que PAR + 2, DOUBLE BOGEY");
    } else {
        console.log ("= que PAR + 3, GO HOME");
    }
}

puntuajeGolpes (4,1); //HOLE-IN-ONE
puntuajeGolpes (4,4); //EAGLE
puntuajeGolpes (4,6); //DOUBLE BOGEY
puntuajeGolpes (4,7); //GO HOME

//Versión F(x) con RETURN
function puntuajeGolpesReturn (par, golpes) {
    if (golpes == 1) {
        return "De 1 golpe con Return, HOLE-IN-ONE";
    } else if ( golpes <= (par - 2)) {
        return "<= que PAR - 2 con Return, EAGLE";
    } else if ( golpes == (par - 1)) {
        return "= que PAR con Return, BIRDIE";
    } else if ( golpes == par) {
        return "= que PAR con Return, PAR";
    } else if ( golpes == (par + 1)) {
        return "= que PAR + 1 con Return, BOGEY";
    } else if ( golpes == (par + 2)) {
        return "= que PAR + 2 con Return, DOUBLE BOGEY";
    } else {
        return "= que PAR + 3 con Return, GO HOME";
    }
}

console.log(puntuajeGolpesReturn (4,1)); //HOLE-IN-ONE
console.log(puntuajeGolpesReturn (4,4)); //EAGLE
console.log(puntuajeGolpesReturn (4,6)); //DOUBLE BOGEY
console.log(puntuajeGolpesReturn (4,7)); //GO HOME

//Con la ESTRUCTURA de SWITCH el orden de evaluación de condiciones ya no es relevante. 

//Versión Switch sin Return
function puntuajeGolpesSwitch(par, golpes) {
    switch (golpes) {
        case 1:
            console.log("De 1 golpe con Switch, HOLE-IN-ONE");
            break; //Si no hay RETURN (que termina la f(x)), necesito BREAK que termine la f(x)
        case par:
            console.log("= que PAR con Switch, PAR");
            break; //Si no hay RETURN (que termina la f(x)), necesito BREAK que termine la f(x)
        case par - 1:
            console.log("= que PAR - 1 con Switch, BIRDIE");
            break; //Si no hay RETURN (que termina la f(x)), necesito BREAK que termine la f(x)
        case par - 2:
            console.log("= que PAR - 2 con Switch, EAGLE");
            break; //Si no hay RETURN (que termina la f(x)), necesito BREAK que termine la f(x)
        case par + 1:
            console.log("= que PAR + 1 con Switch, BOGEY");
            break; //Si no hay RETURN (que termina la f(x)), necesito BREAK que termine la f(x)
        case par + 2: 
            console.log("= que PAR + 2 con Switch, DOUBLE BOGEY");
            break; //Si no hay RETURN (que termina la f(x)), necesito BREAK que termine la f(x)
        default:
            console.log("= que PAR + 3 con Switch, GO HOME");
            break; //Si no hay RETURN (que termina la f(x)), necesito BREAK que termine la f(x)
    }
}

puntuajeGolpesSwitch (4,1); //HOLE-IN-ONE
puntuajeGolpesSwitch (4,4); //EAGLE
puntuajeGolpesSwitch (4,6); //DOUBLE BOGEY
puntuajeGolpesSwitch (4,7); //GO HOME

//Versión Switch con Return
function puntuajeGolpesSwitchReturn(par, golpes) {
    switch (golpes) {
        case 1:
            return "De 1 golpe con SwitchReturn, HOLE-IN-ONE"; //RETURN finaliza F(x), no necesito BREAK
        case par:
            return "= que PAR, PAR";
        case par - 1:
            return "= que PAR - 1 SwitchReturn, BIRDIE";
        case par - 2:
            return "= que PAR - 2 SwitchReturn, EAGLE";
        case par + 1:
            return "= que PAR + 1 SwitchReturn, BOGEY";
        case par + 2:
            return "= que PAR + 2 SwitchReturn, DOUBLE BOGEY";
        default:
            return "= que PAR + 3 SwitchReturn, GO HOME";
    }
}

console.log(puntuajeGolpesSwitchReturn (4,1)); //HOLE-IN-ONE
console.log(puntuajeGolpesSwitchReturn (4,4)); //EAGLE
console.log(puntuajeGolpesSwitchReturn (4,6)); //DOUBLE BOGEY
console.log(puntuajeGolpesSwitchReturn (4,7)); //GO HOME

// #endregion

//-------------------------------------------------------------------
/*6-SWITCH*/ 
//------------------------------------------------------------------
console.log('\n6-SWITCH');

// #region

// F(x) que clasifica según el valor (1, 2, 3) responde cadena texto, la cual retornaremos y mostraremos por consola
function clasificarValorSwitch (valor) {
    var respuestaSwitch;
    switch (valor) {
        case 1: //Case donde valor = 1
            respuestaSwitch = "Si valor = 1, Yo soy el ALPHA";
            break; //break para que no siga leyendo case 2, case 3, y salte a return respuestaSwitch
        case 2: //Case donde valor = 2
            respuestaSwitch = "Si valor = 2, Yo soy el BETA";
            break;
        case 3: //Case donde valor = 3
            respuestaSwitch = "Si valor = 3, Yo soy el GANMA";
            break;
    }
    return respuestaSwitch;
}

console.log(clasificarValorSwitch(1));
console.log(clasificarValorSwitch(2));


// Ejemplo con cadenas caracteres, donde partirmos de que comida = "hamburgesa"
var comidaSwitch = "hamburguesa";
console.log("Hoy solo tenemos " + comidaSwitch)

//Swich irá por defecto al case "hamburguesa"
switch (comidaSwitch) { 
    case "pizza": // Case donde comida = "pizza"
        console.log ("comida = pizza, 30 euros");
        break; //Break finaliza el código aquí, y salta fuera del switch
    case "hamburguesa": // Case donde comida = "hamburguesa"
        console.log ("comida = hamburguesa, 100 euros");
        break; //Break finaliza el código aquí, y salta fuera del switch
    case "zanahoria": // Case donde comida = "zanahoria"
        console.log ("comida = zanahoria, 5 euros");
        break; //Break finaliza el código aquí, y salta fuera del switch
}


// #endregion

//-------------------------------------------------------------------
/*7-SWITCH: OPCIÓN PREDETERMINADA*/ 
//------------------------------------------------------------------
console.log('\n7-SWITCH: OPCIÓN PREDETERMINADA');

// #region

function seleccionaIdioma (valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Valor = 1, Español";
            break; //Break para finalizar la ejecución aquí y saltar fuera del switch
        case 2:
            idioma = "Valor = 2, Italiano";
            break; //Break para finalizar la ejecución aquí y saltar fuera del switch
        default:
            idioma = "Elige un valor entre 1 y 2";
            break; //Break (opcional, por si no es la última línea del Switch) para finalizar la ejecución aquí y saltar fuera del switch
    }
    return idioma;
}

console.log("Selecciono el valor 2, entonces... " + seleccionaIdioma(2) );
console.log("Selecciono el valor 3, entonces... " + seleccionaIdioma(3) );
// #endregion

//-------------------------------------------------------------------
/*8-SWITCH: MÚLTIPLES CASOS*/ 
//------------------------------------------------------------------
console.log('\n8-SWITCH: MÚLTIPLES CASOS');

// #region

// Si hay múltiples casos que tienen asociado el mismo código
function seleccionaIdioma (valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Valor = 1, Inglés";
            break; //Break para finalizar la ejecución aquí y saltar fuera del switch
        case 2: // Si valor = 2 o Valor = 3,
        case 3:
        case 4:    
            idioma = "Valor = 2 o Valor = 3 o Valor = 4, Alemán";
            break; //Break para finalizar la ejecución aquí y saltar fuera del switch
        default:
            idioma = "Elige un valor entre 1 y 4";
            break; //Break (opcional, por si no es la última línea del Switch) para finalizar la ejecución aquí y saltar fuera del switch
    }
    return idioma;
}

console.log("Selecciono el valor 2, entonces... " + seleccionaIdioma(2) );
console.log("Selecciono el valor 3, entonces... " + seleccionaIdioma(3) );
console.log("Selecciono el valor 3, entonces... " + seleccionaIdioma(5) );
// #endregion

//-------------------------------------------------------------------
/*9-REEMPLAZAR IF ELSE POR SWITCH*/ 
//------------------------------------------------------------------
console.log('\n9-REEMPLAZAR IF ELSE POR SWITCH');

// #region

function seleccionarConsola (valor){
    var consola;
    if (valor == 1) {
        consola = "Valor es 1, compro Ps5";
    } else if (valor == 2) {
        consola = "Valor es 2, compro Series X";
    } else if (valor == 3) {
        consola = "Valor es 3, compro Series S";
    } else {
        consola = "No se cumple ninguna condición, compro Switch";
    }
    return consola;
}

console.log(seleccionarConsola(3));
console.log(seleccionarConsola(4));

function seleccionarConsolaSwitch (valor){
    var consola;
    switch (valor) {
        case 1:
            consola = "Valor es 1, compro Ps5";
            break; //Break hace que no continue mirando casos, y salta al return
        case 2:
            consola = "Valor es 2, compro Series X";
            break; //Break hace que no continue mirando casos, y salta al return
        case 3:
            consola = "Valor es 3, compro Series S";
            break; //Break hace que no continue mirando casos, y salta al return
        default: 
            consola = "No se cumple ninguna condición, compro Switch";
            break; //Break (opcional por si hay más casos debajo) hace que no continue mirando casos, y salta al return
    }
    return consola;
}

console.log(seleccionarConsolaSwitch(1));
console.log(seleccionarConsolaSwitch(4));
// #endregion

//-------------------------------------------------------------------
/*10-RETORNAR FORMA CONCISA VALORES BOOLEANOS*/ 
//------------------------------------------------------------------
console.log('\n10-RETORNAR VALORES BOOLEANOS');

// #region

//Forma simple de retornar valores booleanos
function esMenorQue (a,b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

console.log("1 es < que 2: " + esMenorQue (1,2));

//Forma MUCHO MÁS CONCISA de retornar valores booleanos

function esMenorQueConciso (a,b) {
    return a < b;
}

console.log("3 es < que 5: " + esMenorQueConciso (1,2));

// #endregion

//-------------------------------------------------------------------
/*11-PATRÓN DE RETORNO ANTICIPADO*/ 
//------------------------------------------------------------------
console.log('\n11-PATRÓN DE RETORNO ANTICIPADO');

// #region

// Return finaliza la ejecución de la F(X) aunque haya más código debajo del return
function retornoAnticipado () {
    console.log("Hola");
    return "RETURN finaliza aquí la F(x), no se ejecutará lo siguiente debajo de él en la F(x)";
    // Se muestra código innacesible porque RETURN impide acceder a él
    console.log("Este código no se ejecuta porque RETURN finaliza la F(x)")
}

console.log(retornoAnticipado()); 
 
//Retornanos undefined para controlar cuando una F(X) no puede dar un resultado
function raizCuadrada (num) {
    // Si num < 0 no se puede calcular la raíz cuadrada
    if (num < 0) {
        return undefined; // return (aquí finaliza la F(x)) "undefined" para indicar que la operación no se puede realizar
    }
    return Math.sqrt(num);
}

console.log("La raíz cuadrada de -2: " + raizCuadrada(-2));
console.log("La raíz cuadrada de 4: " + raizCuadrada(4));

//Variante sin el return undefined retornará un NaN(not a number)
function raizCuadradaSinUndefined (num) {
    // Si num < 0 no se puede calcular la raíz cuadrada
    return Math.sqrt(num);
}

console.log("La raíz cuadrada de -2: " + raizCuadradaSinUndefined(-2));
console.log("La raíz cuadrada de 4: " + raizCuadradaSinUndefined(4));
// #endregion

//-------------------------------------------------------------------
/*12-CONTEO DE CARTAS*/ 
//------------------------------------------------------------------
console.log('\n12-CONTEO DE CARTAS');

// #region

/*
BLAKJACK-LLEVAR REGISTRO (CONTEO) NUM RELATIVO DE
CARTAS ALTAS Y BAJAS QUE QUEDAN EN LA BARAJA

// Tener + cartas altas en la baraja => ventaja para jugador
// Se asigna un valor a cada carta de acuerdo a la siguinte tabla
// Si CONTEO es POSITIVO, => APOSTAR ALTO
// SI CONTEO es 0 o NEGATIVO, => APOSTAR BAJO

CAMBIO DEL CONTEO | CARTAS
    +1              2, 3 , 4, 5, 6
     0              7, 8 , 9
    -1              10, J, Q, K, A
 
// Hacer una F(X) para contar las cartas:
- Toma un parámetro carta que (número o string)
- Aumenta o reduce el valor de la VARIABLE GLOBAL CONTEO
- Retorna una cadena caracteres con el CONTEO ACTUAL y la cadena:
    + "Apuesta" si el conteo es positivo
    + "Espera" si el conteo es 0 o negativo
*/

//Creación de la variable global para el conteo cartas
var conteo = 0; //Se inicializa en 0

function conteoCartas (carta) {
    var decisionApuestaEspera;
    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo = conteo + 1; // o simplemente conteo++
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo = conteo - 1; // o simplemente conteo--
            break;
    }

    if (conteo > 0) {
        decisionApuestaEspera = "APUESTA si el conteo es positivo"
    } else {
        decisionApuestaEspera = "ESPERA si el conteo es 0 o negativo"
    } 
    
    return `El conteo actual es... ${conteo}, ${decisionApuestaEspera}`
}

console.log(conteoCartas(2)); //+1 l conteo
console.log(conteoCartas("K")); //-1 al conteo
console.log(conteoCartas(7)); // + 0

// #endregion


//#endregion Seccion 5


//SECCIÓN 6:OBJETOS
console.log("\n------SECCIÓN 6:OBJETOS------");
//#region Seccion 6

//-------------------------------------------------------------------
/*1-CREAR OBJETOS: VAR OBJ = {PROP:VALOR}*/ 
//------------------------------------------------------------------
console.log('\n1-CREAR OBJETOS: VAR OBJ = {PROP:VALOR}');

// #region

//Creo objeto con "pares" de propiedades y valores, y métodos (funciones dentro de objetos)
var miConsola = {
    "CPU": "I9",
    "GPU": 4090,
    "SSD": true,
    Marca: "Series Z",
    100: "100",
    obtenerInfo: function() {
      console.log(`Marca: ${this.Marca}, CPU: ${this.CPU}, GPU: ${this.GPU}, SSD: ${this.SSD}`);
    }
  };
  

console.log(miConsola);

// Apariencia más legible con JSON.stringify
console.log(JSON.stringify(miConsola));

//Para acceder al método del objeto tengo que llamar a la F(x)
miConsola.obtenerInfo();



// Variante con return en el método, lo que me obliga a console.log para mostrar el resultado retornado
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    obtenerInformacion: function() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
  };
  
  //Para acceder al método del objeto tengo que llamar a la F(x)
  console.log(coche.obtenerInformacion());
  

// #endregion


//-------------------------------------------------------------------
/*2-ACCEDER A PROPIEDADES: NOTACIÓN DE PUNTO (OBJETO.PROPIEDAD)*/ 
//------------------------------------------------------------------
console.log('\n2-ACCEDER A PROPIEDADES: NOTACIÓN DE PUNTO (OBJETO.PROPIEDAD)');

// #region
//Creo objeto con "pares" de propiedades y valores
var tuConsola = {
    "CPU": "I5",
    "GPU": 2080,
    "SSD": true,
    "Marca": "Series X"
};

console.log("La propiedad CPU es " + tuConsola.CPU);
console.log(`La propiedad GPU es ${tuConsola.GPU}`);

// #endregion

//-------------------------------------------------------------------
/*3-ACCEDER A PROPIEDADES: NOTACIÓN DE CORCHETES (OBJETO["PROPIEDAD"]*/ 
//------------------------------------------------------------------
console.log('\n3-ACCEDER A PROPIEDADES: NOTACIÓN DE CORCHETES');

// #region

//Para acceder a propiedades CON ESPACIOS es obligatoria
//Para acceder a propiedades VÍA VARIABLES es obligatoria ARRAY[I][PROPIEDAD COMO VARIABLE]

var miCuaderno = {
    "color": "verde",
    "num de paginas": 200,
    "num de hojas": 100,
    25: "Es el num 25"
}

console.log("La propiedad color es " + miCuaderno["color"]);
console.log("La propiedad color es " + miCuaderno.color);

console.log("25 es " + miCuaderno[25]);
console.log("25 es " + miCuaderno["25"]);

console.log("La propiedad num de hojas es " + miCuaderno["num de hojas"]);

// #endregion

//-------------------------------------------------------------------
/*4-ACCEDER A PROPIEDADES: VARIABLES*/ 
//------------------------------------------------------------------
console.log('\n4-ACCEDER A PROPIEDADES: NOTACIÓN DE CORCHETES');

// #region

var topConsolas = {
    1: "Ps6",
    2: "Series S",
    3: "Switch"
};

var posicionConsola = 3;

console.log("En el Top 3 está " + topConsolas[posicionConsola]);
console.log("En el Top 2 está " + topConsolas["2"]);
console.log("En el Top 2 está " + topConsolas[1]);

// #endregion

//-------------------------------------------------------------------
/*5-ACTUALIZAR PROPIEDADES*/ 
//------------------------------------------------------------------
console.log('\n5-ACTUALIZAR PROPIEDADES: OBJ.PROP = NEW VALOR');

// #region

var miMochila = {
    color: "azul",
    tamaño: "mediano",
    contenido: ["botella de agua", "cuaderno"]
};
//Objeto miMochila
console.log(JSON.stringify(miMochila));
//Modifico la propiedad color a verde
console.log("Modifico el color a " + (miMochila.color = "verde"));
//Modificado objeto miMochila
console.log("Objeto modificado: " + JSON.stringify(miMochila));

//Agrego un elemento "lapiz" a contenido
miMochila.contenido.push("lápiz");
//Vemos como queda el contenido
console.log("Agrego lapiz al contenido: " + miMochila.contenido);
//Modificado objeto miMochila
console.log("Objeto modificado: " + JSON.stringify(miMochila));

// Cambio el contenido por un array nuevi
miMochila.contenido = ["Nuevo Array vacío"]; // [] sería array vacío
console.log("Contenido asignado a nuevo array vacío: " + miMochila.contenido);

// #endregion

//-------------------------------------------------------------------
/*6-AGREGAR PROPIEDADES: OBJ.PROPIEDAD = VALOR*/ 
//------------------------------------------------------------------
console.log('\n6-AGREGAR PROPIEDADES: OBJ.PROPIEDAD = VALOR');

// #region

var curso = {
    nombre: "JS"
};

console.log(curso); //Si quiero concatenar texto + objeto, necesito el método  JSON.stringify
console.log("Curso: " + (curso)); //Me saldrá Curso: [object Object]
console.log("El objeto curso básico: " + JSON.stringify(curso));

//Agrego nuevas propiedades
curso.idioma = "Español";
curso.duracion = "300 horas";
curso.certificado = true;
curso["precio"] = "1000 euros";
curso["online"] = true;
curso["profesor"] = "Mr. Orange";

console.log(curso);
console.log("El objeto curso modificado: " + JSON.stringify(curso));
console.log("La duración del curso: " + curso.duracion);
console.log("El precio del curso: " + curso["precio"]);
console.log("El profesor curso: " + curso["profesor"]);


// #endregion

//-------------------------------------------------------------------
/*7-ELIMINAR PROPIEDADES: DELETE OBJ.PROPIEDAD*/ 
//------------------------------------------------------------------
console.log('\n7-ELIMINAR PROPIEDADES: DELETE OBJ.PROPIEDAD');

// #region

var curso2 = {
    nombre: "JS",
    idioma: "Español",
    duracion: "300 horas",
    certificado: true
};

console.log(curso); //Si quiero concatenar texto + objeto, necesito el método  JSON.stringify
console.log("Curso: " + (curso)); //Me saldrá Curso: [object Object]
console.log("El objeto curso básico: " + JSON.stringify(curso2));

//Borro la propiedad certificado, duracion, idioma
delete curso2.certificado;
delete curso2.duracion;
delete curso2.idioma;

//Muestro el curso modificado con la eliminación
console.log("El objeto curso modificado: " + JSON.stringify(curso2));

// #endregion

//-------------------------------------------------------------------
/*8-OBJETOS PARA BÚSQUEDAS: USAR OBJETO PARA REEMPLAZAR SENTENCIAS SWITCH*/ 
//------------------------------------------------------------------
console.log('\n8-OBJETOS PARA BÚSQUEDAS');

// #region

//F(X) Estructura Switch
function buscarElementoQuimico (simbolo) {
    var elementoQuimico = ""; // Lo inicio como un caracter vacío
    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio";
            break;
        case "Cl":
            elementoQuimico = "Cloro";
            break; 
    }
    return elementoQuimico;
}

console.log('Busqueda "Al" por switch: ' + buscarElementoQuimico("Al"));


//F(X) con Objeto que simula la estructura Switch
function buscarElementoQuimicoConObj (simbolo) {
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "Cl": "Cloro"
    }
    
    return simbolosQuimicos[simbolo]; //simbolo sería la propiedad ("Al","Cl") que introducimos como argumento
}

console.log('Busqueda "Al" por objeto: ' + buscarElementoQuimicoConObj("Al"));

// #endregion

//-------------------------------------------------------------------
/*9-VERIFICAR PROPIEDADES: OBJ.HASOWNPROPERTY("PROP")*/ 
//------------------------------------------------------------------
console.log('\n9-VERIFICAR PROPIEDADES');

// #region

var miBalon = {
    color: "rojo",
    "precio": "5 euros"
}

console.log(miBalon);
console.log(JSON.stringify(miBalon));

console.log('Existe la propiedad "color": '+ miBalon.hasOwnProperty("color")); //Se mostrará True
console.log('Existe la propiedad "precio": '+ miBalon.hasOwnProperty("precio")); //Se mostrará True
console.log('Existe la propiedad "peso": '+ miBalon.hasOwnProperty("peso")); //Se mostrará True

//F(X) que verifica si existe una propiedad en un objeto

function verificaPropiedad (objeto, propiedad) {
    if (objeto.hasOwnProperty(propiedad)) {
        return "Propiedad: " +  objeto[propiedad];
    } else {
        return "El objeto no tiene esta propiedad"
    }
}

//Consulto si tiene la propiedad "Precio"
console.log(verificaPropiedad(miBalon, "precio"));
//Consulo una propiedad que no tiene
console.log(verificaPropiedad(miBalon, "peso"));

// #endregion

//-------------------------------------------------------------------
/*10-OBJETOS COMPLEJOS*/ 
//------------------------------------------------------------------
console.log('\n10-OBJETOS COMPLEJOS:ARRAY DE OBJETOS, VAR ARRAY = [ {},{}]');

// #region

// Array con 2 objetos
var ordenesDePizzas = [
    {//1º objeto en POSICIÓN (índice) 0 
        "tipo": "margarita",
        "precio": 5.99,
        "toppings": [ //Esta propiedad es un array
            "extraqueso",
            "champiñones"
        ],
        "para llevar": true
    },
    {// 2º objeto en POSICIÓN (índice) 1
        "tipo": "barbacoa",
        "precio": 15.99,
        "toppings": [ //Esta propiedad es un array
            "extraqueso",
            "4 quesos",
            "pizza"
        ],
        "para llevar": false
    }
];

console.log(ordenesDePizzas);
console.log(JSON.stringify(ordenesDePizzas));

//Muestro los elementos de la posición(índice) 0 y 1 del Array
console.log(ordenesDePizzas[0]);
console.log(JSON.stringify(ordenesDePizzas[0]));

console.log(ordenesDePizzas[1]);
console.log(JSON.stringify(ordenesDePizzas[1]));

//Muestro propiedad "tipo" del elemento posición(índice) 0
console.log(ordenesDePizzas[0].tipo); //Notación punto
console.log(JSON.stringify(ordenesDePizzas[0]["tipo"])); //Notación corchete

//Muestro propiedad "toppings" del elemento posición(índice) 0
console.log(ordenesDePizzas[0].toppings); //Notación punto
console.log(JSON.stringify(ordenesDePizzas[0]["toppings"])); //Notación corchete



// #endregion

//-------------------------------------------------------------------
/*11-OBJETOS ANIDADOS: VAR OBJ = { {} }*/ 
//------------------------------------------------------------------
console.log('\n11-OBJETOS ANIDADOS');

// #region

//Objeto con 3 propiedades
    //"Propiedades" tiene 1 objeto con 2 objetos dentro (Asentamientos y Pisos)
var miStarfield = {
    "clase": "Corpo",
    "Sexo": "Masculino",
    "Propiedades": {
        "Asentamientos": {
            "nº asentamientos": 10,
            "valor asentamientos": 1000
        },
        "Pisos": {
            "nº pisos": 20,
            "valor pisos": 25000
        }
    }
};

//Muestro objeto miStarfield
console.log(miStarfield);
console.log(JSON.stringify(miStarfield));

//Muestro propiedad clase
console.log(miStarfield.clase);
console.log(JSON.stringify(miStarfield.clase));
console.log(JSON.stringify(miStarfield["clase"]));

//Muestro propiedad Sexo
console.log(miStarfield.Sexo);
console.log(JSON.stringify(miStarfield.Sexo));
console.log(JSON.stringify(miStarfield["Sexo"]));

//Muestro propiedad Propiedades
console.log(miStarfield.Propiedades);
console.log(JSON.stringify(miStarfield.Propiedades));
console.log(JSON.stringify(miStarfield["Propiedades"]));

//Muestro elemento Asentamientos de Propiedades
console.log(miStarfield.Propiedades.Asentamientos);
console.log(JSON.stringify(miStarfield.Propiedades.Asentamientos));
console.log(JSON.stringify(miStarfield.Propiedades["Asentamientos"]));

//Muestro elemento nº asentamientos del objeto Asentamientos del  Propiedades
console.log("El nº de asentamientos: " + miStarfield.Propiedades.Asentamientos["nº asentamientos"]);

// #endregion

//-------------------------------------------------------------------
/*12-ARRAYS ANIDADOS: VAR OBJ = [ {[]} ]*/ 
//------------------------------------------------------------------
console.log('\n12-ARRAYS ANIDADOS: VAR OBJ = [ {[]} ]');

// #region

var misPlantas = [
    {//1º objeto en posición 0
        tipo: "flores", //si no pones comillas a tipo, JS lo hace luego al ser una sola palabra
        lista: [
            "rosas",
            "tulipanes",
            "dientes de leon"
        ]
    },
    {//2º objeto en posición 1
        tipo: "árboles", //si no pones comillas a tipo, JS lo hace luego al ser una sola palabra
        lista: [
            "abedul",
            "roble",
            "pino"
        ]
    }
];

console.log(misPlantas);
console.log(JSON.stringify(misPlantas));

//Acceder al elemento "rosas" (posición 0) de lista del 1º objeto (posición 0)
console.log(misPlantas[0].lista[0]); //Notación de punto
console.log(misPlantas[0]["lista"][0]); //Notación de corchete

// #endregion

//-------------------------------------------------------------------
/*13-APP: COLECCIÓN DE DISCOS*/ 
//------------------------------------------------------------------
console.log('\n13-APP: COLECCIÓN DE DISCOS');

// #region 

// #endregion 

//#endregion Seccion 6


//SECCIÓN 7:CICLOS
console.log("\n------SECCIÓN 7:CICLOS------");
// #region Seccion 7

//-------------------------------------------------------------------
/*1-CICLO WHILE:NO SABEMOS Nº ESPECÍFICO ITERACIONES*/ 
//------------------------------------------------------------------
console.log('\n1-CICLO WHILE:NO SABEMOS Nº ESPECÍFICO ITERACIONES');

// #region 

var iteracion = 0;

// Mientras condición (iteracion <= 3) sea TRUE se repite el código
while (iteracion <= 3) {
    console.log("Esto es una iteracion (parte de 0) que se ejecuta (4 VECES) mientras iteracion <= 3");
    iteracion++; //En cada ciclo iteracion aumenta en +1
};

//Agregar numeros entre 0-9 al Array vacío
var miArrayVacio = [];
var i = 0;

console.log("Array vacío: " + miArrayVacio);

// Mientras condición (i < 10) sea TRUE se repite el código
while (i < 10) { // Si fuera i <= 10, llegaría hasta 10 al hacer otra iteracion
    miArrayVacio.push(i); //agrego i en cada iteración del bucle
    i++; //En cada ciclo i aumenta en +1
};

console.log("Array con num entre 0-9: " + miArrayVacio);

//Eliminar elementos de un array mientras longitud del array > 4
var arrayWhile = [1,2,3,4,5,6,7,8,9,];

// Mientras condición (arrayWhile.length > 4) sea TRUE se repite el código
while (arrayWhile.length > 4) {
    arrayWhile.pop();
};

console.log(arrayWhile);


// #endregion 

//-------------------------------------------------------------------
/*2-CICLO FOR: SABEMOS Nº ESPECÍFICO ITERACIONES*/ 
//------------------------------------------------------------------
console.log('\n2-CICLO FOR: SABEMOS Nº ESPECÍFICO ITERACIONES');

// #region 

//Agregar numeros entre 0-9 al Array vacío
var miArrayFor = [];

console.log(miArrayFor);

//for (inicializo i; condición true; incremento i)
for (var i = 0; i < 10;i++) { // i = i+2 IDEM i+= 2
    miArrayFor.push(i); //En cada iteración agrego i (parte de 0) al array
};

console.log(miArrayFor);

//Agregar nº impares entre 1 y 19 al un array vacío
var miArrayFor2 = [];

console.log(miArrayFor2);

for (var i = 1; i <= 19; i+= 2 ) { // Valdría i < 20, i = i + 2
    miArrayFor2.push(i);
};

console.log(miArrayFor2);

// #endregion 


//-------------------------------------------------------------------
/*3-CICLO FOR: CONTAR HACIA ATRÁS*/ 
//------------------------------------------------------------------
console.log('\n3-CICLO FOR: CONTAR HACIA ATRÁS');

// #region 

//Contar hacia atrás desde 15 a 10 y mostrarlo por consola
for (var i = 15; i >= 10; i--) {
    console.log("Cuenta hacia atrás de 15 a 10: " + i);
};

//Agregar num pares desde 10 a 0 (no inclusive)
var miArrayFor3 = [];

console.log(miArrayFor3);

for (i = 10; i > 0; i -= 2) { // i = i - 2, i >= 0 si queremos que entre el 0
    miArrayFor3.push (i)
};

console.log(miArrayFor3);

// #endregion 

//-------------------------------------------------------------------
/*4-CICLO FOR: ITERAR SOBRE UN ARRAY (OBTENER CADA ELEMENTO DEL ARRAY)*/ 
//------------------------------------------------------------------
console.log('\n4-CICLO FOR: ITERAR SOBRE UN ARRAY (OBTENER CADA ELEMENTO DEL ARRAY)');

// #region 

//Sumar los valores de los elementos de un array (1+10+100+1000)
var miArrayFor4 = [1, 10, 100, 1000]
var totalSumaElementos = 0;

// i coincide con el índice 0 del array
for (var i = 0; i < miArrayFor4.length; i++) { //la longitud del array es 4
    console.log("iteracion " + i);
    console.log("Sumo " + miArrayFor4[i]);

    totalSumaElementos += miArrayFor4[i]; // totalSumaElementos = totalSumaElementos + miArrayFor4[i]
}

console.log (totalSumaElementos);


// Convertir a mayúsculas todas las cadenas de caracteres del array
var lenguajeProgramacion = ["Javascript", "Python", "Java", "C++"];

// i coincide con el índice del Array, 0 sería Javascript, 1 sería Python
for (var i = 0; i < lenguajeProgramacion.length;i++ ) {
    console.log(lenguajeProgramacion[i].toUpperCase()) //toUpperCase() pasa a mayúscula
};


//F(X) que cuenta el total de numeros pares que encuentra en un Array
function contarNumPares (array) {
    var totalNumPares = 0;
    
    for (var i = 0; i< array.length; i++) {
        if (array[i] % 2 == 0) {
            totalNumPares++
        }
    }
    return totalNumPares
};

console.log("El nº de pares del array [0,1,2,3,4,5,6]: " + contarNumPares([0,1,2,3,4,5,6])); //Tiene 4 pares (0,2,4,6)

// #endregion 

//-------------------------------------------------------------------
/*5-CICLO FOR ANIDADOS:FOR DENTRO DE UN FOR*/ 
//------------------------------------------------------------------
console.log('\n5-CICLO FOR ANIDADOS:FOR DENTRO DE UN FOR');

// #region 

var miArrayMultidemensional = [[1,2,3], [4,5,6], [7,8,9]];

// Si queremos trabajar con los array anidados me vale 1 for
for (i = 0; i < miArrayMultidemensional.length; i++ ) {
    console.log("Array en el índice " + i);
    console.log(miArrayMultidemensional[i]);
    
};

// Si queremos trabajar con los elementos de los array anidados necesitamos un For anidado
for (i = 0; i < miArrayMultidemensional.length; i++ ) { //Ciclo Externo para arrays anidados
    // Cogemos el array anidado y lo pasamos a una variable con la que trabajar
    var arrayAnidado = miArrayMultidemensional[i]; // Array anidado
    console.log(">>> Array anidado en el índice " + i + ": " + arrayAnidado);
    // Ya estamos en el array anidado
    for (j = 0; j < arrayAnidado.length; j++ ) { //Ciclo Interno para elementos de los arrays anidados=> otra letra para iteración (j)
        console.log("Elemento en el subíndice " + j + " del Array anidado");
        console.log(arrayAnidado[j]); // Elemento del Array anidado   
    };
};

// #endregion 

//-------------------------------------------------------------------
/*6-CICLO DO ... WHILE*/ 
//------------------------------------------------------------------
console.log('\n6-CICLO DO ... WHILE:SE EJECUTA MIN 1 VEZ');

// #region 

// Comparativa con el While
var numWhile;
numWhile = 5;

while (numWhile < 10) {
    console.log(numWhile);
    numWhile++;
};

// Do While se ejecuta al menos una vez
var numDo;
numDo = 10;

do {
    console.log("Do se ejecuta min 1 vez: " + numDo);
    numDo++;
} while (numDo < 10); 

// #endregion 

//-------------------------------------------------------------------
/*7-APP: BÚSQUEDA DE PERFIL*/ 
//------------------------------------------------------------------
console.log('\n7-APP: BÚSQUEDA DE PERFIL');

// #region 

// Hacer F(x) que permita buscar UNA PROPIEDAD (tras introdirla) en la lista de contactos a partir del NOMBRE introducido
var contactos = [
    { // 1º objeto, ÍNDICE 0
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "01",
        "gustos": ["pizza", "Programación"]
    },
    { // 2º objeto, ÍNDICE 1
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "02",
        "gustos": ["Conspiraciones", "Tv-Shows"]
    }
];

console.log(JSON.stringify(contactos));

//Necesitamos un FOR para ir elemento a elemento del array
function buscarPefil (nombre,propiedad) {
    // i coincide con el índice del array contactos, si es 0 comienza en el 1º objeto
    for (var i = 0; i < contactos.length; i++) {
        //Si propiedad nombre === nombre introducido como argumento, retorna la propiedad introducida como argumento
        if (contactos[i].nombre === nombre ){// También valecontactos[i]["nombre"]
            // || "TEXT" es CÓDIGO DE RESPALDO  para mostrar si NO EXISTE la propiedad, lo que da UNDEFINED YFALSE EN CONTEXTOS BOOLEANOS
            // Con || se retorna la 1º expresión que sea TRUE
            return contactos[i][propiedad] || "La propiedad buscada no existe";// Propiedad es una variable, MUST NOTACIÓN CORCHETE
        } //FALLO SI aquí RETURN sms de no está el contacto: se mostraría en la 1º iteración si no coincide aunque existiera el nombre en las siguientes iteraciones
    //Si tras toda la iteración no se encuentra el nombre, retornamos un sms
    return "El contacto no está en la lista" // Se pone aquí el Return sms, tras asegurarse hacer todos los ci
    }
};

console.log("Buscamos por Nora y Gustos: " + buscarPefil("Nora","gustos"));

console.log("Buscamos por Nora y Propiedad que no existe: " + buscarPefil("Nora","pisos"));
console.log("Buscamos por Nombre que no existe y Gustos: " + buscarPefil("Ramon","gustos"));
// #endregion 

// #endregion Seccion 7


//SECCIÓN 8:NÚMEROS ALEATORIOS
console.log("\n------SECCIÓN 8:NÚMEROS ALEATORIOS------");
// #region Seccion 8

//-------------------------------------------------------------------
/*1-NUMEROS ALEATORIOS*/ 
//------------------------------------------------------------------
console.log('\n1-NUMEROS ALEATORIOS: MATH.RANDOM()');

// #region 

//Math.random() genera un num entre 0 y 1 NO INCLUIDO (0.9999999...)

//Dentro de una F(x)
function generaFraccionAleatorio () {
    return Math.random();
};

console.log("Num fraccional aleatoerio entre 0 y casi 1: " + generaFraccionAleatorio ());
console.log(generaFraccionAleatorio ());

//Fuera de una F(x)
console.log(Math.random());

var numAleatorio = Math.random();
console.log (numAleatorio)

// #endregion 

//-------------------------------------------------------------------
/*2-NUMEROS ALEATORIOS ENTEROS: MATH.FLOOR( MATH.RANDOM() * num entero)*/ 
//------------------------------------------------------------------
console.log('\n2-NUMEROS ALEATORIOS ENTEROS: MATH.FLOOR( MATH.RANDOM() * num entero)');

// #region 

//Math.floor redondea por abajo a ENTEROS el producto de 0 * 20, 0.001 * 20... 0.999 * 20 (=> 19)
var numAleatorioEntre0y19 = Math.floor(Math.random() * 20);

console.log ("Num Entero aleatorio entre 0-19: " + numAleatorioEntre0y19);

// F(X) que genera un num entero aleatorio a partir de un limite supeior
function generarNumEnteroAleatorio (limiteSuperior) {
    return Math.floor(Math.random () * limiteSuperior )
};

console.log("Num Entero aleatorio entre 0 y Lim Superior 3: " + generarNumEnteroAleatorio(3));
console.log("Num Entero aleatorio entre 0 y Lim Superior 40: " + generarNumEnteroAleatorio(40));
console.log("Num Entero aleatorio entre 0 y Lim Superior 10: " + generarNumEnteroAleatorio(10));
console.log("Num Entero aleatorio entre 0 y Lim Superior 100: " + generarNumEnteroAleatorio(100));

//Bucle de 4 iteraciones generando Num Entero aleatorio entre 0 y Lim Superior 10
for (var i = 0; i < 4;i++) {
    console.log("Iteración: " + i);
    console.log("Num Entero aleatorio entre 0 y Lim Superior 10: " + generarNumEnteroAleatorio(10));
}
// #endregion 

//-------------------------------------------------------------------
/*3-NUMEROS ALEATORIOS ENTEROS EN UN RANGO: MATH.FLOOR( MATH.RANDOM() * (limiteSuperior - limiteInferior + 1) + limiteInferior */ 
//------------------------------------------------------------------
console.log('\n3-NUMEROS ALEATORIOS ENTEROS EN UN RANGO: MATH.FLOOR( MATH.RANDOM() * (limiteSuperior - limiteInferior + 1) + limiteInferior');

// #region

// F(X) que genera un num entero aleatorio a partir de un limite supeior y límite inferior
function generarNumEnteroRango (limiteInferior,limiteSuperior) {
    return Math.floor(Math.random () * (limiteSuperior - limiteInferior + 1) + limiteInferior );
};

console.log("Num entero aleatoerio entre Lim Inferior 2 y Lim Superior 20" + generarNumEnteroRango(2,20));

//Generar 5 iteraciones de num entero aleatoerio entre 2 y 20
for (var i = 0; i < 5;i++) {
    console.log("Iteración: " + i);
    console.log("Num entero aleatoerio entre Lim Inferior 2 y Lim Superior 20" + generarNumEnteroRango(2,20));
}
// #endregion

// #endregion Seccion 8

// #region
// #endregion
