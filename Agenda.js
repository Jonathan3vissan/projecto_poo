class Agenda {
    #reserva = [];
    #turnoCAncelados = [];
    #cantidadIdentificadores = [];

    /**
     * @returns los turno cancelados
     */
    getCancelados() {
        return this.#turnoCAncelados
    }

    /**
     * @returns muestras las reserva de turno 
     */
    getReservas() {
        return this.#reserva
    }

    /**
     * agrega a la agenda el turno con todos lso datos necesarios
     * @param {String} nombre del usuario
     * @param {String} fecha del usuario
     * @param {String} hora del usuario
     * @param {String} mail del usuario
     */
    agendarTurno(nombre, fecha, hora, mail) {
        let identificador = this.tamanioAgenda()
        const citado = {
            id: identificador,
            nombreUsuario: nombre,
            fechaReserva: fecha,
            horaReserva: hora,
            mailUsuario: mail
        }
        if (citado.fecha === "def fecha" || citado.nombre === "def nombre" || citado.hora === "def hora") {
            console.log("nose pudo realizar reserva por falta de datos ingresado verifique e intente nuevamente,gracias")
        } else {

            this.#reserva.push(citado)
        }
    }

    /**
     * genera un id para identifacr cada reserva 
     * @returns el tamanio de la agenda y asigan ese valor com id
     */
    tamanioAgenda() {
        let tamanio = 0;
        tamanio = this.#reserva.length
        return tamanio
    }

    /**
     * debe poder elimar una reserva de la agenda
     */
    eleminarTurno() {

    }
}

module.exports = Agenda;