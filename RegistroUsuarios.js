const fs = require('fs');
class RegistrosUsuarios {
    #nuevoRegistro = [];

    static REGISTROS_USUARIOS = path.join(__dirname, './usuarioRegistro', 'registros.txt')



    agregarResgistroDe(cliente) {
        let datosRecibidos = "def";
        datosRecibidos = cliente.enviarDatos()
        this.#nuevoRegistro.push(datosRecibidos)
        this.guardarDatosTXTDe(datosRecibidos)
    }



    /**
     * crea un archivo txt donde se guarda la info de los usuario que ya esta registrados
     * @param {*} REGISTROS_USUARIOS direccion de la archivo .txt 
     * @param {String} datos a ingresar en el archivo
     */
    guardarDatosTXTDe(REGISTROS_USUARIOS, datos) {
        fs.appendFile(REGISTROS_USUARIOS, datos + '\n', (err) => {
            if (err) {
                console.error('Error al agregar datos:', err);
            } else {
                console.log('Datos agregados correctamente.');
            }
        });
    }



}
module.exports = RegistrosUsuarios;