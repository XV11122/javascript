function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 4 && hora < 12) {
        cump.innerHTML = 'Bom dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#AE9A13'
    } else if (hora >= 12 && hora < 18) {
        cump.innerHTML = 'Boa tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#65A6BF'
    } else {
        cump.innerHTML = 'Boa noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#033859'
    }

}
