document.querySelector('.botao').addEventListener('click', () => {
    conselhoAleatorio()
})

async function conselhoAleatorio() {
    const resposta = await fetch('https://api.adviceslip.com/advice')
    const json = await resposta.json()
    document.getElementById('slip-id').innerHTML = `Advice #${json.slip.id}`
    document.getElementById('slip-advice').innerHTML = `"${json.slip.advice}"`
}

conselhoAleatorio()