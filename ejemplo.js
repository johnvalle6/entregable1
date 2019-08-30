//Propiedades numerica
console.log("MAX_VALUE: ", Number.MAX_VALUE);
console.log("MIN_VALUE: ", Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
console.log("NEGATIVE_INFINITY: ", Number.POSITIVE_INFINITY);
//Not at number
//saber si el digito o dato es un numero
console.log("NaN: ", Number.NaN);
//Metodos Numericos
var numero = "10";
console.log('Number: ', typeof numero, typeof Number(numero));
console.log('parseInt: ',  parseInt(numero));
console.log('parseFloat: ', Number.parseFloat(numero));
console.log('isNaN: ', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero));
//Metodos numericos de instancias
var numero = 2.5;
console.log("toExponential: ", numero.toExponential(4));
//regresar el valor con dos decimales
//si lo pones cero lo redondea
console.log("toFixed: ", numero.toFixed(2));
//Precision digito hahsta 6
console.log("toPrecision: ", numero.toPrecision(6));
//Convierte el numero a string
console.log("toString: ", typeof numero.toString());
//11 CADENAS DE TEXTO
//*** Creando cadena de texto
var pais = 'México';
//typeof pais
var comida = new String("Ceviche");
//typeof comida
//*** Medir una cadena de texto
var mensaje = "Estoy aprendiendo JavaScript";
console.log("La cadena de texto tiene: " + mensaje.length + " letras");
//mensaje.lenght
XXX
//Métodos búsqueda | Parte 1
var mensaje = "Estoy aprendiendo JAVASCRIPT y a entender los memes y hacer memes";
var resultado;
// indexOf
//Encuentra la 1 incidencia
 resultado = mensaje.indexOf("memes");
// lastIndexOf
//Encuentra la ultima incidencia
//resultado = mensaje.lastIndexOf("memes");
// search:
//resultado = mensaje.search("memes");
// search | Expresión regular
resultado = mensaje.search(/me/i);
//i incase sensitive
console.log(resultado);
//OTROS METODOS DE BUSQUEDA
var mensaje = "Estoy aprendiendo JavaScript, sobre memes y a hacer memes";
var resultado;
// match:
// resultado = mensaje.match(/aprendiendo/gi);
//g global para encontrar todas las del string 
//i incase sensitive
// substr:
//substrae el pedazo de texto
// resultado = mensaje.substr(6,11);
// substring:
//empieza desde l inicio de la cadena
//resultado = mensaje.substring(6,17);
// charAt:
 resultado = mensaje.charAt(0);
