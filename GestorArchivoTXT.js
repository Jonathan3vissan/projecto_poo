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
        fs.appendFile(this.#rutaArchivo, cliente + '\n', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:');
            } else {
                console.log('Datos agregados correctamente al archivo.');
            }
        });
    }
    /**
     * agrega al txt los datos de la agenda
     * @param {string} agenda con los datos de la reserva
     */
    guardarCitaDe(agenda) {
        fs.appendFile(this.#rutaArchivoAgendados, agenda +'\n', (err) => {
            if (err) {
                console.error("error no se puedo escribir en el archivo", err);
            }
            else {
                console.log("Informacion agregada exitosamente ");
            }
        });
    }




}





module.exports = GestorArchivoTXT;
