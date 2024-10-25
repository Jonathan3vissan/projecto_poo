class Agenda {
    #agendado = []

    /**
     * @returns agendados 
     */
    getAgendados() {
        return this.#agendado
    }


    /**
     * recibe la infomacion completa del cliente y lo agrega al array agendados
     * @param {*} cliente 
     */
    recibeInfoDe(cliente) {
        this.#agendado.push(cliente)
    }

}
module.exports = Agenda;