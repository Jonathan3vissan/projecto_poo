class Agenda {
    #agendados = [];
    #reservasCanceladas = [];

    getAgendados() {
        return this.#agendados
    }

    /**
     * agrega la reserva a la angenda
     * @param {datos} datosRecibidos 
     */
    agregarAgendaCon(datosRecibidos) {
        this.#agendados.push(datosRecibidos)
    }
    /**
     * busca el id de la reserva ingresado en el array y si es encontrado lo elimina y guarda los datos de la reserva cancelada en otro array
     * @param {datos} datoID 
     */
    eleminarReserva(datoID) {
        let eliminarID = datoID
        for (let i = 0; i < this.#agendados.length; i++) {
            if (this.#agendados[i].IDreserva === eliminarID) {
                this.#reservasCanceladas.push(this.#agendados[i]);
                //this.#agendados[i].splice(i, 1);
                this.#agendados[i] = "x";
                console.log("Reserva eliminada exitosamente");
            } else {
                console.log("verifique el ID nuevamente, nose pudo encontrar el ID ingresado");
            }
        }
    }


}
module.exports = Agenda;