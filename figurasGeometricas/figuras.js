
/* Cuadrados */
console.group("Cuadrados")
//perimetro cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

//area cuadrado
function areaCuadrado(lado) {
    return lado**2;
}
console.groupEnd();

/* Triángulos */
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}
//area triángulo
function areaTriangulo(base, altura) {
    return (base * altura)/2;  
}
console.groupEnd();

/* Círculo */

console.group("Círculos");

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//Pi
const PI = Math.PI;
console.log(`El valor de PI es: ${PI}`)
//Circunferencia

function Circunferencia(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio) {
    return PI * (radio**2)
}
console.groupEnd();

/* HTMl */
function  calcularPerimetroCuadrado() {
    let input = document.getElementById("InputCuadrado");
    let value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    let input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//triángulo
function calcularPerimetroTriangulo() {
    let input1 = document.getElementById("InputLado1");const lado1 = parseInt(input1.value);
    let input2 = document.getElementById("InputLado2");const lado2 = parseInt(input2.value);
    let input3 = document.getElementById("InputLado3");const lado3 = parseInt(input3.value);
    const perimetro = perimetroTriangulo(lado1, lado2, lado3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    let input3 = document.getElementById("InputLado3");
    const base = parseInt(input3.value);
    let inputA = document.getElementById("InputAltura");
    const altura = parseInt(inputA.value);
    const area = areaTriangulo(base,altura)
    alert(`${area}cm`);
}


//Círculo
function calcularCircunferencia() {
    let inputRadioCirculo = document.getElementById("inputRadio");
    const radio = parseInt(inputRadioCirculo.value)
    let circunferencia = Circunferencia(radio);
    alert(`${circunferencia}`)
}

function calcularAreaCirculo() {
    let inputRadioCirculo = document.getElementById("inputRadio");
    const radio = parseInt(inputRadioCirculo.value)
    let area = areaCirculo(radio);
    alert(`${area}`);
    
}

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
    else{
        alert('no lo se')
    }
}
