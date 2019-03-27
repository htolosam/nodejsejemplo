const {estudiante, getPromedio} = require ('./calculo');
const fs = require('fs');

console.log("El nombre del estudiante es: "+estudiante.nombre);

console.log("el promedio es: "+getPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

let {nombre, edad : anios, notas:{matematicas, ingles, programacion}} = estudiante;

console.log("El nombre del estudiante es: "+nombre);

console.log("el promedio destructurado es: "+getPromedio(matematicas, ingles, programacion));

console.log("le edad del estudiante es: "+anios);

let crearArchivo = (estudiante) => {
	texto = '' + nombre + '\n' +
	'tiene el promedio de : ' + getPromedio(matematicas, ingles, programacion);
	fs.writeFile('promedio.txt', texto, (err)=>{
		if(err) throw (err);
		console.log('se ha creado el archivo');
	});
}

crearArchivo (estudiante);
