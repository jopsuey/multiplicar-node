
//opciones de comando en comun
const opcionesEnComun = {
    base: {
        demand: true, //deja como obligatorio 
        alias: 'b'
     }, //alias para acortar parametro
    limite: {
        alias: 'l',
        default: 10
    }  
}
//importacion paquete Yargs
const argv  = require('yargs')
    //comando y descrpcion de este
    .command('listar', 'Imprime en consola tabla de multiplicar', opcionesEnComun)
    .command('crear', 'Genera archivo de multiplcacion', opcionesEnComun)
    .help() //pemite obtener informacion parametrizada de ayuda
    .argv;


    module.exports = {
        argv
    }