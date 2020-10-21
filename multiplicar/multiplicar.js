
//packete de file system
const fs = require('fs');

//impotacion libreria color para consola
const colors = require('colors');

let  data = '';

const listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if(!Number(base))        
            return reject(`${base} No es un numero`);
        if(!Number(limite))        
            return reject(`${limite} No es un numero`);

        for(let i = 0; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}` + '\n';
        }

        resolve(data);
    });
};

const crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        
        if(!Number(base))        
            return reject(`${base} No es un numero`);
        if(!Number(limite))        
            return reject(`${limite} No es un numero`);

        for(let i = 0; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}` + '\n';               
        }
    
        //resolve y reject
        fs.writeFile(`tablas/tabla del ${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla del ${ base }.txt`);
        });

    });
};

module.exports = {
    crearArchivo: crearArchivo, //o con ES6 sólo crearArchivo,
    listarTabla: listarTabla
}