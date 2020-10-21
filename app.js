//importacion local de yargs
const argv = require('./config/yargs').argv;

//impotacion libreria color para consola
const colors = require('colors');

//importacion de archivo propio con destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


//opcion 2 de importacion
const multiplicar = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.yellow(`Archivo ${archivo.green} creado`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
//let base = 10;

//opcion 2 sin destructuracion
//multiplicar.crearArchivo('s'); 

//objeto process .argv (ubicacion node y archivo utilizando y párametros desde terminal)
// let argv = process.argv; 
// let parametroDesdeComando = argv[2].split('=')[1];

//----------------uso de Yargs.------------------
//lectura de propiedad creada mas arriba
//console.log('base', argv.base);
//console.log('limite', argv.limite);
//console.log(argv);
//node app listar --help para ver opciones creadas

// console.log(`Parametro por linea de comando con valor = ${parametroDesdeComando}`);



