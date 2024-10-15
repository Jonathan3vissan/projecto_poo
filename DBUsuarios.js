const fs = require('fs');
class DBUsuario {
    #nuevoRegistro = [];
    #IDRegistro = "def ID"

    /**
     * @returns ID generado para el registro de  cliente
     */
    getIDRegistro() {
        return this.#IDRegistro
    }

    /**
     * agrega el registro del cleinte a  un txt
     * @param {*} cliente 
     */

    agregarResgistroDe(cliente) {
        let dato = "def";
        let idGenerado = "def id db"
        idGenerado = this.generadorID()
        dato = cliente.enviarInforamcionA()
        cliente.modificarIDClienteCon(idGenerado)
        dato.IDCliente = idGenerado
        return dato

    }


    /**
        * @returns un identificar unico
        */
    generadorID() {
        const idUnico = crypto.randomUUID();
        console.log("ID único generado:", idUnico);
        return idUnico
    }




}
module.exports = DBUsuario;