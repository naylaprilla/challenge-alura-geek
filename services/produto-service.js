//GET
const listaProdutos = () => {
fetch('http://localhost:3000/produto')
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error))
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

export const produtosServicos = {
    listaProdutos,
    criaProdutos
}
