
/* Cuadrados */
console.group("Cuadrados")
//perimetro cuadrado
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden" + " " + ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + " " + perimetroCuadrado  + "cm")
//area cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + " " + areaCuadrado  + "cm²")
console.groupEnd();

/* Triángulos */

console.group("Triángulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
// lados triángulo
console.log("Los lados del triángulo miden: " + " " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");
//altura triángulo
let alturaTriangulo = Math.sqrt((baseTriangulo/2) ** 2 + 6 ** 2);
alturaTrianguloFix = parseFloat(alturaTriangulo.toFixed(4));
console.log(`La altura del triangulo mide ${alturaTrianguloFix}`)
//perimetro triángulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es " + " " + perimetroTriangulo  + "cm")
//area triángulo
let areaTriángulo = ( baseTriangulo * alturaTriangulo) / 2; areaTriángulo = parseFloat(areaTriángulo.toFixed(4));
console.log("El area del Triángulo es " + " " + areaTriángulo  + "cm²")
console.groupEnd();

/* Círculo */

console.group("Círculos");

//radio

const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}`)


//Diametro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo es: ${diametroCirculo}`)

//Pi
const PI = Math.PI;
console.log(`El valor de PI es: ${PI}`)
//Circunferencia

let Circunferencia = diametroCirculo * PI;Circunferencia = parseFloat(Circunferencia.toFixed(4));
console.log(`La círcunferencia del círculo es: ${Circunferencia}`)

//Área

let areaCirculo = PI * (radioCirculo**2);areaCirculo = parseFloat(areaCirculo.toFixed(4));
console.log(`El área del círculo es: ${areaCirculo}`)
console.groupEnd();
