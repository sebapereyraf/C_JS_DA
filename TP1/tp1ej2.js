
let agendaContactos={
    contactos:[],
    agregarContactos: function(a, b, c){
        var contacto={
            nombre: a,
            telefono: b,
            email: c,
        };
        this.contactos.push(contacto);
    }
    
}

agendaContactos.agregarContactos("Diego", 2954789631, "diego@gmail.com");

console.log("Cantidad de contactos en la Agenda: " +agendaContactos.contactos.length);