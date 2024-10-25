const { error } = require('console');
const fs = require('fs');
const path = require('path');
class GestorArchivoTXT {
    #direccionArchivo;
    #direccionAgendados;
    #rutaArchivo;
    #rutaArchivoAgendados;
    constructor() {
        this.#direccionArchivo = "registroCliente.txt";
        this.#rutaArchivo = path.join(__dirname, this.#direccionArchivo);
        this.#direccionAgendados = "agendaCita.txt";
        this.#rutaArchivoAgendados = path.join(__dirname, this.#direccionAgendados);
    }
    /**
     * Agrega los datos del cliente al archivo TXT existente
     * @param {JSON} cliente Datos del cliente a agregar
     */
    agregarDatoDe(cliente) {
        this.#guadarDatosDe(cliente, this.#rutaArchivo, "guardado exitoso");
    }
    /**
     * agrega al txt los datos de la agenda
     * @param {JSON} infoCita con los datos de la reserva
     */
    guardarCitaDe(infoCita) {
        this.#guadarDatosDe(infoCita, this.#rutaArchivoAgendados, "guardado exitomsa la cita")
    }

    /**
     * guarda un archivo TXT
     * @param {JSON} datos  recibido
     * @param {String} ruta de guradado
     * @param {String} mensaje de guardado exitoso
     */
    #guadarDatosDe(datos, ruta, mensaje) {
        fs.appendFile(ruta, datos + '\n', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:');
            } else {
                console.log(mensaje);
            }
        });
    }



}





module.exports = GestorArchivoTXT;
