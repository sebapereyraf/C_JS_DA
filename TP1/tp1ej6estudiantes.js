let clase = {
    estudiantes: [],
    agregarEstudiante: function (nombre, notas) {
        let nuevoEstudiante = {
            nombre: nombre,
            calificaciones: notas,
        };
        this.estudiantes.push(nuevoEstudiante);
    },
};

function calcular_promedio(calificaciones) {
    let suma_parcial = 0;
    let resultado = 0;
    if (calificaciones != undefined && calificaciones != "") {
        for (const nota of calificaciones) {
            suma_parcial += nota;
        }
        resultado = suma_parcial / calificaciones.length;
    }
    return resultado;
}


let formulario = document.getElementById("formularioEstudiante");
let agregarEstudianteBtn = document.getElementById("agregarEstudiante");
let verPromediosBtn = document.getElementById("verPromedios");
let reiniciarCargaBtn = document.getElementById("reiniciarCarga");
let resultadoPromedios = document.getElementById("resultadoPromedios");
let listaPromedios = document.getElementById("listaPromedios");

agregarEstudianteBtn.addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);

    clase.agregarEstudiante(nombre, [nota1, nota2, nota3]);

    document.getElementById("nombre").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    if (clase.estudiantes.length === 3) {
        agregarEstudianteBtn.style.display = "none";
        verPromediosBtn.style.display = "block";
        reiniciarCargaBtn.style.display = "block";
    }
});

verPromediosBtn.addEventListener("click", function () {
    resultadoPromedios.style.display = "block";
    listaPromedios.innerHTML = "";
    
    for (const estudiante of clase.estudiantes) {
        let promedio = calcular_promedio(estudiante.calificaciones);
        let listItem = document.createElement("li");
        listItem.textContent = estudiante.nombre + ": " + promedio;
        listaPromedios.appendChild(listItem);
    }

    verPromediosBtn.style.display = "none";
});

reiniciarCargaBtn.addEventListener("click", function () {
    clase.estudiantes = [];
    resultadoPromedios.style.display = "none";
    agregarEstudianteBtn.style.display = "block";
    verPromediosBtn.style.display = "none";
    reiniciarCargaBtn.style.display = "none";
    listaPromedios.innerHTML = "";
});







// Codigo de base para desarrolla desarrollar el ejercicio
/*
let clase = {
    estudiantes: [],
    agregarEstudiante: function (nombre, notas) {
        let nuevoEstudiante = {
            nombre: nombre,
            calificaciones: notas,
        };
        this.estudiantes.push(nuevoEstudiante);
    },
};

clase.agregarEstudiante("Memo Gimenez", [85, 90, 78]);
clase.agregarEstudiante("Elva Nanero", [92, 88, 75]);
clase.agregarEstudiante("Mate Cocido", [78, 95, 88]);


  function calcular_promedio(calificaciones) {
    let suma_parcial = 0;
    let resultado = 0;
    if(calificaciones != undefined && calificaciones != '') {
      for (const nota of calificaciones) {
        suma_parcial += nota;
        // suma_parcial = suma_parcial + nota;
      }
      resultado = suma_parcial / calificaciones.length;
     }
    
    return resultado;
};

console.log("Promedio de calificaciones");
for (const estudiante of clase.estudiantes) {
    let promedio = calcular_promedio(estudiante.calificaciones);
    console.log( estudiante.nombre + " : " + promedio);
}
*/