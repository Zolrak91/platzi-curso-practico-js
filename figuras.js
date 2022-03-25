// Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado(ladoCuadrado)}cm`);
console.log(`El área del cuadrado es: ${areaCuadrado(ladoCuadrado)}cm^2`);

console.groupEnd();

// Código del triángulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
console.log(`La altura del triángulo mide: ${alturaTriangulo}cm`);
console.log(`El perímetro del triángulo es: ${perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo)}cm`);
console.log(`El área del triángulo es: ${areaTriangulo(baseTriangulo, alturaTriangulo)}cm^2`)

console.groupEnd();

// Código del círculo
console.group("Círculo");

const radioCirculo = 4;
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return PI * (radio * radio);
}

console.log(`El círculo tiene un radio de ${radioCirculo}cm`);
console.log(`El perímetro del círculo es: ${perimetroCirculo(radioCirculo)}cm`);
console.log(`El área del círculo es: ${areaCirculo(radioCirculo)}cm^2`);

console.groupEnd();