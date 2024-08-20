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
