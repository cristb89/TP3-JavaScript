let ciudades = [];

do {
    let ciudad = prompt("Ingrese el nombre de una ciudad");
    ciudades.push(ciudad);
} while (confirm("¿Desea agregar otra ciudad?") === true);

document.write(`<h1>Arreglo de Ciudades</h1>`);

document.write(`<h2>El arreglo ciudades tiene ${ciudades.length} elementos</h2>`);

document.write(`<ul>`);
document.write(`<li>Elemento en la 1º posición: ${ciudades[0]}</li>`);
document.write(`<li>Elemento en la 3º posición: ${ciudades[2]}</li>`);
document.write(`<li>Elemento en la ultima posición: ${ciudades[ciudades.length -1]}</li>`);

ciudades.push('Paris');

document.write(`<li>Elemento en la 2º posición: ${ciudades[1]}</li>`);

ciudades[1] = ('Barcelona');

for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);    
}

document.write(`</ul>`);