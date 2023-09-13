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
        return acumulador
    })
    return maximo
}

let maximoLista = maximo(listaNumero);
console.log("El numero maximo de: " + listaNumero + "es el: " + maximoLista);


// Contar ocurrencia de un elementento especifico

function contarOcurrencia (arreglo, objetivo){
    let ocurrencia = arreglo.reduce (( acumulador, elemento) => {
             if (elemento === objetivo) {
            acumulador = acumulador + 1
            }
    return acumulador
},0)
return ocurrencia;
}

let objetivo = 4
let contarObjetivo = contarOcurrencia(listaNumero,objetivo);
console.log("El objetivo buscado ( " + objetivo + " ) apararece en el listado:" + contarObjetivo + " veces");

// Ordenar palabras por longitud


function ordenarPorLongitud (arreglo){
    let arregloTemp = arreglo
    for (let i=0; i<arregloTemp.length; i++){
        for (let j=i+1; j<arregloTemp.length; j++){
            if (arregloTemp[j].length < arregloTemp[i].length){
                let temporal = arregloTemp[i];    
                arregloTemp[i] = arregloTemp[j];
                arregloTemp[j] = temporal;
            }
        }
    }
    return arregloTemp;
} 

let listaOrdenada = ordenarPorLongitud(listaPalabras);
console.log ("La lista ordenada de palabras es: " + listaOrdenada);

/*
function ordenarPalabras (arreglo){
    arreglo.sort((a,b) => a.length - b.length)
    return arreglo; 
}

let listaSort = ordenarPalabras(listaPalabras);
console.log ("La lista ordenada de palabras por sort es: " + listaSort); */


// Busqueda logica de un elemento especifico del arreglo

function busquedaLogica(arreglo, objetivoBusqueda) {
    for (let elemento of arreglo) {
        if (elemento === objetivoBusqueda) {
            return true; 
        }
    }
    return false; 
}

let listaPalabras2 = ["Concatenar", "Es", "Sumar", "Elementos", "Tipo", "Strings"];
let objetivoBusqueda = "Es";

if (busquedaLogica(listaPalabras2, objetivoBusqueda)) {
    console.log("La palabra buscada ( " + objetivoBusqueda + " ) está presente.");
} else {
    console.log("La palabra buscada ( " + objetivoBusqueda + " ) NO está presente.");
}


// Búsqueda de la primera coincidencia: Implementa una función 
//que busque la primera instancia de un elemento en un arreglo
// y devuelva su índice.Si el elemento no está en el arreglo,devuelve -1.


function primeraCoincidencia (arreglo, objetivoBuscado){
    let primeraCoincidencia = -1;
    for (let i=0; i<arreglo.length; i++){
        if (arreglo[i]=== objetivoBuscado){
            primeraCoincidencia = i;
            return primeraCoincidencia;
        }
    } 
}

let listaPalabras3 = ["Concatenar", "Es", "Sumar", "Elementos", "Tipo", "Strings"];
let objetivoBuscado = "Es";

let posicionPrimeraCoincidencia = primeraCoincidencia(listaPalabras3, objetivoBuscado)

if (posicionPrimeraCoincidencia != -1) {
    console.log("La palabra buscada ( " + objetivoBuscado + " ) aparece por primera vez en la posicion: "+ posicionPrimeraCoincidencia + " del arreglo");
} else {
    console.log("La palabra buscada ( " + objetivoBuscado + " ) NO está presente.");
}


// Busqueda de la ultima coincidencia

function ultimaCoincidencia (arreglo, elementoObjetivo){
    let ultimaCoincidencia = -1;
    for (let i=0; i<arreglo.length; i++){
        if (arreglo[i]=== elementoObjetivo){
            ultimaCoincidencia = i;
            //return ultimaCoincidencia; // al sacarle el return me el indice grabado en la variable sera el ultimo que haya encontrado
        }
    } 
    return ultimaCoincidencia
}

let listaPalabras4 = ["Concatenar", "Es", "Sumar", "Elementos", "Tipo","Es", "Strings"];
let elementoObjetivo = "Es";

let posicionultimaCoincidencia = ultimaCoincidencia(listaPalabras4, elementoObjetivo)

if (posicionultimaCoincidencia != -1) {
    console.log("La palabra buscada ( " + elementoObjetivo + " ) aparece por primera vez en la posicion: "+ posicionultimaCoincidencia + " del arreglo");
} else {
    console.log("La palabra buscada ( " + elementoObjetivo + " ) NO está presente.");
}

 //                        Alternativa para listar todas las posiciones del array en las que se encontro una coincidencia 

 /*
function posicionesCoincidencia (arreglo, elementoObjetivo){
    let posicionCoincidencias = [];
    for (let i=0; i<arreglo.length; i++){
        if (arreglo[i]=== elementoObjetivo){
            let coincidencia = i;
            posicionCoincidencias.push(coincidencia);
            //return ultimaCoincidencia; // al sacarle el return me el indice grabado en la variable sera el ultimo que haya encontrado
        }
    } 
    return posicionCoincidencias
}

let listaPalabras4 = ["Concatenar", "Es", "Sumar", "Elementos", "Tipo","Es", "Strings"];
let elementoObjetivo = "Es";

let posicionesObjetivo = posicionesCoincidencia(listaPalabras4, elementoObjetivo)
let posicionesObjetivoUltima = posicionesObjetivo.length // no resuelto aun

console.log("La palabra buscada ( " + elementoObjetivo + " ) aparece en las siguientes posiciones del arreglo: " + posicionesObjetivo)
console.log ("La primera coicidencia esta en la posicion: " + posicionesObjetivo[0] + "del arreglo, mientras que la ultima coicidencia aparece en la posicion: " + posicionesObjetivoUltima)



/*
if (posicionultimaCoincidencia != -1) {
    console.log("La palabra buscada ( " + elementoObjetivo + " ) aparece por primera vez en la posicion: "+ posicionultimaCoincidencia + " del arreglo");
} else {
    console.log("La palabra buscada ( " + elementoObjetivo + " ) NO está presente.");
    */

  
