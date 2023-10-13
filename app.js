async function sortear(){
 // pegar o total de resultados

const  totalResultados = Number(document.querySelector('#totalResultadosInput').value)


 // pegar o menor valor 

 const  menorValor = Number(document.querySelector('#menorValorInput').value)


 // pegar o maior valor 

 const  maiorValor = Number(document.querySelector('#maiorValorInput').value)

    for (let j = 0; j < 20; j++) {

        // limpar resultado antigo dentro do html existente
        const elementoHTMLResultValues = document.querySelector('.results-values')
        elementoHTMLResultValues.innerHTML = ''


        for (let i = 0; i < totalResultados; i++) {
            // gerar um numero aleatorio entre o menor e o maior valor

            const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor



            // gerar um elemento html

            const elementoHtmlDoResultado = document.createElement('div')
            elementoHtmlDoResultado.classList.add('result-value')
            elementoHtmlDoResultado.innerText = resultado


            // adcionar um elemento html dentro do html existente

            elementoHTMLResultValues.append(elementoHtmlDoResultado)
        }
        await wait(20)
    }

}

function wait(tempo){
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(), tempo)
    })
}