
let clase={
    estudiante:[
        {
        nombre: "Pedro",
        calificaciones: [7, 5, 4, 8, 9],
        promedio: function(){
            if (this.calificaciones.length === 0) {
                return 0; 
            }
            
            let suma= this.calificaciones.reduce((acumulador, calificacion)=>acumulador+calificacion,0);
            let prom= suma/this.calificaciones.length;
            return prom;
        }
        },
        {
            nombre: "Pablo",
            calificaciones: [8, 3, 7, 7, 9],
            promedio: function(){
                if (this.calificaciones.length === 0) {
                    return 0; 
                }
                
                let suma= this.calificaciones.reduce((acumulador, calificacion)=>acumulador+calificacion,0);
                let prom= suma/this.calificaciones.length;
                return prom;
            }
            },
            {
                nombre: "Juana",
                calificaciones: [7, 10, 7, 8, 9],
                promedio: function(){
                    if (this.calificaciones.length === 0) {
                        return 0; 
                    }
                    
                    let suma= this.calificaciones.reduce((acumulador, calificacion)=>acumulador+calificacion,0);
                    let prom= suma/this.calificaciones.length;
                    return prom;
                }
                }
    ]
}

let mostrarPromedios=function(clase) {
    for (let estudiante of clase.estudiante) {
        console.log("Promedio de calificaciones de "+ estudiante.nombre + "es de: " + estudiante.promedio);
    }
};

mostrarPromedios(clase);

