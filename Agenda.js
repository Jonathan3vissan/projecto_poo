class Agenda {
    #agendado = []


    recibeInfoDe(cliente) {
        this.#agendado.push(cliente)
    }

}
module.exports = Agenda;