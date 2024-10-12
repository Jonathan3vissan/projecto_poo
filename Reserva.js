const Agenda = require("./Agenda");

class Reserva {
    #fecha = "def fecha";
    #hora = "def hora"

    constructor(fecha, hora) {
        this.#fecha = fecha;
        this.#hora = hora
    }
    /**
     * @returns fecha de la reserva
     */
    getFecha() {
        return this.#fecha
    }
    /**
     * @returns la hora de la reserva 
     */
    getHora() {
        return this.#hora
    }

    /**
     * ingresa la reserva del usuario al sistema de agenda
     * @param {agenda} agenda 
     * @param {String} nombre 
     * @param {String} mail 
     */
    turnoEn(agenda, nombre, mail) {
        agenda.agendarTurno(nombre, mail, this.#fecha, this.#hora)

    }


}
module.exports = Reserva;