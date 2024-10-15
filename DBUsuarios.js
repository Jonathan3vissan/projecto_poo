const fs = require('fs');
class DBUsuario {
    #nuevoRegistro = [];

    /**
     * @returns ID generado para el registro de  cliente
     */
    getNuevoRegistro() {
        return this.#nuevoRegistro
    }



    /**
     * agrega al cliente el ID generado para ser indentificado 
     * @param {*} cliente sus datos
     * @returns cliente con IDmodifacado
     */
    completarInfoCliente(cliente) {
        let dato = "def";
        let idGenerado = "def id db"
        idGenerado = this.generadorID()
        cliente.modificarIDClienteCon(idGenerado)
        dato = cliente.enviarInforamcionA()
        this.#nuevoRegistro.push(dato)
        return dato
    }

    enviarDatosClienteA(gestioArchivo) {
        const contenido = this.#nuevoRegistro.map(registro => JSON.stringify(registro)).join('\n');
        gestioArchivo.agregarContenido(contenido);
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