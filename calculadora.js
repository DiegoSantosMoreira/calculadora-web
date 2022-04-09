function inserir (num){
    var inserirNumero = document.getElementById("telaCalculadora").innerHTML;
    document.getElementById("telaCalculadora").innerHTML = inserirNumero + num;
}

function remover (){
    var removerNumero = document.getElementById("telaCalculadora").innerHTML;
    document.getElementById("telaCalculadora").innerHTML = removerNumero.substring(0,removerNumero.length - 1);
}

function limparTudo(){
    document.getElementById("telaCalculadora").innerHTML = "";
}
function calcular(){
    var resultado = document.getElementById("telaCalculadora").innerHTML;
    if(resultado)
    {
        document.getElementById("telaCalculadora").innerHTML = eval(resultado);
    }
    else
    {
        alert("Nada para calcular!");
    }
}