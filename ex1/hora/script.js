function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'fotoManha.jpg'
        document.body.style.background = '#F0E68C'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'fotoTarde.jpg'
        document.body.style.background = 'blueviolet'
    } else {
        img.src = 'fotoNoite.jpg'
        document.body.style.background = '#1c1c1c'
    }
    
}
