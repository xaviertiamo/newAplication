const fs = require('fs');



let base =  1,2,3,4,5;
let data = '';


for (let i = 1; i <= 10; i++) {
data += `${ base }* ${ i } = ${ base * i }\n `;
}


fs.writeFile('otratabla.txt', data,(err) => {
	if (err) throw err; 

	console.log('el archivo tabla-2.txt ha sido creado');
});