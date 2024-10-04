const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInfomacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const_pessoasConectadas = (dados.total_pessoas_conectadas) / le9 
    const_pessoasConectadas = (dados.total_pessoas_conectadas) / le9 
    const horas = parseInt(dados.tempo_medio)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNomundo}</span> de pessoas e que aproximadamente <span>${pessoasConectadas,
    const container = document.getElementById('graficos-container'
    container.appendChild(paragrafo)
    console.log(paragrafo);    
}
visualizarInfomacoesGlobais()