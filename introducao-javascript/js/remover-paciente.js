var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(evento){
    evento.target.parentNode.classList.add("fade-out");

    setTimeout(function() {
        evento.target.parentNode.remove();    
    }, 500);
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//     this.remove();
//     });
// });