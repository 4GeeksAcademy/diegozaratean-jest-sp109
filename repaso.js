///////////
// Descomposición
// Reconocimiento de patrones

// Hacer una función que tome la fecha de nacimiento y calcule la edad

// PSEUDOCODIGO
// definir variable donde lamacena la fecha de nacimiento
// crear la funcion para calcular la edad
function calcularEdad(birthDay){
    // let fechaDeHoy = new Date();
    return (new Date() - birthDay)/(1000 * 60 * 60 * 24 * 365 ) 
    
}
let birthDay = new Date('1998-04-01');

console.log(calcularEdad(birthDay))

birthDay = new Date('1993-06-17');
console.log(calcularEdad(birthDay))
