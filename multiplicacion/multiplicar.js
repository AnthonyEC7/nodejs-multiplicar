const fs = require('fs');

let data = '';
let crearArchivo = (base, limite) => {

    //utilizar una promesa 
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject("La base no es un numero");
            return;
        } else {
            for (let i = 1; i <= limite; i++) {

                data += (`${base} * ${i} = ${base*i}\n`); //concatenar 

            }
            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${base}.txt`); //si todo fue correcto 
                }
            });
        }

    })



}

let listarTabla = (base, limite) => {


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }


};


module.exports = {
    crearArchivo,
    listarTabla
};

// let data = '';

// // for (let i = 1; i <= 10; i++) {

// //     data += (`${base} * ${i} = ${base*i}\n`); //concatenar 

// // }

// console.log(module); //cada codigo que genero en javascript es un modulo
// //tiene id, tiene funciones que puedes exportar para que otras funciones lo utilicen



// append 
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido guardado`); //si todo fue correcto 
// })