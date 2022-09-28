function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 12 para manipular hora e testar.
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.jpg'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'images/tarde.jpg'
    } else {
        img.src = 'images/noite.jpg'
    }
}