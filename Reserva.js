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
        datosRecibidos = usuario.enviarDatosA();
        datosRecibidos.IDreserva = this.generadorID();
        datosRecibidos.fecha = this.getFecha();
        datosRecibidos.hora = this.getHora();
        agenda.agregarAgenda(datosRecibidos)
    }

    /**
     * @returns un identificar unico para usuario
     */
    generadorID() {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const letra = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        const numero = Math.floor(Math.random() * 900) + 100;
        const clave = letra + numero;
        return clave;
    }


}
module.exports = Reserva
