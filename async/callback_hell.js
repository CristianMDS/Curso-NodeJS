function asincrona (paramCallback){
    console.log("Soy una funcion asincrona");

    setTimeout(() => {
       console.log("Soy asincrono"); 
       paramCallback();
    }, 1000);
}

console.log("Inicia... ");

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

function conversacion(nombre, intentos, paramCallback){
    if(intentos > 0){
        console.log("inteto: "+intentos);
        conversacion(nombre, --intentos, paramCallback);
    }else{
        adios(nombre, paramCallback);
    }
}

hola("crishman", (nombre) => {
    let intentos = 2;
    conversacion(nombre, intentos, () => {
        console.log(" -- Se termino -- ");
    });
})

// hola("Crishman", (nombre) => {
//     asincrona(() => {
//         asincrona(() => {
//             asincrona(() => {
//                 adios(nombre, () => {
//                     console.log("-- TERMINAMOS --");
//                 });
//             })
//         });
//     });
// });