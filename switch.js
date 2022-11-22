var numero = 1;


switch (numero){
    case 1:
        console.log("Soy uno")
        break;
    case 10:
        console.log("soy un 10")
        break;
    case 100:
        console.log("si soy un cien")
        break;
    default:
        console.log("no soy nada")
}

var tijera = "tijera"
var piedra = "piedra"
var papel = "papel"

function resultado(user, cpu){
    switch(true){
        case user === cpu: 
            console.log("Empate")
            break;
        case user === piedra && cpu === tijera:
            console.log("Ganaste")
            break;
        case user === tijera && cpu === papel:
            console.log("Ganaste")
            break;
        case user === papel && cpu === piedra:
            console.log("Ganaste")
            break;
        default: 
            console.log("Perdiste")
    }
}