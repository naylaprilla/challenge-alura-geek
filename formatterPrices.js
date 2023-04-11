/* Serve para formatar o valor dos produtos */
export const formatPrice = (num) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(num)
}