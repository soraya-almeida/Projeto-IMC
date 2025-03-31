function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2);
    let resultado = `Seu IMC é: ${imc.toFixed(1)}\n`;

    if (imc < 18.5) {
        resultado += "Você está Abaixo do Peso ideal";
    } else if (imc >= 18.5 && imc < 25) {
        resultado += "Você está no Peso ideal";
    } else if (imc >= 25 && imc < 30) {
        resultado += "Você está Levemente Acima do Peso ideal";
    } else if (imc >= 30 && imc < 35) {
        resultado += "Você está com Obesidade";
    } else if (imc >= 35 && imc < 40) {
        resultado += "Você está com Obesidade Severa";
    } else {
        resultado += "Você está com Obesidade Mórbida";
    }

    return resultado;
}

// Exemplo de uso (você pode substituir esses valores pelos inputs do HTML)
let peso = prompt("Qual o seu peso?");
let altura = prompt("Qual a sua altura?");

peso = parseFloat(peso);
altura = parseFloat(altura);

if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    alert(calcularIMC(peso, altura));
} else {
    alert("Por favor, insira valores válidos para peso e altura.");
}
