var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++ ) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoIsValid = true;
    var alturaIsValid = true;

    if (peso <= 0 || peso > 400) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!";
        pesoIsValid = false;

        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura > 3.00) {
        console.log("Altura inválida!");
        alturaIsValid = false;
        tdImc.textContent = "Altura inválida!";
        
        paciente.classList.add("paciente-invalido");
    }

    if (alturaIsValid && pesoIsValid) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}