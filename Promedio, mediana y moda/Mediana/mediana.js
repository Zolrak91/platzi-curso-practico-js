const lista1 = [
    100,
    200,
    500,
    400000000
];

function calcularMedianaLista(lista) {
    const mitadLista = lista.length / 2; 
    let mediana;
    
    if (lista.length%2 != 0) {
        mediana = lista[Math.floor(mitadLista)]; // Le puse floor envez de ceil por el index 0
    } else {
        let mitad1 = lista[mitadLista];
        let mitad2 = lista[mitadLista - 1];

        mediana = (mitad1 + mitad2) / 2; 
    };

    return mediana;
};