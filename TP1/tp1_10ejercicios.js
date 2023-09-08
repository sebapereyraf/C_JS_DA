// Ejercicio 1 Sumar elementos de un arreglo

let listaNumero = [4,5,6,2,8,7,4,6,9];

function sumar(arreglo){
    let suma = arreglo.reduce((acumulador, elemento) => acumulador + elemento,0);
    return suma;
}

let sumarListaNumero = sumar(listaNumero);
console.log("La suma de " + listaNumero + " es igual a " + sumarListaNumero);

// Ejercicio 2 .Multiplicación de elementos de un arreglo

function multiplicar(arreglo){
    let multiplicacion = arreglo.reduce((acumulador, elemento) => acumulador * elemento,1);
    return multiplicacion;
}

let multiplicarListaNumero = multiplicar(listaNumero);
console.log("La multiplicacion de " + listaNumero + " es igual a " + multiplicarListaNumero);

// Ejercicio 3 Concatenación de cadenas

let listaPalabras = ["Concatenar", "Es", "Sumar", "Elementos", "Tipo", "Strings"];

function concatenar (arreglo){
    let concatenar = arreglo.reduce((acumulador,elemento) => acumulador + elemento, "")
    return concatenar;
}

let concatenarListaPalabras = concatenar(listaPalabras);
console.log( "La definicion de concatenar podria ser: " + concatenarListaPalabras);

//Calcular el promedio de un arreglo

function promediar (arreglo){
        let promedio = sumar(arreglo)/arreglo.length;
        return promedio;
}

let promediarLista = promediar(listaNumero);
console.log ("El primedio de " + listaNumero + " es igual a: " + promediarLista);

// Encontrar el valor maximo

function maximo (arreglo){
    let maximo = arreglo.reduce (( acumulador, elemento) => {
        if (elemento > acumulador) {
            acumulador = elemento
        }
    })
    return acumulador
}

let maximoLista = maximo(listaNumero);
console.log("El numero maximo de: " + listaNumero + "es el: " + maximoLista);