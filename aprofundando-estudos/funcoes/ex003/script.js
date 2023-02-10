const idadeDiego = 19
const idadeJuliana = 28

const idadeDirce = 56
const idadeRobert = 22

function printInit() {
    console.log('Init')
    console.log('Show.')
    return 'foi'
}

function sum(number1, number2) {
    const retorno = printInit()
    const result = number1 + number2
    console.log('Valor do retorno: ' + retorno)
    return result
}

const sumDJ = sum(idadeDiego, idadeJuliana)
console.log(`Soma das idades de Diego e Juliana: ${sumDJ}`)
const sumDR = sum(idadeDirce, idadeRobert)
console.log(`Soma das idades de Dirce e Robert: ${sumDR}`)