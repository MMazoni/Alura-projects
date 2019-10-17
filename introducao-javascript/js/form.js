var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    console.log(erros);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros); 
        return;
    }

    var pacienteTr = montarTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";

});

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco!")
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco!")
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco!")
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco!")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválida!")
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!")
    }

    return erros;
    
}

function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, 'info-nome');
    var pesoTd = montaTd(paciente.peso, 'info-peso');
    var alturaTd = montaTd(paciente.altura, 'info-altura');
    var gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    var imcTd = montaTd(paciente.imc, 'info-imc');

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dados, classe) {
    var td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);

    return td;
}


