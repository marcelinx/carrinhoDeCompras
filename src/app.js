const moment = require('moment')
const { exibeTela, calculaValor } = require('../lib/funcoesComuns')
const { produtos, clientes } = require('../model/dados')

function listaProdutos() {
    let valorTotal = 0;
    for (let i=0; i < produtos.length; i++) {
    
        valorTotal += calculaValor(produtos[i].qtd, produtos[i].valor)
        
        exibeTela(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].qtd}`)
    }
    exibeTela('---> Total R$: ' + valorTotal) 
}


exports.principal = () => {

const data = moment().format('DD/MM/YYYY hh:mm')
exibeTela('---------- MERCADO JL -----------')
exibeTela('------ Lista Produtos -' + data + '--------')

listaProdutos()

}