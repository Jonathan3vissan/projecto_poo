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
        if (contenido.id) {

        }


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


    /**
     * busca le IDCliente en el archivo y siu lo encuentra devuelve true
     * @param {*} indentificadorCliente 
     * @returns si encuentra o no el IDCLinte dentro del archivo
     */
    verificarExistenciaClienteCon(indentificadorCliente) {
        let claveBuscada = indentificadorCliente.IDgenerado;
        let verificacion = false;
        fs.readFile(this.nombreArchivo, 'utf8', (error, data) => {
            if (error) {
                console.error("Error al leer el archivo:", error);
                return;
            }
            // Dividir el contenido por líneas y hacer que cada línea sea insensible a espacios y mayúsculas
            const lineas = data.split('\n').map(linea => linea.trim());
            // Verificar si la clave buscada está en las líneas (insensible a mayúsculas)
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
