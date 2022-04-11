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

function esPar(numero) {
    return numero % 2 == 0; // Abrevia todo el if else en 1 linea
};

function calcularPromedioLista(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
};

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

console.log(medianaSalarios(salariosColSorted));