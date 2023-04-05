const novoProduto = (name, id, imageUrl, price) => {
    const card = document.createElement('div')
    const conteudo = `   
    <div class="produto">
        <img src="${imageUrl}" alt="img">
        <h1 class="produto__nome">${name}</h1>  
        <p class="produto__preco">${price}</p>
        <a class="ver__produto"href="/views/produto.html?id=${id}">Ver produtos</a> 
   </div>
   `
   card.innerHTML = conteudo

   return card
}

const produtos = document.querySelector('[data-product]')

// renderizar na tela usando async/await