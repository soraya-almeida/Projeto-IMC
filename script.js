function calcular() {
    let peso = (document.getElementById("peso").value);
    let altura = (document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
}

if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.innerHTML = "Por favor, insira valores válido!";
    
}
