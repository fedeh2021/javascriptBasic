var articulos = [
    {nombre: "bici", costo: 100}, 
    {nombre: "cpu", costo: 1000},
    {nombre: "tv", costo: 5000},
    {nombre: "celular", costo: 100000},
    {nombre: "libro", costo: 500},
    {nombre: "teclado", costo: 2000},
    {nombre: "auriculares", costo: 6000}
]

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 5000
})

//trae como resultado los articulos filtrados por costo menores o iguales a 5000

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

//trae en la nueva variable todos los articulos con solamente el dato del nombre

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "tv"
})

//trae en la nueva variable el articulo indicado con el ===

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

//trae los nombre de los articulos, no genera nueva variable

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})

//regresa un true o false para validar que se cumple o no la condicion que se pide, no te trae un array con articulos, solamente el true o false