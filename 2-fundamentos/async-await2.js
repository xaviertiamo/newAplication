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


let getempleado = async (id)=> {

 let empleadoBD = empleados.find(empleados => empleados.id === id)
	
	if (!empleadoBD) {
		throw new Error (`no existe un empleado con id ${ id }`);
	} else {
	   return empleadoBD;
 	}
     
	
  

}


let getsalario = async (empleados)=> {

  let salarioBD = salario.find (salario => salario.id === empleados.id);
        if (!salarioBD) {
        	throw new Error (`no se encontro un salario para el empleado ${ empleados.nombre}`);
        }else{
        	return {
        		nombre: empleados.nombre,
        		salario: salarioBD.salario,
        		id: empleados.id
             }; 
         }
   

}



let getinformacion = async(id) => {
 
 let empleados = await  getempleado(id);
 let resp = await getsalario(empleados);

return `${resp.nombre} tiene un salario de ${ resp.salario }$`;
}


getinformacion(1).then(mensaje => console.log(mensaje));



    
  

 