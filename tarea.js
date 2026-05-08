const prompt = require("prompt-sync")()

//Primer ejercicio

let nombre = prompt("Como te llamas? ")
console.log("bienvenido " + nombre)

//Segundo ejercicio

let nmrs1 = parseInt(prompt("ingrese un numero "))
let nmrs2 = parseInt(prompt("ingrese un numero "))
console.log(nmrs1 + nmrs2)

//tercer ejercicio

let num = parseInt(prompt("Ingresa un numero "))
console.log("Tu numero es " + num  + " el doble es " + num*2  + " el triple es " + num*3)

//Cuarto ejercicio

let lado1 = parseInt(prompt("Ingresa un numero "))
let lado2 = parseInt(prompt("Ingresa un numero "))
console.log("El area de su rectangulo es " + (lado1 * lado2))

//Quinto ejercicio

let grados =  parseInt(prompt("Ingresa un grado "))
console.log("tus grados celsius " + grados + " en Fahrenheit es " + ((grados*1.8)+32))

//Sexto ejercicio

let edad = parseInt(prompt("Ingresa una edad "))
if (edad >= 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

//Septimo Ejercicio

let nm1 = parseInt(prompt("Ingresa un valor "))
let nm2 = parseInt(prompt("Ingresa un valor "))
if (nm1 > nm2){
    console.log("es mayor")
}else{
    console.log("es menor")
}

//Octavo Ejercicio

let nota1 = parseInt(prompt("Ingresa una nota "))
let nota2 = parseInt(prompt("Ingresa una nota "))
let nota3 = parseInt(prompt("Ingresa una nota "))

console.log("Su promedio es " + ((nota1+nota2+nota3)/3))

//Noveno Ejercicio

let nm3 = parseInt(prompt("ingrese un numero "))
if (nm3 % 2 === 0){
    console.log("Es par ")
}else{
    console.log("Es impar")
}

//Decimo Ejercicio

let nm4 = parseInt(prompt("ingrese un número "))
if(nm4 >= 0){
    console.log( nm4 + " Es positivo ")
}else if( nm4 === 0){
    console.log( nm4 + " Es Cero ")
}else{
    console.log( nm4 + " Es negativo ")
}

//Decimo Primer Ejercicio

let descuento = parseInt(prompt("Ingrese valor de su compra "))
let valorcmpr = 0
if(descuento >= 150 ){
    valorcmpr = descuento * 0.15
    console.log("El valor de su compra es " + descuento + " Se le aplica un descuento del 15% es igual a " + valorcmpr )
}else if(descuento >= 100 && descuento <=150 ){
    valorcmpr = descuento * 0.10
    console.log("El valor de su compra es " + descuento + " Se le aplica un descuento del 10% es igual a " + valorcmpr )
}else{
    console.log("el valor de su compra es " + descuento + " No se le aplica descuento ")
}

//Decimo segundo Ejercicio

let edad1 = parseInt(prompt("Ingrese su edad "))
if(edad1 >= 0 ){
    if(edad1 <= 12){
        console.log( "su edad es " + edad1 + " pertenece al grupo de niños ")
    }else if(edad1 >= 13 && edad <= 17 ){
        console.log( "Su edad es " + edad1 + " pertenece al grupo de jovenes ")
    }else{
        console.log( "su edad es " + edad1 + " pertenece al grupo de adulto")
    }
}else{
    console.log( "invalido ")
}

//Decimo Tercer Ejercicio 

let usuarioBD = "admin"
let contraBD = "1234"

let usuario = prompt("ingrese un usuario ")
let contra = prompt("ingrese una contraseña ")

if(usuario === usuarioBD && contra === contraBD){
    console.log("Acceso concedido")
}else{
    console.log("Acceso Denegado")
}

//Decimo Cuarto Ejercicio

console.log("====MENÚ====")
console.log("1. Saludar ")
console.log("2. Mostrar Fecha ")
console.log("3. Mostrar Mensaje Motivacional ")
console.log("4. Salir ")

let option = parseInt(prompt("Seleccion una opcion "))

if(option == 1){
    console.log("Hola, bienvenido al sistema ")
}else if(option == 2){
    let fecha= new Date()
    console.log("La fecha actual es " + fecha)
}else if(option == 3){
    console.log("nunca te rindas, sigue siempre adelante ")
}else if(option == 4){
    console.log("saliendo del sistema...")
}else{
    console.log("error")
}

//Decimo Quinto ejercicio

let año = parseInt(prompt("ingrese un año"))

if((año % 4 == 0 && año % 100 != 0 ) || (año % 400 == 0)){
    console.log("es un año Bisiesto")
}else{
    console.log("No es un año Bisiesto")
}

//Decimo Sexto Ejercicio

let nm7 = parseInt(prompt("ingrese un numero "))
let nm5 = parseInt(prompt("ingrese un numero "))
let nm6 = parseInt(prompt("ingrese un numero "))

if(nm7 > nm5 && nm7 > nm6){
    console.log("el numero mayor es " + nm7)
}else if(nm5 > nm7 && nm5 > nm6){
    console.log("el numero mayor es " + nm5)
}else{
    console.log("el numero mayor es " + nm6)
}

//Decimo Septimo Ejercicio
let notasEs = parseInt(prompt("ingrese notas"))

if(notasEs <= 4){
    console.log("D -REPROBADO- ")
}else if(notasEs <= 6){
    console.log("C -REGULAR- ")
}else if(notasEs <=8 ){
    console.log("B -BUENO- ")
}else if(notasEs <= 10 ){
    console.log("A -EXCELENTE ")
}else{
    console.log("Error")
}

//Decimo Octavo Ejercicio

let edad2 = parseInt(prompt("ingrese su edad "))
let acceso = (edad2 >=18 ) ? "Acceso Permitido" : "Acceso Denegado"
console.log(acceso)

//Decimo Noveno Ejercicio

for(let i = 1; i <= 10 ; i++){
    console.log(i)
}

//Vigésimo 

let nume1 = 1
let suma = 0

while(nume1 != 0){
    nume1 = parseInt(prompt("ingrese un numero "))
    suma += nume1
}

console.log( "la suma total es " + suma)

//Vigésimo primero

let nume2 = parseInt(prompt("Ingrese un número "))

for(let i = 0 ; i <= 10 ; i++){
    console.log(nume2 + "x" + i + "=" + (nume2*i))
}

//Vigésimo segundo

let longitud = parseInt(prompt("Ingrese longitud del arreglo: "))
let positivos = 0

for(let i = 0; i < longitud; i++){
    let num3 = parseInt(prompt("Ingrese un valor: "))
    if(num3 > 0){
        positivos ++
    }
}
console.log("cantidad de numeros positivos es: " + positivos )

//Vigésimo tercero


let secreto = 7
let num4 = 0

for(let intentos = 3; intentos > 0; intentos--){

    num4 = parseInt(prompt("Adivine el numero: "))

    if(num4 == secreto){

        console.log("Correcto, adivinaste")
        break

    }else if(num4 > secreto){

        console.log("Te pasaste")

    }else{

        console.log("Estas por debajo")

    }

    console.log("Intentos restantes: " + (intentos - 1))
}

if(num4 != secreto){
    console.log("Perdiste")
}

//Vigésimo cuarto

function promedio(a,b,c){
    return (a+b+c)/3
}
console.log("El promedio es: " + promedio(8, 9 ,10))

//Vigésimo quinto

function esPrimo(num){

    if(num <= 1){
        console.log("No es primo")
        return
    }

    let primo = true

    for(let i = 2; i < num; i++){

        if(num % i == 0){
            primo = false
        }

    }

    if(primo){
        console.log("Es primo")
    }else{
        console.log("No es primo")
    }
}

esPrimo(7)

//Vigesimo sexto

function factorial(num){

    let resultado = 1

    for(let i = 1; i <= num; i++){
        resultado = resultado * i
    }

    console.log("El factorial es: " + resultado)
}

factorial(5)

//Vigésimo septimo

function sumar(a, b){
    console.log("Resultado: " + (a + b))
}
function restar(a, b){
    console.log("Resultado: " + (a - b))
}
function multiplicar(a, b){
    console.log("Resultado: " + (a * b))
}
function dividir(a, b){
    console.log("Resultado: " + (a / b))
}

console.log("===== CALCULADORA =====")
console.log("1. Sumar")
console.log("2. Restar")
console.log("3. Multiplicar")
console.log("4. Dividir")

let opcion = parseInt(prompt("Elija una opcion: "))
let num1 = parseFloat(prompt("Ingrese primer numero: "))
let num2 = parseFloat(prompt("Ingrese segundo numero: "))

if(opcion == 1){
    sumar(num1, num2)
}else if(opcion == 2){
    restar(num1, num2)
}else if(opcion == 3){
    multiplicar(num1, num2)
}else if(opcion == 4){
    dividir(num1, num2)
}else{
    console.log("Opcion invalida")
}