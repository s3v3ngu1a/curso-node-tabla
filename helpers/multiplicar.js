const fs = require('node:fs');

require('colors');
// const crearArchivoTabla = (base=1) => {
//     console.log('==================');
//     console.log('       base:', base);
//     console.log('==================');
//     let salida = '';
//     for (let i = 1; i < 11; i++) {
//         salida += `${base} x ${i} = ${i*base}\n`;
//     }
//     console.log(salida);    
//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     console.log(`tabla-${base}.txt creada`);
    
// }

const crearArchivoAsync = async(base=1, listar=false, hasta=10) => {
    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${i*base}\n`;
        }
        if (listar) {
            console.log('=================='.yellow);
            console.log('       base:', base);
            console.log('=================='.yellow);
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivoAsync
}