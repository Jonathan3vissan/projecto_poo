class Usuario {
    #nombre = "def nombre"
    #mail = "def mail";
    #telefono = "0";
    constructor(nombre, mail, telefono) {
        this.#nombre = nombre;
        this.#mail = mail;
        this.#telefono = telefono;
    }
    /**
     * @returns el nombre del usuario
     */
    getNombre() {
        return this.#nombre
    }
    /**
     * @returns el mail del usuario
     */
    getMail() {
        return this.#mail
    }
    /**
     * @returns el telefono del usuario
     */
    getTelefono() {
        return this.#telefono
    }
/**
 * @returns envia los dato del usuario
 */
  

    
}
module.exports = Usuario;