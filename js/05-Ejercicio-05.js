let texto = "";

function analizarTexto(texto) {
    if (texto === texto.toUpperCase()) {
        document.write(`<p>El texto ingresado está formado solo por mayusculas.</p>`);
    } else if (texto === texto.toLowerCase()){
        document.write(`<p>El texto ingresado está formado solo por minusculas.</p>`);
    } else {
        document.write(`<p>El texto ingresado está formado por mayusculas y minusculas.</p>`);
    }
}

do {
    texto = prompt("Por favor, escribe texto:");
} while (!texto || texto.trim() === "");

analizarTexto(texto);