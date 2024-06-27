
const prompt = require('prompt-sync')();

const triangulos = []

while (true) {
    const ladoA = (+prompt("Digite o valor do lado A: "));
    const ladoB = (+prompt("Digite o valor do lado B: "));
    const ladoC = (+prompt("Digite o valor do lado C: "));

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0 || ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    } else {
        console.log("Os valores informados não formam um triângulo válido.");
        let tipoTriangulo;
    } if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = "equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipoTriangulo = "isósceles";
    } else {
        tipoTriangulo = "escaleno";
    }

    triangulos.push({ ladoA, ladoB, ladoC, tipoTriangulo })

    console.log(`O triângulo é ${tipoTriangulo}.`);
}
