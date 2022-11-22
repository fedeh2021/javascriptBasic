var estudiantes = ["federico", "jose", "clara", "clarisa"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
};
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
};


for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
};

while(estudiantes.length){
    var estudiante = estudiantes.shift(); //va eliminado elementos del array hasta llegar a 0. problema, elimina cosas
    saludarEstudiantes(estudiante)
};