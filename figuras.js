// Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${perimetroCuadrado}cm^2`);

console.groupEnd();

// Código del triángulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
console.log(`La altura del triángulo mide: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm^2`)

console.groupEnd();

// Código del círculo
console.group("Círculo")

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
console.log(`El círculo tiene un radio de ${radioCirculo}cm`)

const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`)

const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log(`El área del círculo es: ${areaCirculo}cm^2`)

console.groupEnd