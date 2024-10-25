class Cliente {
    #nombre = "def nombre";
    #mail = "def mail";
    #telefono = "def telefono";
    constructor(nombre, mail, telefono) {
        this.#nombre = nombre;
        this.#mail = mail;
        this.#telefono = telefono
    }
    /**
     * @returns nombre cliente
     */
    getNombre() {
        return this.#nombre
    }
    /**
     * @returns mail del cliente
     */
    getMail() {
        return this.#mail
    }
    /**
     * @returns telefono del cliente
     */
    getTelefono() {
        return this.#telefono
    }
    /**
     * @returns datos del cliente
     */
    enviarInfoCliente() {
        return this
    }
}
module.exports = Cliente; 