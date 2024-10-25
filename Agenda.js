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
     * @param {*} cliente datos
     */
    recibeInfoDe(cliente, gestor) {
        //let agendarCliente = this.#agendado[this.#agendado.length - 1]
        this.#agendado.push(cliente)
        gestor.guardarCitaDe(JSON.stringify(cliente))
    }


    enviarInfoA(gestor) {
    }

}
module.exports = Agenda;