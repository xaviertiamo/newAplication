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



let getempleado = (id, callback) => {

	let empleadoBD = empleados.find(empleados => empleados.id === id)
	if (!empleadoBD) {
		callback(`no existe un empleado con id ${ id }`)
	} else {
		callback(null,empleadoBD);
			}
}
 

 let getsalario = ( empleados, callback)=> {
        
        let salarioBD = salario.find (salario => salario.id === empleados.id);
        if (!salarioBD) {
        	callback(`no se encontro un salario para el empleado ${ empleados.nombre}`);
        }else{
        	callback(null,{
        		nombre: empleados.nombre,
        		salario: salarioBD.salario,
        		id: empleados.id
        	})  
       
        } 
 

 }

 
getempleado(1, (err, empleados) => { 
	
if (err) {
	return console.log(err);
}

	getsalario(empleados,(err, resp) => {

if (err) {
	return console.log(err);
}; 

console.log(`el salario de ${ resp.nombre } es de ${ resp.salario }$`);

	})

});