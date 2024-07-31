function asincrona (paramCallback){
    console.log("Soy una funcion asincrona");

    setTimeout(() => {
       console.log("Soy asincrono"); 
       paramCallback();
    }, 1000);
}

console.log("Inicia... ");
asincrona(() => {
    console.log('--------------------');
});

function hola(nombre, paramCallback){
    console.log('Hola, ¿Cómo estas? '+ nombre);
    setTimeout(() => {
        paramCallback(nombre);
    }, 1000);
}

function adios(nombre, paramCallback) {
    console.log('Gracias por visitarnos ' + nombre);
    setTimeout(() => {
        paramCallback();
    }, 1000);
}

// El parametro nombre dentro del callback que ejecuta a la funcion adios llega 
    // a través de la ejecucion de la funcion hola
hola("Crishman", (nombre) => {
    adios(nombre, () => {
        console.log("-- TERMINAMOS --");
    });
});


