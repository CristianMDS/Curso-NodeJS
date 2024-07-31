function hablar (nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("la la le li...");
            resolve(nombre);
        }, 1000);
    });
}


function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola, ¿Cómo estas? '+ nombre);
            resolve();
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        console.log('Gracias por visitarnos ' + nombre);
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

console.log("Inicia... ");

hola("carlangas")
    .then((nombre) => {
        return adios(nombre);
    })
    .then((nombre) => {
        console.log("-- Terminamos --");
    })
