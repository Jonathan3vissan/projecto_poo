const crypto = require('crypto');
class GeneradorID {
    #ID = "def ID"
    #tamanioID = 10;
    /**
     * @returns ID generado
     */
    getID() {
        return this.#ID
    }
    /**
     *@returns  hash de tamanio de 10 caracteres
     */
    generarHash() {
        const randomInput = Math.random().toString();
        const hash = crypto.createHash('sha256');
        hash.update(randomInput);
        const fullHash = hash.digest('hex');
        return this.#ID = fullHash.substring(0, this.#tamanioID);
    }
}
module.exports = GeneradorID;