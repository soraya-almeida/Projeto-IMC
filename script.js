function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    


if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.innerHTML = "Por favor, insira valores válido!";
    resultado.styles.color = "red";
    return;
}

let imc = peso / (altura ** 2);
let mensagem = `Seu IMC é: ${imc.toFixed(1)}<br>`;

if (imc < 18.5) {
    mensagem += "Você está Abaixo do Peso Ideal";
} else if (imc < 25) {
    mensagem += "Você está no Peso Ideal";
} else if (imc < 30) {
    mensagem += "Você está Levemente Acima do Peso Ideal";
} else if (imc < 35) {
    mensagem += "Você está com Obesidade";
} else if (imc < 40) {
    mensagem += "Você está com Obesidade Severa";
} else {
    mensagem += "Você está com Obesidade Mórbida";
}

resultado.innerHTML = mensagem;
resultado.styles.color = "black";
}