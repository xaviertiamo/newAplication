//function sumar(a, b){
//return a + b;
//}

//let sumar = (a, b) => a + b;

//function saludar(){
	//return ' hello my friends';
//}





//let saludar =() => 'hello my friends';

//function saludar(nombre){
	//return `hola ${ nombre }`;
//}

let saludar = nombre => `hello ${ nombre }`;

console.log(saludar( 'Master Ryu'));

//console.log( sumar(487, 277)); 



let ninja = {
	nombre: 'Ryu',
	apellido:'Hayabuza',
	habilidad:'Maestro de la katana',
	getnombre:function() {
		return `${this.nombre } ${this.apellido } - habilidad: ${this.habilidad}`
	}
} ;

 console.log(ninja.getnombre());