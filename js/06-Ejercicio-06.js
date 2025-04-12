let altura;
let base;
let perimetro;

function obtenerPerimetro(altura, base) {
    perimetro = 2 * (altura + base)
    document.write(`<h1>Perimetro Del Rectángulo</h1>`);
    document.write(`<p>ALTURA: ${altura}</p><p>BASE: ${base}</p><p>PERÍMETRO: ${perimetro}</p>`);
}

do {
    altura = parseInt(prompt('Ingrese un valor para la altura de un rectángulo'));
    base = parseInt(prompt('Ahora ingrese un valor para la base del rectángulo'));
} while (isNaN(altura) || isNaN(base));

obtenerPerimetro(altura, base);