/**
* Async Await
*/


//let getnombre = async () => {

//throw new Error()


	//return 'xaviertiamo' ;

	 
//}; 

let getnombre = ( )=> {
	return new Promise( (resolve, reject) => {

setTimeout(() => {

	resolve ('xavier tiamo');


}, 3000);

		
	})
}

let saludo = async()=> {

	let nombre= await getnombre();


	return `hola como estas?  ${ nombre }`;
}


saludo().then(mensaje => {
	console.log(mensaje);
})
