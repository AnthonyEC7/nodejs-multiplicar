const argv = require('./config/yargs,js');
const colors = require('colors');


// importacion con destructuracion 
const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicar.js')


//utilizando expresiones regulares
// let regex = /(\d+)/g;

// let base = parametro.split('=')[1];

// console.log(module);
//let parametro = process.argv[2];
//let base = parametro.split('=')[1];

//let argv2 = process.argv;

let comando = argv._[0];
let comando1 = argv._[2];

switch (comando) {
    case 'crear':
        console.log('crear ...');
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        console.log('listar ...');
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no válido ...');

}

//console.log(argv);
//console.log(comando);
//console.log(argv2);


// crearArchivo(base).then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(e => console.log(e));


// console.log(process.argv);
//let parametro = process.argv[2];
// console.log(parametro);

// let base = 5;
// let data = '';

// for (let i = 1; i <= 10; i++) {

//     data += (`${base} * ${i} = ${base*i}\n`); //concatenar 

// }

// console.log(module); //cada codigo que genero en javascript es un modulo
// //tiene id, tiene funciones que puedes exportar para que otras funciones lo utilicen



// // append 
// // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
// //     if (err) throw err;
// //     console.log(`El archivo tabla-${base}.txt ha sido guardado`); //si todo fue correcto 
// // });

// --opcion del comando 
// cuando no mando - es una instruccion

//TRABAJO AUTONOMO     NPM COLOR

//// CLASE GIT 

// git --version 
// git config --global user.name "Anthony"
// git config user.email acardenast@est.ups.edu.ec
// cd me dirijo a la carpeta 03-bases-node 
//  git init 

// git status - permite ver estado 
//git add . agregar al stage

// git commit -m "Commit Inicial" -- confirmar o comprometer los archivos

//git remote add origin https://github.com/AnthonyEC7/nodejs-multiplicar.git
// -u me dice que va al origen  master va a la rama maestra