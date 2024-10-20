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
    agregarIDClienteA(cliente) {
        let dato = "def";
        let idGenerado = "def id db"
        idGenerado = this.generadorID()
        cliente.modificarIDClienteCon(idGenerado)
        dato = cliente.enviarInforamcionA()
        
        this.#nuevoRegistro.push(dato)
        return dato
    }

    /**
     * envia todos los datos del cliente para que sea guardados en una base de datos
     * @param {*} gestionArchivo 
     */
    enviarDatosClienteA(gestionArchivo) {
        const contenido = this.#nuevoRegistro.map(registro => JSON.stringify(registro)).join('\n');
        gestionArchivo.agregarContenido(contenido);
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