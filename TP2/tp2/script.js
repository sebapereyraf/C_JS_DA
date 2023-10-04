$(document).ready(function() {

    //EJ1
    $(".container").children("p").first().css("color", "red");
    $(".container").children("p").last().css("color", "red");

    //EJ2
    $(".parent").find("span").css("background-color", "yellow");

    //EJ3
    $("#ej3 ul li").eq(2).text("Nuevo Elemento");

    //EJ4
    $(".box:has(ul)").addClass("has-list");
    
    //EJ5
    $(".box ul").addClass("highlight");

    //EJ6
    $(".botones button").click(function(){
        let = regex = /(\d+)/g;  // expresion regular donde \d+ toma todos los numeros y /g busca esto en todo el string
        let idNumero = this.id.match(regex)

        let idNumero2 = this.id.replace(/[^0-9]+/g, ""); // forma alternativa. Se reemplaza todo lo que NO (^) sea numero por vacio

        alert("¡Hicistes clic en el Botón " + idNumero2 + "!")
    })

    //EJ7

    $("#formulario").submit(function(event) {
        event.preventDefault(); // Evitar envío del formulario
        
        let formularioValido = true;
        
       let msjError="Es necesario completar este dato"

        if ($("#nombre").val()==="") {
            $("#nombreError").text(msjError)            //("Es necesario completar este dato");
            $("#nombreError").show  //.addClass("visible");
            $("#nombre").addClass("input-vacio");
            formularioValido = false;
        } else {
            $("#nombreError").text("");
            $("#nombreError").hide  //removeClass("visible");
            $("#nombre").removeClass("input-vacio");
        }

        if ($("#apellido").val()==="") {
            $("#apellidoError").text(msjError)            //("Es necesario completar este dato");
            $("#apellidoError").hide  //.addClass("visible");
            $("#apellido").addClass("input-vacio");
            formularioValido = false;

        } else {
            $("#apellidoError").text("");
            $("#apellidoError").show  //removeClass("visible");
            $("#apellido").removeClass("input-vacio");
        }

        if ($("#email").val()==="") {
            $("#emailError").text(msjError)            //("Es necesario completar este dato");
            $("#emailError").hide  //.addClass("visible");
            $("#email").addClass("input-vacio");
            formularioValido = false;

        } else {
            $("#emailError").text("");
            $("#emailError").show  //removeClass("visible");
            $("#email").removeClass("input-vacio");
        }

        if ($("#password").val()==="") {
            $("#passwordError").text(msjError)            //("Es necesario completar este dato");
            $("#passwordError").hide  //.addClass("visible");
            $("#password").addClass("input-vacio");
            formularioValido = false;

        } else {
            $("#passwordError").text("");
            $("#passwordError").show  //removeClass("visible");
            $("#password").removeClass("input-vacio");
        }

        if ($("#password2").val()==="") {
            $("#password2Error").text(msjError)            //("Es necesario completar este dato");
            $("#password2Error").hide  //.addClass("visible");
            $("#password2").addClass("input-vacio");
            formularioValido = false;

        } else {
            $("#password2Error").text("");
            $("#password2Error").show  //removeClass("visible");
            $("#password2").removeClass("input-vacio");
        }
     
        let expresionEmail = /^\S+@\S+\.\S+$/;
        if (!expresionEmail.test($("#email").val())) {
            $("#emailError2").text("Se requiere un email válido");
            $("#emailError2").show();
            $("#email").addClass("input-vacio");
            formularioValido = false;
        } else {
            $("#emailError2").text("");
            $("#emailError2").hide();
            $("#email").removeClass("input-vacio");
        }

        if ($("#password").val() !== $("#password2").val()) {
            $("#password2Error2").text("Las contraseñas no coinciden");
            $("#password2Error2").show();
            $("#password2").addClass("input-vacio");
            formularioValido = false;
        } else {
            $("#password2Error2").text("");
            $("#password2Error2").hide();
            $("#password2").removeClass("input-vacio");
        }
    })


    //EJ8
    

    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        method: 'GET',
        success: function (data) {
        var paisesSelect = $('#pais');
        //var infopaises = $('#infoPais')
        console.log(data)
        
        data.forEach(function (pais) {
                paisesSelect.append('<option value="' + pais.name.common + '">' + pais.name.common + '</option>');
                
                });
        $("#pais").change(function(){
                    let paisSeleccionado = $(this).val();
                    var infoPais = $('#infoPais');
                    infoPais.show();
                    
                    var datosPais = data.find(function(pais) {
                        return pais.name.common === paisSeleccionado;
                    });


                    //console.log(paisSeleccionado)
                    if (datosPais) {
                        // Agregar la informacion adicional del pais elegido
                        $('#capital').text('Capital: ' + datosPais.capital);
                        infoPais.append('<p>'+ 'Area:' + datosPais.area + '</p>' )
                        infoPais.append('<p>'+ 'Paises Vecinos: ' + datosPais.borders + '</p>' )
                        infoPais.append('<p>'+ 'Continente: ' + datosPais.continents + '</p>' )  
                        infoPais.append('<img src=' + datosPais.flags.png + '/>' ) // no funciona???
                        //$('#region').text('Región: ' + paisSeleccionado.region);
                    } else {
                        // Borrar la informacion si no la encuentra
                        $('#capital').text('');
                        $('#region').text('');
                    }
                });

        },
         error: function (error) {
            console.error('Error al obtener países', error);
        }
         
    });

    //EJ 9

    var estados = [
        {
          pais: "Estados Unidos",
          ciudades: ["Miami", "Atlanta", "San Francisco"]
        },
        {
          pais: "Canadá",
          ciudades: ["Ottawa", "Montreal", "Quebec"]
        },
        {
          pais: "México",
          ciudades: ["Oaxaca", "DF", "Guadalajara"]
        }
      ];

    estados.forEach(estado => {
        $("#estados").append('<option value="' + estado.pais + '">' + estado.pais + '</option>')
    });

    $("#estados").change(function () {
        var estadoSeleccionado = $(this).val();
        var ciudadesSelect = $("#localidades");
        
        // Limpio el segundo select para asegurarme que empiece vacio
        ciudadesSelect.empty();
    
        // Busco el objeto de estado correspondiente en el arreglo de objetos "estados"
        var objetoEstado = estados.find(function (element) {
            return element.pais === estadoSeleccionado;
        });
    
        // completo el segundo select con las ciudades del estado seleccionado
        if (objetoEstado) {
            objetoEstado.ciudades.forEach(function (ciudad) {
                ciudadesSelect.append('<option value="' + ciudad + '">' + ciudad + '</option>');
            });
        }
    
        // Muestro el segundo select una vez que se hayan cargado las ciudades
        ciudadesSelect.show();
    });
    

        

});





