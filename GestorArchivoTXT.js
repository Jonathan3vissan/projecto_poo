const fs = require('fs');
const path = require('path');

class GestorArchivoTXT {
    #direccionArchivo;
    #rutaArchivo;

    constructor() {
        this.#direccionArchivo = ".registro.txt";
        this.#rutaArchivo = path.join(__dirname, this.#direccionArchivo);
    }

    /**
     * Agrega los datos del cliente al archivo TXT existente
     * @param {*} cliente Datos del cliente a agregar
     */
    agregarDatoDe(cliente) {
        fs.appendFile(this.#rutaArchivo, cliente + '\n', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
            } else {
                console.log('Datos agregados correctamente al archivo.');
            }
        });
    }
}

module.exports = GestorArchivoTXT;
