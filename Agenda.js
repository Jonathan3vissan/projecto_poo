class Agenda {
    #reserva = [];

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
        const citado = {
            nombreUsuario: nombre,
            fechaReserva: fecha,
            horaReserva: hora,
            mailUsuario: mail
        }
        this.#reserva.push(citado)
    }

}

module.exports = Agenda;