const fs = require('fs');
const path = require('path');
class GestorArchivoTexto {
    constructor(nombreArchivo="cliente.txt") {
        this.nombreArchivo = nombreArchivo;
        this.rutaArchivo = path.join(__dirname, this.nombreArchivo);
    }

    /**
     * Método para crear el archivo y agregar contenido
     * @param {*} contenido 
     */
    async agregarContenido(contenido) {
        try {
            await this.verificarArchivo();
            fs.appendFileSync(this.rutaArchivo, contenido + '\n');
            console.log('Contenido agregado exitosamente a:', this.nombreArchivo);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    /**
     * @returns verificacion si el archivo existe
     */
    verificarArchivo() {
        return new Promise((resolve, reject) => {
            fs.access(this.rutaArchivo, fs.constants.F_OK, (err) => {
                if (err) {
                    // El archivo no existe, crearlo
                    this.crearArchivo().then(resolve).catch(reject);
                } else {
                    // El archivo existe
                    resolve();
                }
            });
        });
    }


    /**
     * 
     * @returns  crear el archivo
    */
    crearArchivo() {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.rutaArchivo, '', (err) => {
                if (err) {
                    reject('Error al crear el archivo: ' + err);
                } else {
                    console.log('Archivo creado exitosamente:', this.nombreArchivo);
                    resolve();
                }
            });
        });
    }
}

module.exports = GestorArchivoTexto
