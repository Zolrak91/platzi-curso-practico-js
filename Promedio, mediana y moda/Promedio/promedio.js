const lista1 = [
    100,
    200,
    300,
    500
];

function calcularPromedioLista(lista) {
    // CON FOR -----------------------------------------------------------
    // let sumaLista = 0;
    // for (let i=0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // };

    // CON REDUCE --------------------------------------------------------

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    
    return promedio;
};