let estudiante = {
	nombre: 'juan',
	edad: 25,
	notas: {
		matematicas: 3,
		ingles: 4,
		programacion: 5
	}
	
};

//let getPromedio = (nota1, nota2, nota3)=> ((nota1 + nota2 + nota3)/3);

let getPromedio = (nota1, nota2, nota3)=> {
	return ((nota1 + nota2 + nota3)/3);
	
}



//console.log(getPromedio(estudiante.notas.matematicas,estudiante.notas.ingles, estudiante.notas.programacion));

module.exports = {
	estudiante,
	getPromedio
	
};
	