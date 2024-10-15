const Usuario = require("./Usuario");

class Cliente  extends Usuario{
#IDcliente="def IDcliente"


/**
 * @returns el id del cliente
 */
getIDCliente(){
    return this.#IDcliente
}


 /**
     * @returns un identificar unico para usuario
     */
 generadorID() {
const idUnico = crypto.randomUUID();
console.log("ID único generado:", idUnico);

return idUnico
}



}
module.exports=Cliente;