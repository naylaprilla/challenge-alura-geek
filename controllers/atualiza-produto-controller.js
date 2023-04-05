import {produtoService} from '..services/produtoService.js'

const  pegaUrl = new URL(window.location)

const id = pegaUrl.searchParams.get('id')

const inputImageUrl = document.querySelector('[data-url]')
const inputNome = document.querySelector('[data-nome]')
const inputCategoria = document.querySelector('[data-categoria]')
const inputPreco = document.querySelector('[data-preco]')
const inputDescricao = document.querySelector('[data-descricao]')

produtoService.listarProduto(id).then((dados) => {
    inputImageUrl.setAttribute('src', dados.imageUrl)
    input.value = dados.name
    input.value = dados.price
})