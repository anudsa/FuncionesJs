//Sesión de funciones

/* 

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código de JS, esto aplica para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho mas intuitivo, lo que hace a grandes rasgos es 'elevar' las funciones y variables declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.


*/

//Funciones, invocación y declaración
// Declaración de una función

/*

palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}

JS, cuando es ejecutado por el motor JS del navegador primeroo lee e interpreta las variables y las funciones declaradas


*/

// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro
function nuevaFuncion(){
    console.log("Buenos días CH28");
}

nuevaFuncion();

// Ejemplo de función que si retorna un valor
// Tamién recibe un parámetro
function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}

//holaMundo("Fernando");
//console.log(holaMundo("Fernando"));


/* 

Elaborar una funci´´on que calcule la velocidad de un objeto

- velocidad= distancia / tiempo

- function 
- calcularVelocidad
(distancia, tiempo)

- elaborar el bloque de código {}

*/

function calcularVelocidad(distancia = 30, tiempo = 5){ //inicio
    //let velocidad = distancia / tiempo;
    //return "La velocidad calculada es:" + velocidad + " m/s";

    return "La velocidad calculada es: " + distancia / tiempo + " m/s";

} //cierre


console.log(calcularVelocidad());

// Funciones dentro de JS

/*

Funciones flecha  | Fat arrow   | Funciones lambda

Funciones anonimas
Funciones CallBack - Que recoben otras funciones como parametros

Promesas

Funciones async - await


*/
// Funciones flecha

/*

Son una manera más compacta y sencilla de escribir una función normal.

No son lo mismo que una función general, se utiliza en otro tipo de contextos
Funciones CallBack que requieren funciones anonimas.

Su uso es limitado.

Declaración de una función flecha

- var, let, const
const - buena práctica utilizar const para declarar funciones flecha o lambda

- nombreFuncion

- Parámetros

- Establecer el bloque de código o procesos que va a ejecutar esta función.
=> - Fat arrow

invocacion de una funcion flecha

nombreFuncionFlecha();

(); se coloca el parámetro

*/
//Función normal
function funcionNormal (parametro){
    return "Hola " + parametro;
}
//Función flecha, arrow function
const funcionFlecha = parametro => "hola" + parametro;

const funcionVarios = (datoA,datoB) => {
    let datoC = datoA+datoB;
    return datoC;
}
//Funciones flecha sin recibir un parámetro
const funcionSinParametros = () => {
    return "Funcion flecha que no recibe parametros";
}

const calcularVelocidadFecha = (distanciaFecha,tiempoFlecha) => 
{
    console.log("Distancia = " + distanciaFecha+"metros");
    console.log("Tiempo = " + tiempoFlecha + "segundos");
    return "La Velocidad calculad es = " + distanciaFecha;
}

// Funcion flecha para calcular la velocidad

const calcularVelocidadFlechaa = (distanciaFlecha, tiempoFlecha) => {
    
    console.log("Distancia =  " + distanciaFlecha + " metros");
    console.log("Tiempo = " + tiempoFlecha + " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
}