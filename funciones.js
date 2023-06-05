// Ejercicios
/*
Realizar una función que realice o saatisfaga los siguientes escenarios
Realizar en manera de función general y funcion flecha.
*/

// 1 1. Calcular el cuadrado de un número. 
// General
function cuadrado(num){
    return num*num;
}
//flecha
const cuadradoFlecha = num => num*num;

// 2. Escribir un código que convierta de grados celsius a grados farenheit ºF = ºC x 1.8 + 32
//general
function convertir(celsius)
{
    return "La temperatura en Farenheit es = " + ((celsius*1.8)+32);
}  
// flecha
const convertirFlecha = celsius => "La temperatura en Farenheit es = " + ((celsius*1.8)+32);

// 3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente. V=IR
//General
function ohm(resistencia,corriente){
    return "El voltaje es: " + resistencia*corriente;
}
//Flecha
const ohmFlecha = (resistencia,corriente) => {
    return "El voltaje es: " + resistencia*corriente;
}

// 4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.
//General
function volumen(lado){
    return lado*lado*lado;
}
//flecha
const volumenFlecha = lado => lado*lado*lado;

// 5. Calcular el área de un triángulo bxh/2
//general
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
//flecha
const areaTrianguloFlecha = (base, altura) => (base*altura)/2;

// 6. Calcular el volumen de una esfera V = 4/3 π r³,
//general
function volumenEsfera(radio){
    return (4/3)*(Math.PI)*(radio**3);
}
//flecha
const volumenEsferaFlecha = radio => (4/3)*(Math.PI)*(radio**3);

//7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()
//general
function mayus(texto){
    return texto.toUpperCase();
}
//flecha
const mayusFlecha = texto => texto.toUpperCase();