//setTimeout( function(){
	//console.log('hola como estas?');
//}, 3000); 
 
 let getusuariobyid = ( id, callback) => {

let usuario = {
	nombre: 'xaviertiamo',
	id 

} 
if (id === 1){
   callback(`el usuario con id ${ id }, no existe en la BD`);
}else{ 

 callback(usuario);

 }

}
 getusuariobyid(1, (err,usuario)=> {

 	if (err) {
 		return console.log(err); 
 	}


console.log('usuario de base de datos',usuario);

 	});