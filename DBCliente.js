const Cliente = require("./Cliente");
const GeneradorID = require("./GeneradorID");
const GestorArchivoTXT = require("./GestorArchivoTXT");

class DBCliente {
    #clienteNuevo = "def cliente"

    /**
     * @returns el cliente con toda su informacion
     */
    getClienteNuevo() {
        return this.#clienteNuevo
    }

    /**
     * uniuficar la informacio para ser guardada
     * @param {Cliente} cliente datos  
     * @param {GestorArchivoTXT} gestor guarda la info en el txt
     * @param {GeneradorID} generadorID crea un id para el cliente
     */
    guardarClienteDB(cliente, gestor, generadorID) {
       let clienteNuevo={};
       clienteNuevo.nombre=cliente.getNombre();
       clienteNuevo.mail=cliente.getMail();
       clienteNuevo.telefono=cliente.getTelefono()
       clienteNuevo.IDCliente = generadorID.getID();
       gestor.agregarDatoDe(JSON.stringify(clienteNuevo))
       this.#clienteNuevo = clienteNuevo
       
       
       //let infoGuardar = "DEf";
       
       //infoGuardar = cliente.enviarInfoCliente();

    }




}
module.exports = DBCliente;