const GeneradorID = require("./GeneradorID");

const IDcreado = new GeneradorID();

console.log(IDcreado.generarHash());
console.log(IDcreado.getID());
