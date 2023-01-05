function contar() {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let cont = document.getElementById('contagem')
    if (Number(inicio.value.length) == 0 || Number(fim.value.length) == 0 || Number(passo.value.length) == 0) {
        cont.innerHTML = 'Preencha todos os dados.'   
    } else {
        cont.innerHTML = 'Contagem: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    if (p <= 0 ) {
        window.alert('Passo inválido. Considerando PASSO 1.')
        p = 1
    }
    if (i < f) {
        //contagem crescente
        for(let c = i; c <= f; c += p) { 
            cont.innerHTML += ` ${c} \uD83D\uDC49`    
        }    
    } else if (i > f) {
        //contagem regressiva
        for(let c = i; c >= f; c -= p) {
            cont.innerHTML +=  ` ${c} \uD83D\uDC49 `     
        }
       
    }
    cont.innerHTML += ` \uD83C\uDFC1`
    }
}
