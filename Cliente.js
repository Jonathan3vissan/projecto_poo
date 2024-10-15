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
        return this
    }

    /**
     * modifica el id, asignandole un id unico
     * @param {*} registro 
     */
IDmodifCleinteCom(registro){
    this.#IDcliente=registro
}
}
module.exports = Cliente;