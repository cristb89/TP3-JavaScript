let numero = parseInt(prompt("Ingrese un número entero"));

function parOimpar(numero) {
    if ((numero % 2) === 0) {
        document.write(`<p>El número "${numero}" es PAR.</p>`);
    } else {
        document.write(`<p>El número "${numero}" es IMPAR.</p>`);
    }
}

while (isNaN(numero)) {
    alert("Por favor ingrese una número valido");
    numero = parseInt(prompt("Ingrese un número entero"));
}

parOimpar(numero);