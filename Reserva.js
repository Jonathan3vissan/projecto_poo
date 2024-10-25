class Reserva {
    #hora = "def hora";
    #fecha = "def fecha";


    /**
     * completa la inforamcion ,recibida de DBCliente, con la fecha y hora para ser enviado agenda
     * @param {*} dbcliente info del cliente
     * @param {*} agenda donde se guardad la reserva
     */
    solicitarInfoA(dbcliente, agenda, gestor) {
        let cliente = "def";
        cliente = dbcliente.getClienteNuevo();
        cliente.fecha = this.#fecha
        cliente.hora = this.#hora
        agenda.recibeInfoDe(cliente, gestor)
    }



}
module.exports = Reserva;