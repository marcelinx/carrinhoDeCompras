const moment = require('moment')
const data = moment().format('DD/MM/YYYY hh:mm')
const { exibeTela, calculaValor } = require('./lib/funcoesComuns')
const { produtos, clientes } = require('./model/dados')

exibeTela('---------- MERCADO JL -----------')

exibeTela('------ Lista Produtos -' + data + '--------')

let valorTotal = 0;
for (let i=0; i < produtos.length; i++) {

    valorTotal += calculaValor(produtos[i].qtd, produtos[i].valor)
    
    exibeTela(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].qtd}`)
}
exibeTela('---> Total R$: ' + valorTotal)

clientes.forEach(clientes =>{
    console.log('clientes: ', clientes.nome)
})