function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[erro] verifique os dados')
    }
else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero= 'homem'
    if(idade >=0 && idade <10){
        //criança
        //img.setAttribute('scr', 'nome da fto') //inserir fto
    }    
    if (idade<18){
        //adolecente
        //img.setAttribute('scr', 'nome da fto')
    }
    if(idade <60){
        //adulto
        //img.setAttribute('scr', 'nome da fto')
    }
    else{
        //idoso
        //img.setAttribute('scr', 'nome da fto')
    }

    }
else{
    genero = 'mulher'
    if(idade >=0 && idade <10){
        //criança
        //img.setAttribute('scr', 'nome da fto')
    }    
    if (idade<18){
        //adolecente
        //img.setAttribute('scr', 'nome da fto')
    }
    if(idade <60){
        //adulto
        //img.setAttribute('scr', 'nome da fto')
    }
    else{
        //idoso
        //img.setAttribute('scr', 'nome da fto')
    }
}
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos `
    //res.appendChild(img) //colocar a imagem abaixo do texto acima
}


}