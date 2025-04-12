let numero;

function mostrarTabla(numero) {
    document.write('<table><thead><tr><th>Repeticiones</th><th>Resultado</th></thead><tbody>');


    for (let i = 1; i <= 10; i++) {
        document.write(`<tr><td>${numero} x ${i}</td><td>${(numero * i)}</td></tr>`);
    }

    document.write('</tbody></table>');
}

do {
    numero = parseInt(prompt('Ingrese un número'));
} while (isNaN(numero));

document.write(`<h1>Tabla del ${numero}</h1>`);

mostrarTabla(numero);