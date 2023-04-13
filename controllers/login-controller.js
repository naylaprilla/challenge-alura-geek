const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const email = document.querySelector('[data-email]').value
    const password = document.querySelector('[data-password]').value

    if (email.length > 5 && password.length > 5) {
        window.location.href = '../assets/views/produto.html'
    } else {
        alert('A senha precisa conter mais de 5 caracteres')
    }
})