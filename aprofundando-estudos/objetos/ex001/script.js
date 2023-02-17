let pessoa = {
    nome: "Diego",
    idade: 19,
    feliz: false,
    pets: ["gato"],
    carros: {
        corsa: {
            placa: "18182222",
            cor: "branco"
        },
        uno: {
            placa: "22228181",
            cor: "prata"
        }

    },
    andar: function(km) {
        console.log(`${pessoa.nome} andou ${km}km.`)
    }
}
pessoa.andar(12)
console.log(pessoa.carros.uno.cor)
