// Código del cuadrado
// console.group("Cuadrado");

// const ladoCuadrado = 5;

// function perimetroCuadrado(lado) {
//     return lado * 4;
// } 

// function areaCuadrado(lado) {
//     return lado * lado;
// }

// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado(ladoCuadrado)}cm`);
// console.log(`El área del cuadrado es: ${areaCuadrado(ladoCuadrado)}cm^2`);

// console.groupEnd();

// Código del triángulo
// console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// function perimetroTriangulo(lado1, lado2, base) {
//     return lado1 + lado2 + base;
// }

// function areaTriangulo(base, altura) {
//     return (base * altura) / 2;
// }

// console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
// console.log(`La altura del triángulo mide: ${alturaTriangulo}cm`);
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo)}cm`);
// console.log(`El área del triángulo es: ${areaTriangulo(baseTriangulo, alturaTriangulo)}cm^2`)

// console.groupEnd();

// Código del círculo
// console.group("Círculo");

// const radioCirculo = 4;
// const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

// function perimetroCirculo(radio) {
//     let diametro = diametroCirculo(radio);
//     return diametro * PI;
// }

// function areaCirculo(radio) {
//     return PI * (radio * radio);
// }

// console.log(`El círculo tiene un radio de ${radioCirculo}cm`);
// console.log(`El perímetro del círculo es: ${perimetroCirculo(radioCirculo)}cm`);
// console.log(`El área del círculo es: ${areaCirculo(radioCirculo)}cm^2`);

// console.groupEnd();

// FUNCIONES PARA LOS BOTONES DEL FORMULARIO ------------------------------------------

// CUADRADO
function calcularPerimetroCuadrado() {
    let input = document.getElementById("input-cuadrado");
    let value = input.value;
    let perimetro = value * 4;
    alert(`${perimetro}cm`);
}

function calcularAreaCuadrado() {
    let input = document.getElementById("input-cuadrado");
    let value = input.value;
    let area = value * value;
    alert(`${area}cm^2`);
}

// TRIANGULO
function calcularPerimetroTriangulo() {
    let input1 = document.getElementById("input-triangulo-lado1");
    let input2 = document.getElementById("input-triangulo-lado2");
    let inputBase = document.getElementById("input-triangulo-base");
    let lado1 = Number(input1.value);
    let lado2 = Number(input2.value);
    let base = Number(inputBase.value);
    let perimetro = lado1 + lado2 + base; // Me arroja que 4 + 6 + 6 = 664
    alert(`${perimetro}cm`);
}

function calcularAreaTriangulo() {
    let inputBase = document.getElementById("input-triangulo-base");
    let base = inputBase.value;
    let inputAltura = document.getElementById("input-triangulo-altura");
    let altura = inputAltura.value;
    let area = (base * altura) / 2;
    alert(`${area}cm^2`);
}

// CIRCULO
function calcularPerimetroCirculo() {
    let inputRadio = document.getElementById("input-radio");
    let radio = inputRadio.value;
    let diametro = diametroCirculo(radio);
    let PI = Math.PI;
    let perimetro = diametro * PI;
    alert(`${perimetro}cm`);
}

function calcularAreaCirculo() {
    let inputRadio = document.getElementById("input-radio");
    let radio = inputRadio.value;
    let PI = Math.PI;
    let area = PI * (radio * radio);
    alert(`${area}cm^2`);
}