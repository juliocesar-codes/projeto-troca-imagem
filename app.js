'use stratic'

const botaoTrocarCidade = document.getElementById('trocar-cidade')

function trocarCidade() {
    const cidade = document.getElementById('cidade').value
    document.documentElement.style.setProperty('--bg-img', `url('./img/${cidade}.webp')`)
}

botaoTrocarCidade.addEventListener('click', trocarCidade)