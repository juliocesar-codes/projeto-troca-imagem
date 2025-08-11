'use stratic'

const botaoTrocarCidade = document.getElementById('trocar-cidade')
const botaoAuto = document.getElementById('auto')

function trocarCidade() {
    const cidade = document.getElementById('cidade').value
    document.documentElement.style.setProperty('--bg-img', `url('./img/${cidade}.jpg')`)
}

function trocarCidadeAuto() {
    const cidades = [
        'url(./img/barueri.jpg)',
        'url(./img/cotia.jpg)',
        'url(./img/itapevi.jpg)',
        'url(./img/jandira.jpg)',
        'url(./img/osasco.jpg)'
    ]

    let posicao = 0

    function slide() {
        document.documentElement.style.setProperty('--bg-img', cidades[posicao])
        posicao = (posicao + 1) % cidades.length
    }

    slide()
    setInterval(slide, 3000)

}

botaoTrocarCidade.addEventListener('click', trocarCidade)
botaoAuto.addEventListener('click', trocarCidadeAuto)