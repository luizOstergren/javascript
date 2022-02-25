var agora = new Date() //como ele vai contar os dias da semana de 0 a 6, tem que colocar o 
var diaSem = agora.getDay() // switch para escrever em qual dia estamos, fica muito melhor que 
console.log(diaSem) // se usarmos o if, o codigo ficaria  maior
switch(diaSem){
case 0:
    console.log("domingo") //atentar para colocar o break no final de cada case
    break // caso nao coloque, executa ate o encontrar um break ou acabar o switch
case 1:
    console.log("segunda")
     break
case 2:
    console.log("terça")
    break
case 3:
    console.log("quarta")
    break
case 4:
    console.log("quinta")
    break
case 5:
    console.log("sexta")
    break
case 6:
    console.log("sábado")
    break
default:
    console.log("erro")
    break
}