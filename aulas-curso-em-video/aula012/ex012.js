var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Voce não vota.')
} else if (idade < 18 || idade > 65){   
    console.log('O voto opcional.')
} else {
    console.log('O voto obrigatório.')
}