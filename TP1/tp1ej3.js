
let producto={
    nombre: "taza",
    precio: 1400,
    disponible: true,
}

let mostrarProducto=function(a){
    console.log(Object.values(a))
}

mostrarProducto(producto);