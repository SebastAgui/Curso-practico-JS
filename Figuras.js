// codigo del cuadrado
console.log('hellow, world');
//const ladoCuadrado = 5;
//console.log('los lados del cuadrado miden ' + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado(4)

// console.log('el perimetro del cuadrado es ' + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

//const areaCuadrado = ladoCuadrado*ladoCuadrado;
//console.log('el area del cuadrado es ' + areaCuadrado + "cm^2");

// codigo del triangulo

function perimetroTriagulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areatriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return diametro * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo;
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// aca interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    // con esas dos lineas traemos el valor del input

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    // con esas dos lineas traemos el valor del input

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    // con esas dos lineas traemos el valor del input

    const area = areaCuadrado(value);
    alert(area);
}