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

let getsalario = (empleados)=> {

  return new Promise( (resolve, reject)=>{

  let salarioBD = salario.find (salario => salario.id === empleados.id);
        if (!salarioBD) {
        	reject(`no se encontro un salario para el empleado ${ empleados.nombre}`);
        }else{
        	resolve({
        		nombre: empleados.nombre,
        		salario: salarioBD.salario,
        		id: empleados.id
        	})  
       
        } 



  })
   

}





getempleado(1 ).then(empleados => {
	
console.log('empleados de BD', empleados); 
    getsalario(empleados).then(resp  => {
	     console.log(`el salario de ${resp.nombre} es de ${ resp.salario}$`); 
     }, (err)=>{
     	console.log(err);

     });

}, (err)=>{
	console.log(err);
}); 