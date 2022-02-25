var agora = new Date() //pegando o horario atual
var hora = agora.getHours()
console.log(`São exatamente ${hora}`)
if (hora<12){
    console.log("Bom dia")
}
else if(hora <18){
    console.log("Boa tarde")
}
else {
    console.log("Boa noite")
}