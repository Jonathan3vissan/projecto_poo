const fs = require('fs');
class DBUsuario {
    #nuevoRegistro = [];
    #direccionArchivo = path.join(__dirname, './usuarioRegistro/registros.txt')

    /**
     * direccion donde se guarda el archivo txt 
     */
    getDireccionArchivo() {
        return this.#direccionArchivo
    }
    /**
     * agrega el registro del cleinte a  un txt
     * @param {*} cliente 
     */
    agregarResgistroDe(cliente) {
        let datosRecibidos = "def";
        datosRecibidos = cliente.enviarDatos()
        this.#nuevoRegistro.push(datosRecibidos)
        this.guardarDatosTXTDe(datosRecibidos)
    }



    /**
     * crea un archivo txt donde se guarda la info de los usuario que ya esta registrados
     * @param {String} datos a ingresar en el archivo
     */
    guardarDatosTXTDe(datos) {
        fs.appendFile(this.getDireccionArchivo(), datos + '\n', (err) => {
            if (err) {
                console.error('Error al agregar datos:', err);
            } else {
                console.log('Datos agregados correctamente.');
            }
        });
    }



}
module.exports = DBUsuario;