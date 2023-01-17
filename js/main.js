const robotron = document.querySelector("#robotron");
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const controle = document.querySelectorAll("[data-controle]");
// Este "[data-controle]" é um data-atributes que utilizei para substituir as ids em html
// evitando com que haja problemas ao substituir nomes de ids

controle.forEach( (elemento) => {elemento.addEventListener("click", (evento) => 
    {manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
})
})

robotron.addEventListener("click", (evento) => {console.log(evento)})

function dizOi(nome) {
    console.log('Oi ' + nome)
    console.log('Bem-vindo ao Robotron 2000')
}

dizOi("Darlan") 


function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-"){
    peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }

}