
let perfil={
    nombre: "Pepe",
    edad: 32,
    amigos:[
        {
        nombre: "Cecilia",
        edad: 37,
        },
        {
            nombre: "Fabricio",
            edad: 35,
        },
        {
            nombre: "Martin",
            edad: 28,
        }
    ]
}

let menorEdad=function(perfil) {
    let masJoven = perfil.amigos[0]; 

    for (let i of perfil.amigos) {
        if (i.edad < masJoven.edad) {
            masJoven = i; 
        }
    }

    return masJoven.nombre;
}

let amigoMasJoven= menorEdad(perfil)
console.log("El amigo mas joven es: " + amigoMasJoven);