class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }   

    getInformacionProducto () {
        return "Nombre: "+ this.nombre + " | Precio: " + this.precio + " | Stock " + this.stock + " ";
    }
}


class ProductoElectronico extends Producto {
    constructor(nombre, precio, stock, potencia) {
      super(nombre, precio, stock);
      this.potencia = potencia;
    }

    getPotencia() {
        return this.potencia;
      }
}

class ProductoAlimenticio extends Producto {
    fechaVencimiento;
    alimentoPerecedero;
    constructor(nombre, precio, stock,fechaVencimiento,alimentoPerecedero) {
      super(nombre, precio,stock)
      this.fechaVencimiento = this.fechaVencimiento;
      this.alimentoPerecedero = this.alimentoPerecedero;      
    }
    tipoAlimento() {
        let respuesta = "";
        
        if (this.alimentoPerecedero) {
          respuesta  =  this.nombre + ' es un alimento perecedero.';
        } else {
            respuesta = this.nombre + ' no es un alimento perecedero.';
        }
        
        return respuesta; 
    }
  }

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(index) {
        this.productos.splice(index, 1);
    }
    calcular_total(){
        return this.productos.reduce((suma, curr) => suma +  parseInt(curr.precio), 0);
    }

}

//inicio de variables
const carrito = new Carrito();

function agregarAlCarrito(elemento) {
    let index = $(elemento).attr("data-id");
  //  console.log($(elemento).attr("data-nombre"));
    let nombreProducto = $("#producto_"+ index +" .nombre").text(); 
    let precio = $("#producto_"+ index +" .precio").text(); 

    if($(elemento).attr("data-tipo")==="electronico") {
        let potencia = $("#producto_"+ index +" .potencia").text(); 
        let p1 = new ProductoElectronico(nombreProducto, precio, 1, potencia);
        carrito.agregarProducto(p1);
    } else {
        let fechaVencimiento = $("#producto_"+ index +" .caducidad").text(); 
        let alimentoPerecedero = true; 
        let p2 = new ProductoAlimenticio(nombreProducto, precio, 1, fechaVencimiento, alimentoPerecedero);
        carrito.agregarProducto(p2);
    }
    mostrarCarrito();
}


function mostrarCarrito() {
    const listaCarrito = $("#lista-carrito");
    const totalSpan = $("#total");

    listaCarrito.empty();

    carrito.productos.forEach((producto, index) => {
        const li = $("<li>").text(producto.getInformacionProducto()); // Use the getInformacionProducto method
        const eliminarBtn = $("<button>").text("Eliminar");

        eliminarBtn.click(() => eliminarDelCarrito(index));

        li.append(eliminarBtn);
        listaCarrito.append(li);
    });

    $("#cantidad").html("Cantidad de productos: " +  carrito.productos.length + " . Total: " + carrito.calcular_total());
}

function eliminarDelCarrito(index) {
    carrito.eliminarProducto(index);
    mostrarCarrito();
}

function vaciarCarrito(){
    carrito.productos = [];
    mostrarCarrito();
}

mostrarCarrito();
