const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        boolean: true,
        default: false,
        describe: 'Muestra la tabla por consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde debe llegar la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        if (isNaN(argv.h)) {
            throw 'Hasta debe ser un número';
        }
        return true;
    })
    .argv;

    module.exports = argv;
    