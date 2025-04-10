let dado1;
let dado2;
let suma;
let apariciones = [];

for (let i = 1; i <= 50; i++) {
    dado1 = Math.floor(Math.random() * 6 + 1);
    dado2 = Math.floor(Math.random() * 6 + 1);
    
    suma = dado1 + dado2;

    apariciones.push(suma);
}

console.log(apariciones);

document.write(`<table><thead><tr><th>Suma</th><th>Apariciones</th></tr></thead><tbody>`);

for (let j = 2; j <= 12; j++) {
    document.write(`<tr><td>${j}</td>`);
    const repeticiones = apariciones.filter(numero => numero == j);
    document.write(`<td>${repeticiones.length}</td></tr>`);
}

document.write(`</tbody></table>`);