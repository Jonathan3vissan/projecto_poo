class DBCliente {


    /**
     * uniuficar la informacio para ser guardada
     * @param {*} cliente datos  
     * @param {*} gestor guarda la info en el txt
     * @param {*} generadorID crea un id para el cliente
     */
    guardarClienteDB(cliente, gestor, generadorID) {
        let infoGuardar = "DEf";
        infoGuardar = cliente.enviarInfoCliente();
        infoGuardar.IDCliente = generadorID.getID();
        gestor.agregarDatoDe(JSON.stringify(infoGuardar))
    }




}
module.exports = DBCliente;