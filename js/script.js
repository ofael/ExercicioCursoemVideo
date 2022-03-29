function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 1;
    msg.innerHTML = `Agora são ${hora} hora.`

    if(hora >= 0 && hora < 12){
        imagem.src = "img/manha.jpg"
        document.body.style.background = "#FFEC5C"
        console.log("manha")
    } else if(hora >= 12 && hora < 18){
        imagem.src = "img/tarde.jpg"
        document.body.style.background = "#F27405"
        console.log("tarde")
    }else{
        imagem.src = "img/noite.jpg"
        document.body.style.background = "#000B0D"
        console.log("noite")
    }
}