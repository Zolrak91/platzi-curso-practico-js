// HELPERS --------------------------------------------------------------------------------------

// Determina si un numero es par
function esPar(numero) {
    return numero % 2 == 0; // Abrevia todo el if else en 1 linea
};

// Calcula el promedio de una lista de elementos
function calcularPromedioLista(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
};
// -----------------------------------------------------------------------------------------------

// Crea una lista que incluya unicamente los salarios, omitiendo el nombre
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

// Crea una nueva lista con los elementos ordenados de salariosCol 
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// Calcula la mediana de una lista de elementos
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        mediana = calcularPromedioLista([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        mediana = lista[mitad];
        return mediana;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Calcula la mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceAmount = salariosColSorted.length - spliceStart;

const salariosTop10Col = salariosColSorted.splice(spliceStart, spliceAmount);
const medianaTop10Col = medianaSalarios(salariosTop10Col);


console.log(medianaGeneralCol, medianaTop10Col);