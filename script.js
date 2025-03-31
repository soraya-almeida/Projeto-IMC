function calcular() {
    let peso = (document.getElementById("peso").value);
    let altura = (document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    
}

if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.innerHTML = "Por favor, insira valores válido!";
    resultado.styles.color = "red";
    return;
}
let imc = peso / (altura ** 2);

let mensagem = `Seu IMC é: ${imc.toFixed(1)}<br>`
