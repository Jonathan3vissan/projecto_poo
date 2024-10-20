const fs = require('fs');
const path = require('path');
class GestorArchivoTexto {
    constructor(nombreArchivo = "cliente.txt") {
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
                    this.crearArchivo().then(resolve).catch(reject);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
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

    /**
     * busca le IDCliente en el archivo y si lo encuentra devuelve true
     * @param {*} indentificadorCliente 
     * @returns si encuentra  el IDCLinte dentro del archivo devuelve true
     */
    verificarExistenciaClienteCon(indentificadorCliente) {
        let claveBuscada = indentificadorCliente.IDgenerado;
        let verificacion = false;
        fs.readFile(this.nombreArchivo, 'utf8', (error, data) => {
            if (error) {
                console.error("Error al leer el archivo:", error);
                return;
            }
            const lineas = data.split('\n').map(linea => linea.trim());
            const encontrada = lineas.some(linea => linea.toLowerCase().includes(claveBuscada.toLowerCase()));
            if (encontrada) {
                console.log("¡Clave encontrada!");
                verificacion = true;
            } else {
                console.log("Clave no encontrada.");
                verificacion = false;
            }
        });
        return verificacion
    }
}
module.exports = GestorArchivoTexto
