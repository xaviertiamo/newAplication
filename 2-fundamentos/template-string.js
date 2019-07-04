  let nombre = 'dead';
  let real   = 'wade';

//console.log(nombre +''+ real);
//console.log(`${ nombre } ${ real }`);

//let nombreTemplate = `${ nombre }${ real }`;

//console.log(nombreCompleto === nombreTemplate);

function getNombre() {
	return `${ nombre } ${ real }`
}

console.log(`el nombre de: ${ getNombre() }`);