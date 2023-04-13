//GET
const listaProdutos = () => {
fetch('http://localhost:3000/produto')
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error))

    const listarUmProduto = (id) => {
        return fetch(`http://localhost:3000/produto/${id}`)
                .then((resposta) => {
                    return resposta.json
        })
    }
}

//POST
const criaProdutos = (imageUrl, section, name, price, description) => {
    fetch (`http://localhost:3000/produto`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            imageUrl,
            section,
            name,
            price,
            description
        })
    }).then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
    })
    throw new Error('Não foi possível criar o produto')
}

//Put - Patch

const alteraProduto = async (id, name, price, description) => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            price,
            description
        })
    })
    .then((resposta) => {
        return resposta.json()
    })
    .catch((error) => console.log(error))
}

//delete

const deleteProduto = async (id) => {
    return await fetch(`http://localhost:3000/produto/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": application/json,
        },
    })
}

export const produtosServicos = {
    listaProdutos,
    listarUmProduto,
    criaProdutos,
    alteraProduto,
    deleteProduto
}
