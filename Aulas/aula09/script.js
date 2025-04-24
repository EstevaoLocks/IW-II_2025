function saudacao() {
    alert("Olá, bem vindo à aula");
}
function mostrarMensagem(){
    alert("JavaScript é divertido!")
}
function mudartexto(){
    document.getElementById("exercicio02b").textContent = "Texto atualizado com JavaScript";
}
function mudarcor(){
    document.getElementById("body").style = "background-color: red;";
}
function mudarcortexto(){
    document.getElementById("cortexto").style = "color: red;";
}
function printaralert(nome) {
    alert("Olá, " + nome.value);
}
function escondetexto(){
    document.getElementById("texto05").style = "display: none;";
    
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaosaudacao").addEventListener("click",saudacao);
    document.getElementById("exercicio01").addEventListener("click",mostrarMensagem);
    document.getElementById("exercicio02a").addEventListener("click",mudartexto);
    document.getElementById("exercicio03").addEventListener("click",mudarcor);
    document.getElementById("exercicio05").addEventListener("click",escondetexto);
    document.getElementById("exercicio07").addEventListener("click",mudarcortexto);
});