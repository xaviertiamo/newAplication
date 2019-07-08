let empleados = [{
	id:1,
	nombre: 'xavier'
},{
	id:2,
    nombre: 'francisco'

},{
	id:3,
	nombre: 'tiamo'
}];


let salario= [{
	id:1,
	salario: 1000
},{
	id:2,
	salario:2000
}];



let getempleado = (id)=> {

   return new Promise( (resolve, reject) => {

 let empleadoBD = empleados.find(empleados => empleados.id === id)
	
	if (!empleadoBD) {
		reject(`no existe un empleado con id ${ id }`);
	} else {
	   resolve(empleadoBD);
 	}
     
	
  });

}


getempleado(2).then(empleados => {
	console.log('empleados de BD', empleados);
}) 