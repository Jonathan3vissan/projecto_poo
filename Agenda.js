const Cliente = require("./Cliente");
class Agenda {
    #agendado = []
    /**
     * @returns agendados 
     */
    getAgendados() {
        return this.#agendado
    }
    /**
     * recibe info del cliente y lo envia al array agendados 
     * @param {Cliente} cliente datos
     */
    recibeInfoDe(cliente, gestor) {
        this.#agendado.push(cliente)
        gestor.guardarCitaDe(JSON.stringify(cliente))
    }
    elmininarReservaCon(IDCLiente) {
// desarrollar 
    }


}
module.exports = Agenda;