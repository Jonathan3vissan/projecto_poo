class Reserva {
    #reserva = [];
    #fecha = "";
    #hora = "";
    constructor(fecha, hora) {
        this.#fecha = fecha;
        this.#hora = hora
    }
    /**
     * @returns las reservas
     */
    getReservas() {
        return this.#reserva
    }
    /**
     * @returns la fecha  
     */
    getFecha() {
        return this.#fecha
    }
    getHora() {
        return this.#hora
    }

    /**
     * solicitado los datos para iniciar la reserva
     */
    tomarDatosParaReservaDe(usuario, agenda) {
        let datosRecibidos = "def";
        datosRecibidos = usuario.enviarDatos();
        datosRecibidos.IDreserva = this.generadorID();
        datosRecibidos.fecha = this.getFecha();
        datosRecibidos.hora = this.getHora();
        agenda.agregarAgendaCon(datosRecibidos)
    }

 

}
module.exports = Reserva
