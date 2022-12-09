// el archivo que lanza debe ser app o index
// debe ser lo mas limpio este archivo

const {crearArchivoAsync} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

// const argv = require('yargs')
//                 .options({
//                     'b' : {
//                         alias: 'base',
//                         type: 'number',
//                         demandOption: true
//                     },
//                     'l' : {
//                         alias: 'listar',
//                         boolean: true,
//                         default: false
//                     }
//                 })
//                 .check((argv, options) => {
//                     if (isNaN(argv.b)) {
//                         throw 'La base debe ser un número';
//                     }
//                     if (argv._.indexOf('-l') > -1) {
//                         argv.l = true;
//                     }
//                     return true;
//                 })
//                 .argv;

console.clear();
//const base = 3;


// const [, , arg3='base=1'] = process.argv;
// const [, base=1] = arg3.split('=')


//funcione como una promesa
crearArchivoAsync(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.bold.green))
    .catch(err => console.log(err));

// nueva opcion 'l' listar tipo boolean opcional en default false
// la opcion l va a crear archivo 
// si listar esta en true muestra la lista, sino no la muestra
