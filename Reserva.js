const Agenda = require("./Agenda");
const DBCliente = require("./DBCliente");
class Reserva {
    #hora = "def hora";
    #fecha = "def fecha";
    #clienteDeDB = "def cliente";
    constructor(fecha, hora, cliente) {
        this.#hora = hora;
        this.#fecha, fecha
        this.#clienteDeDB = cliente
    }
    /**
     * @returns cliente
     */
    getClienteReserva() {
        return this;
    }
    /**
     * completa la inforamcion ,recibida de DBCliente, con la fecha y hora para ser enviado agenda
     * @param {Agenda} agenda donde se guarda la reserva
     */
    solicitarInfoA( agenda, gestor) {
        agenda.recibeInfoDe(this, gestor)
    }


    elimnarCitaDe(agenda) {
        agenda.elmininarReservaCon(this)
    }


}
module.exports = Reserva;