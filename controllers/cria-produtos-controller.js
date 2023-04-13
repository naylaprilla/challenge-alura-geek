import { produtoServices } from "../services/produto-servicos"

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const categoria = document.querySelector('[data-categoria]').value
    const nome = document.querySelector('[data-nome]').value
    const preco = document.querySelector('[data-preco]').value
    const descricao = document.querySelector('[data-descricao]').value

    produtoServices
        .criaProdutos(url, categoria, nome, preco, descricao)
        .then((resposta) => {
            window.location.href = '../views/index.html'
            console.log(resposta)
        }).catch((error) => {
            console.log(error)
        })
})