console.log(resultado);
//METODOS DE BUSQUEDA
//Sensibles a mayuscúlas
var mensaje = "Estoy aprendiendo JavaScript, sobre memes y a hacer memes";
var resultado;
// startsWith
//SI COMIENZA CON..
// resultado = mensaje.startsWith("es");
// var textoEn =  mensaje.indexOf("JavaScript")
// resultado = mensaje.startsWith("Ja", textoEn);
// endsWith
//si termina con...
// resultado = mensaje.endsWith("JavaScript");
// includes
//si esta o no incluido
resultado = mensaje.includes("Estoy", 6);
console.log(resultado);
//Métodos de generación, 
//reemplazo y separación
var mensaje = "      Estoy aprendiendo JavaScript        ";
var resultado;
// repeat
// resultado = mensaje.repeat(200);
// replace
//retorna un resultado sin afectar el string base
//resultado = mensaje.replace("JavaScript", "a programar");
// slice
//empeiza desde la posicion 6
// resultado = mensaje.slice(6);
// resultado = mensaje.slice(6, 11)
// split
//separar toda la cadena de texro en
//un arreglo
// resultado = mensaje.split(" ");
//resultado = mensaje.split("-");
// trim
//elimina espacios en blanco al incio
//y al final
resultado = mensaje.trim();
console.log(resultado);
//Métodos de transformación
var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = " y programación";
var total = 123456;
var resultado;
//resultado = total.toString();
// resultado = mensaje.toLowerCase();
// resultado = mensaje.toUpperCase();
//+ concatenar como el +
resultado = mensaje.concat(mensaje2, ' y tengo muchas ideas', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123');
console.log(resultado);
//Plantillas y literales
var lenguaje = 'JavaScript';
var lenguaje2 = 'HTML';
var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;
//bactick o comillas especiales
//console.log(mensaje);
//---- Mensaje multilinea
var mensajeMultilinea = `
    Hola mundo,
    estoy aprendiendo
    ${lenguaje} y me gusta
    como se integra con HTML y CSS`;
console.log(mensajeMultilinea);
//#### ARREGLOS
//Creando tu primer arreglo
var platillos = [ "frijoles", "tamales", "lechona"];
var bebidas = new Array( "guarapo", "lulada", "avena" );
console.log(Array.isArray(platillos), bebidas)
//Medir y acceder a un arreglo
var platillos = ["frijoles", "tamales", "lechona","ajiaco"];
console.log("Hay "+ platillos.length + " platillos en el menú");
var platillo = platillos[platillos.length -1];
console.log("El platillo seleccionado es: ", platillo)
//Arreglos multidimensionales | Arreglo de arreglos
var platillos = ["frijol", "tamales", "ajiaco"];
var paises = ["Perú", "México", "Italia"];
var menu = [ platillos, paises ];
console.log( menu[1][0]  )
//Operaciones básicas de un arreglo
var platillos = ["ceviche", "tacos", "pasta"];
console.log('Antes:', platillos);
//platillos.push("Tostadas");
//platillos.push("Queso");
//pop no recibe parametros,
//quita el ultimo elemento
// platillos.pop();
// platillos.pop();
//join para unir
var mensaje = platillos.join();
console.log( mensaje);
//console.log('Después:', platillos);
//Generación de arreglos con split() from() y of()
//--- split()
//convierte cadena de texto a arreglo
//separad de coma ,
// var mensaje = "ceviche, tacos, pasta";
// var platillos = mensaje.split(', ');
//--- Array.from();
//textcontent
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'))
//map mapeo
var platillos = platillosHTML.map( platillo => platillo.textContent )
//--- Array.of();
//convierte totod en arreglo
var platillos = Array.of("ceviche", "tacos", "pasta");
console.log(platillos)
//Ordenando un arreglo
var platillos = ["Ceviche", "Tacos", "Pasta"];
console.log('Antes: ', platillos);
platillos.sort(); 
console.log('Ordenado: ', platillos);
platillos.reverse(); 
console.log('Después: ', platillos);
platillos.reverse(); 
console.log('Reversa de nuevo: ', platillos);
//Desestructuración de arreglos
//asignacion a la inversa
var platillos = ["ceviche", "tacos", "pasta", "tostadas"];
// var platillo1 = platillos[0];
// var platillo2 = platillos[1];
// var platillo3 = platillos[2];
// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;
// var platillo4 = null;
//Se debe asignar var si uso el use strict
var [platillo1, platillo2, platillo3, platillo4] = platillos;
console.log(platillo1, platillo2, platillo3, platillo4)
//13 BUSQUEDA EN ARREGLOS
//*** Iterando arreglos con for...in
var platillos = ["ceviche", "tacos", "pasta"];
for ( let i in platillos) {
    console.log(platillos[i])
}
//*** Iterando arreglos con forEach
var platillos = ["ceviche", "tacos", "pasta"];
// platillos.forEach( platillo => console.log(platillo) )
platillos.forEach( (platillo, index) => console.log(index, platillo) )
//********************************
//*** Buscando en un arreglo
var platillos = ["ceviche", "tacos", "pasta"];
//var pElegido = platillos.find( platillo => platillo == "tostadas");
var menu = [
    {nombre: 'Ceviche', precio: 20, pais: 'Perú'},
    {nombre: 'Tacos', precio: 10 , pais: 'México'},
    {nombre: 'Pasta', precio: 50, pais: 'Italia'}
];
var pElegido = menu.find( platillo => platillo.nombre == 'Tacos');
//*** Filtrar arreglos
var menu = [{
    nombre: 'Ceviche',
    precio: 20,
    pais: 'Perú'
},
{
    nombre: 'Tacos',
    precio: 10,
    pais: 'México'
},
{
    nombre: 'Pasta',
    precio: 50,
    pais: 'Italia'
},
{
    nombre: 'Quesadillas',
    precio: 15,
    pais: 'México'
}
];
var resultado = null;
//resultado =  menu.find(platillo => platillo.pais == 'México');
resultado =  menu.filter(platillo => platillo.pais == 'México');
console.log(resultado);
//*** Validación de elementos de un arreglo
var resultado = null;
var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas',
        precio: 15,
        pais: 'México'
    }
]
//resultado = menu.some( platillo => platillo.precio <= 10);
//console.log('¿Hay platillos abajo de 20? ', resultado);
resultado = menu.every( platillo => platillo.precio <= 60);
console.log('¿Todos los platillos cuestan menos de 10? ', resultado);
console.log(pElegido)
//*** Busqueda de índice de elementos
var platillos = ["ceviche", "tacos", "pasta"];
var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    }
]
// var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos' );
var numPlatillo = menu.findIndex( platillo => platillo.nombre == 'Pasta' );
console.log("Platillo número: ", numPlatillo);