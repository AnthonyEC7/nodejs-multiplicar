let opt = {
    base: {
        demand: true,
        alias: 'b',
        description: 'La base de la tabla de multiplicar' //Es obligatorio 
    },
    limite: {

        alias: 'l',
        default: 10,
        description: 'El limite de la tabla de multiplicar'

    }
}
const argv = require('yargs')
    .command('listar', 'Lista un archivo con la tabla de multiplicar', opt)
    .command('listar', opt).help().argv;

module.exports = {

    argv
}