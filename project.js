const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

const valorImposto = calcularImposto(valorSalario);
const saida = valorSalario - valorImposto + valorBeneficios;

console.log(saida.toFixed(2));

// Função para cálculo do imposto
function calcularImposto(salario) {
    let aliquota = 0;

    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    } else if (salario <= 2500) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }

    return aliquota * salario;
}
