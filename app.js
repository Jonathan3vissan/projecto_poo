const Cliente = require("./Cliente");
const GeneradorID = require("./GeneradorID");

const IDcreado = new GeneradorID();
const persona =new Cliente("Leonal","lewo@hot","12456789")

console.log(IDcreado.getID());
