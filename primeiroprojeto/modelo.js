function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = `manha.jpg`
        document.body.style.background = 'rgb(65 100 128)'
    } else if (hora >= 12 && hora <= 18) {
        img.src = `tarde.jpg`
        document.body.style.background = '#6d4a34'
    } else {
        img.src = `noite.jpg`
        document.body.style.background = 'black'
    }
}