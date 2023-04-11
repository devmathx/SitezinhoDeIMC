function calcular() {
    //pegando nome
    var nome = String(document.getElementById("nome").value);
    var sobrenome  = String(document.getElementById("sobrenome").value);
    //pegando idade
    var data = new Date();
    var idade = data.getFullYear() - Number(document.getElementById("ano").value);
    //pegando IMC
    var altura = Number(document.getElementById("altura").value);
    var peso = Number(document.getElementById("peso").value);
    var imc = peso / (altura * altura);

    // Verificação de campos vazios
    if (altura == "" || peso == "" ) {
        window.alert("Preencha todos os campos!");
    } 
    else if (nome == "" || sobrenome == "") {
        window.alert("Preencha todos os campos!");
    } else {

        var res = document.getElementById("resul");
        res.innerHTML = `${nome} ${sobrenome} de ${idade} anos tem um IMC de <strong>${imc.toFixed(2)}</strong>`;

        // Classificação
        var cl = document.getElementById("classific");
        if (imc < 18.5) {
        cl.innerHTML = "Magreza";
        cl.style.color = "#976700";
        } 
        else if (imc >= 18.5 && imc <= 24.9) {
            cl.innerHTML = "Normal";
            cl.style.color = "#009719";
        } 
        else if (imc >= 25 && imc <= 29.9) {
            cl.innerHTML = "Sobrepeso";
            cl.style.color = "#976700";
        }
        else if (imc >= 30 && imc <= 39.9) {
            cl.innerHTML = "Obesidade";
            cl.style.color = "#d83200";
        }
        else if (imc >= 40) {
            cl.innerHTML = "Obesidade grave";
            cl.style.color = "#bd0000";
        }
    }
}

function limpar() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}