var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoIsValid = validaPeso(peso);
    var alturaIsValid = validaAltura(altura);

    if (!pesoIsValid) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!";
        pesoIsValid = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!alturaIsValid) {
        console.log("Altura inválida!");
        alturaIsValid = false;
        tdImc.textContent = "Altura inválida!";

        paciente.classList.add("paciente-invalido");
    }

    if (alturaIsValid && pesoIsValid) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 350) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura){
    if(altura >= 0 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}
