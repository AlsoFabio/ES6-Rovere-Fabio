// 1---------------------------------------

const saludo=(nombre)=>`Hola ${nombre}`;
// Mostrar el resultado por consola
console.log(saludo('Alejandro'));

// 2---------------------------------------

const multi=(a,b)=>a*b
// Mostrar el resultado por consola
console.log(multi(3,15))

// 3---------------------------------------

const invocarAlumno=((nombre, apellido, edad, ...materias)=>{return {nombre,apellido,edad,materias}})
// Mostrar el resultado por consola.
console.log(invocarAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))

// 4---------------------------------------

let mostrarFecha = ((dia,mes,anio)=>`Hoy es ${dia}/${mes}/${anio}`)
// Mostrar el resultado por consola.
console.log(mostrarFecha('10','09','2022'))