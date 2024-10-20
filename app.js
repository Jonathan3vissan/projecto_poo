const Cliente = require("./Cliente");
const DBCliente = require("./DBCliente");
const GeneradorID = require("./GeneradorID");
const GestorArchivoTXT = require("./GestorArchivoTXT");
//------------instancias necesarias-----------------
const persona = new Cliente("Leonal", "lewo@hot", "12456789")
const id_generador = new GeneradorID();
const base_datos = new DBCliente();
const gestor_txt = new GestorArchivoTXT();



//--------------prueba de app-----------

console.log(id_generador.getID());
base_datos.guardarClienteDB(persona, gestor_txt, id_generador)





