const Usuario = require("./Usuario");
class Cliente extends Usuario {
    #IDcliente = "def IDcliente"

    /**
     * @returns el id del cliente
     */
    getIDCliente() {
        return this.#IDcliente
    }

    /**
     * @returns envia el cliente
     */
    enviarInforamcionA() {
        const NUEVO_CLIENTE = {
            NOMBRE: this.getNombre(),
            mail: this.getMail(),
            telefono: this.getTelefono(),
            IDCliente: this.getIDCliente()
        }
        return NUEVO_CLIENTE
    }

    /**
     * modifica el id, asignandole un id unico
     * @param {*} registroID 
     */
    modificarIDClienteCon(registroID) {
        this.#IDcliente = registroID
    }
}
module.exports = Cliente;