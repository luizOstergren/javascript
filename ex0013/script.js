function contar(){
var inicio = document.getElementById("txtinicio")
var fim = document.getElementById("txtfim")
var passo = document.getElementById("txtpasso")
var res = document.getElementById("res")

if(Number(inicio.value) > Number(fim.value) || Number(passo.value) > Number(fim.value)){
    window.alert("erro, verificar valores!")
}

else {
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    var c = i
    res.innerHTML = `contando: ${i}`
    if(p<=0){
        window.alert("passo maior que zero, pressuma que seja 1")    
        p = 1
    }
while(c < f){
//p = i + p    
c = p + c
res.style.textAlign = 'center'
res.innerHTML += ` ${c} `
// colocar aqui as imagens
}
}
}