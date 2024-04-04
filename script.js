var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(event) {
    alert("Você clicou no botão!!!" + nome.value);

    const url = `https://viacep.com.br/ws/${CEP.value}/json`;

    fetch(url).then(function(resposta){
        return resposta.json()
    }) 
    .then(function(dados){
        logradouro.value = dados.logradouro;
        bairro.value = dados.bairro;
        cidade.value = dados.cidade;
        estado.value = dados.uf;


        saídaDeDados();
    } )
    .catch(function(error){
        alert(error.message);
    })
    
}

function saidaDeDados(){

    saida.innerText = "Nome:" + nome.value +
    "\n Email:" + email.value + 
    "\n Telefone:" + telefone.value +
     "\n CEP:"+ CEP.value + 
     "\n Logradouro:" + logradouro.value+ 
     "\n Número:"+ número.value + 
     "\n Complemento:"+ complemento.value+ 
     "\n Cidade:"+ cidade.value + 
     "\n Estado:"+ estado.value;

}