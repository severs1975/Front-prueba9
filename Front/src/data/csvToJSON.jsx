// Importamos los módulos necesarios de Node.js y la librería 'csv-parser'
const fs = require('fs'); // Módulo del sistema de archivos para trabajar con archivos
const csv = require('csv-parser'); // Librería para parsear archivos CSV

// Definimos una función que lee y parsea un archivo CSV
function leerDisfraces(rutaArchivo) {
  // Retornamos una promesa para manejar la operación asincrónica
  return new Promise((resolve, reject) => {
    const disfraces = []; // Array donde almacenaremos los datos parseados

    // Creamos un stream de lectura para el archivo CSV
    fs.createReadStream(rutaArchivo)
      .pipe(csv()) // Pasamos los datos del stream a través del parser CSV
      .on('data', (row) => {
        // Evento 'data' se dispara por cada fila del CSV
        disfraces.push(row); // Agregamos cada fila parseada al array 'disfraces'
      })
      .on('end', () => {
        // Evento 'end' se dispara cuando se ha terminado de leer el archivo
        console.log('Archivo CSV procesado exitosamente');
        resolve(disfraces); // Resolvemos la promesa con el array 'disfraces'
      })
      .on('error', (error) => {
        // Evento 'error' se dispara en caso de un error durante la lectura del archivo
        reject(error); // Rechazamos la promesa con el error
      });
  });
}

// Exportamos la función para que pueda ser utilizada en otros módulos
module.exports = leerDisfraces;