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
     * @param {*} cliente Datos del cliente a agregar
     */
    agregarDatoDe(cliente) {
        this.guadarDatosDe(cliente,this.#rutaArchivo,"guardado exitoso");
    }
    /**
     * agrega al txt los datos de la agenda
     * @param {string} agenda con los datos de la reserva
     */
    guardarCitaDe(agenda) {
      this.guadarDatosDe(agenda,this.#rutaArchivoAgendados,"guardado exitomsa la cita")
    }

/**
 * guarda un archivo TXT
 * @param {*} cliente info recibida
 * @param {*} ruta de guradado
 * @param {*} mensaje de guardado exitoso
 */
    guadarDatosDe(cliente, ruta, mensaje) {
        fs.appendFile(ruta, cliente + '\n', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:');
            } else {
                console.log(mensaje);
            }
        });
    }



}





module.exports = GestorArchivoTXT;
