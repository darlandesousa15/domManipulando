const robotron = document.querySelector("#robotron");
const braco = document.querySelector("#braco");
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");

robotron.addEventListener("click", (evento) => {console.log(evento)})

function dizOi(nome) {
    console.log('Oi ' + nome)
    console.log('Bem-vindo ao Robotron 2000')
}

dizOi("Darlan") 

somar.addEventListener("click", () => {manipulaDados(somar)})

subtrair.addEventListener("click", () => {manipulaDados(subtrair)})

function manipulaDados (operacao) {
    if (operacao === subtrair){
    braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }

}