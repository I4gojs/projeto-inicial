var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

function alertar(event) {
    alert("Você clicou no botão!!!" + nome.value);

    const url = `https://viacep.com.br/ws/${CEP.value}/json`;

    fetch(url)
    .then(resposta=>resposta.json())
     .then(dados=>{
       logradouro.value = dados.logradouro;
       bairro.value = dados.bairro;
       cidade.value = dados.localidade;
       estado.value = dados.uf;
     
       saida.innerText = "Nome:" + nome.value +
       "\n Email:" + email.value + 
       "\n Telefone:" + telefone.value +
        "\n CEP:"+ CEP.value + 
        "\n Logradouro:" + logradouro.value+ 
        "\n Número:"+ número.value + 
        "\n Complemento:"+ complemento.value+ 
        "\n Cidade:"+ cidade.value + 
        "\n Estado:"+ estado.value;
    
    })

    
}