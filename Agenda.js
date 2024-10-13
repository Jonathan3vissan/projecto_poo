class Agenda {
    #agendados = [];
    #reservasCanceladas = [];

    /**
     * agrega la reserva a la angenda
     * @param {datos} datosRecibidos 
     */
    agregarAgendaCon(datosRecibidos) {
        angendados.push()
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
                this.#agendados[i].splice(i, 1);
                console.log("Reserva eliminada exitosamente");
                this.#agendados[i] = "x";
            } else {
                console.log("verifique el ID nuevamente, nose puedo encontrar el ID ingresado");
            }
        }
    }


}
module.exports = Agenda