function ejercicio_1 () {
let edadUsuario = prompt('Ingresa tu edad')
if (edadUsuario >= 18){
    console.log('Eres mayor de edad')
}
else{
    console.log('Eres menor de edad')
}
}

function ejercicio_2 () {
    let numeroUsuario = prompt('Ingrese un numero')
if (numeroUsuario >= 0){
    console.log('El numero es positivo')
}
else{
    console.log('El numero es negativo')
}
}

function ejercicio_3 () {
    let numeroUsuarioParImpar = prompt('Ingresa un numero')
if (numeroUsuarioParImpar % 2 == 0){
    console.log('El numero es par')
}
else{
    console.log('El numero es impar')
}
}

function ejercicio_4 () {
    let totalCompra = prompt('Ingrese el total de la compra')
if (totalCompra > 100){
    let descuento = totalCompra * 0.1
    totalCompra = totalCompra - descuento
    console.log('tienes un descuento del 10% y el total seria ' + totalCompra)
}
else{
    console.log('No tienes descuento')
}
}

function ejercicio_5 () {
    let numeroUsuario1 = prompt('Ingresa el primer numero')
let numeroUsuario2 = prompt('Ingresa el segundo numero')
if (numeroUsuario1 > numeroUsuario2){
    console.log('El primer numero es mayor')
}
else if (numeroUsuario1 < numeroUsuario2){
    console.log('El segundo numero es mayor')
}
else{
    console.log('Los numeros son iguales')
}
}

function ejercicio_6() {
    let clasificacionEdad = prompt('Ingresa tu edad')
if(clasificacionEdad >= 0 && clasificacionEdad <= 12){
    console.log('Eres un nino')
}
else if (clasificacionEdad > 12 && clasificacionEdad < 17){
    console.log('Eres un adolecente')
}
else if (clasificacionEdad >= 18 && clasificacionEdad < 65 ){
    console.log('Eres un adulto')
}
else if (clasificacionEdad >= 65 ){
    console.log('Eres un adulto mayor')
}
else{
    console.log('Edad invalida')
}
}

function ejercicio_7() {
    let nota = prompt ('Ingresa una nota entre 0-100')
if (nota >= 90 && nota <= 100){
    console.log('Excelente')
}
else if (nota >= 70 && nota <= 89){
    console.log('Bueno')
}
else if (nota >= 50 && nota <= 69){
    console.log('Regular')
}
else if (nota >= 0 && nota <= 49){
    console.log('Insuficiente')
}
}

function ejercicio_8() {
    let menu = prompt ('Selecciona: 1.pizza 2.Hamburguesa 3.tacos')
switch (menu) {
    case 1:
        console.log('seleccionastes una pizza')

        break;
    case 2:
        console.log('Seleccionastes una hamburguesa')

        break;
    case 3:
        console.log('Seleccionastes un taco')
        break;

    default:
        console.log('Opcion invalida')
        break;
}
}

function ejercicio_9() {
    let primerLadoTriangulo = promt ('Ingresa el primer lado del triangulo')
let segundoLadoTriangulo = promt ('Ingresa el segundo lado del triangulo')
let terceroLadoTriangulo = promt ('Ingresa el tercer lado del triangulo')
if (primerLadoTriangulo === segundoLadoTriangulo === terceroLadoTriangulo){
    console.log('Es un triangulo equilatero')
}
else if (primerLadoTriangulo === segundoLadoTriangulo || segundoLadoTriangulo === terceroLadoTriangulo || terceroLadoTriangulo === primerLadoTriangulo){
    console.log('Es un triangulo isosceles')
}
else{
    console.log('Es un triangulo escaleno')
}
}

function ejercicio_10() {
    let numeroParaAdivinar = prompt('Adivina un numero entre 1-10')
let numeroAleatorio = Math.floor(Math.random() * 10) + 1
if (numeroParaAdivinar === numeroAleatorio){
    console.log('Has acertado')
}
else{
    console.log('Intenta de nuevo')
}
}

function ejercicio_11() {
    let precioBase = prompt('Ingresa el precio base del producto')
if(precioBase > 500) {
    let descuento = precioBase * 0.15
    console.log('El precio final es: ' + (precioBase - descuento))
}
else if (precioBase >= 300 && precioBase <= 500) {
    let descuento = precioBase * 0.10
    console.log('El precio final es: ' + (precioBase - descuento))
}
else{
    let descuento = precioBase * 0.05
    console.log('El precio final es: ' + (precioBase - descuento))
}
}

function ejercicio_12() {
    let ano = prompt('Ingresa un año')
function esBisiesto(anio) {
    if (anio % 4 === 0) {
        if (anio % 100 === 0) {
            return anio % 400 === 0;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
if (esBisiesto(ano)) {
    console.log('El año es bisiesto')
}
else{
    console.log('El '+ ano + ' no es bisiesto')
}
}