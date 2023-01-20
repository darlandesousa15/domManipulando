const robotron = document.querySelector("#robotron");
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
// Este "[data-controle]" é um data-atributes que utilizei para substituir as ids em html
// evitando com que haja problemas ao substituir nomes de ids
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

alert("Escolha a cor de seu Robotron");

controle.forEach( (elemento) => {elemento.addEventListener("click", (evento) => 
    {manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatisticas(evento.target.dataset.peca)
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
function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })

}
function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
}