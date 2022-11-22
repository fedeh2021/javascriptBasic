//Declarativas

function miFuncion() {
    return 3;
}

miFuncion();

//Expresion

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`)
}

function sumar(a,b){
    var resultado = a + b;
    return resultado
}

export function solution(valor) {
    return typeof valor //funcion que retorna el tipo de dato del valor que recibe como parametro
}