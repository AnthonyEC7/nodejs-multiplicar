let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);

//npm init crear paquete init packetjson
//package.json  --> Tiene la informacion de todo nuestro modulo 

// npm i yargs --save

//desinstalar de mi paquete (local)
//npm uninstall nodemon