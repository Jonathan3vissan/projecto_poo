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
        let datosRecibidos = usuario.enviarDatos();
        if (!datosRecibidos) {
            console.log("datos no reicibidos");
            return
        }
        datosRecibidos.IDreserva = this.generadorID();
        datosRecibidos.fecha = this.getFecha();
        datosRecibidos.hora = this.getHora();
        agenda.agregarAgendaCon(datosRecibidos)//envia datos agenda
    }




    /**
     * regsitra la hora en que se realizo la reserva no la la hora de cita de la reserva
     * @returns la hora en que fue regsitrada la toma de la reserva 
     */
    tomarHoraDelSistema() {
        const fechaActual = new Date();
        return fechaActual
    }

}
module.exports = Reserva
