const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

// EL OBJETO PARA INTRODUCIR LOS VALORES EN QUE SE REPITE CADA ELEMENTO
let lista1Counter = {};

// CUENTA CUANTAS VECES APARECE CADA ELEMENTO Y LO INCLUYE COMO EL VALOR DEL OBJETO, LA KEYWORD ES EL ELEMENTO
lista1.map(function(element){
    if (lista1Counter[element]) {
        lista1Counter[element] += 1;
    } else {
        lista1Counter[element] = 1;
    }
});

// CREA UN NUEVO ARRAY Y LO ORDENA DE MENOR A MAYOR
const lista1Array = Object.entries(lista1Counter).sort(function (elementoA, elementoB){
    return elementoA[1] - elementoB[1];
});

// LA MODA ES EL ULTIMO ELEMENTO DEL NUEVO ARRAY (LENGTH - 1)
const moda = lista1Array[lista1Array.length - 1];