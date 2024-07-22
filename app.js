function sortear (){
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let limiteInferior = parseInt(document.getElementById("de").value);
    let limiteSuperior = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    if (limiteInferior > limiteSuperior){ //valida se o limite inferior é maior do que o Superior
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!'); // se positivo, gera alerta de erro
        return; // para a execução do código
    }

    if (quantidadeDeNumeros >( limiteSuperior- limiteInferior +1)){ //valida se o limite inferior é maior do que o Superior
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!'); // se positivo, gera alerta de erro
        return; // para a execução do código
    }

    for (let i = 0; i < quantidadeDeNumeros; i++){ // loop limitado a quantidade de numeros solicitados
        numero = gerarNumeroAleatorio(limiteInferior, limiteSuperior); // chama a função gerarNumeroAleatorio levanto em conta os limites como parametros
        while(sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(limiteInferior, limiteSuperior); //segue sorteando enquanto o numero existir
        }
        sorteados.push(numero); // insere no array da variável Sorteados
    }

    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>` // setar a informação da página com variável gerada.
    alterarStatusBotao();
}

function gerarNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")){ // verifica se o elemetno btn-reiniciar possui a classe container_botao-desabilitado
        botao.classList.remove("container__botao-desabilitado"); // remove a classe declarada
        botao.classList.add("container__botao"); // adiciona a classe declarada
    }else {botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }

}

function reiniciar(){
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value ='';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}