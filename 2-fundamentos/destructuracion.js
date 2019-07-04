let ninja = {
	nombre: 'Ryu',
	apellido:'Hayabuza',
	habilidad:'Maestro de la katana',
	getnombre:  function() {
		return `${this.nombre } ${this.apellido } - habilidad: ${this.habilidad}`
	}
} ;


//let nombre = ninja.nombre;
//let apellido = ninja.apellido;
//let habilidad = ninja.habilidad;

let { nombre: primernombre , apellido, habilidad } = ninja;





console.log(primernombre, apellido, habilidad);