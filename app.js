const Agenda = require("./Agenda");
const Cliente = require("./Cliente");
const DBCliente = require("./DBCliente");
const GeneradorID = require("./GeneradorID");
const GestorArchivoTXT = require("./GestorArchivoTXT");
const Reserva = require("./Reserva");
//------------instancias necesarias-----------------
const persona = new Cliente("Brad Pit", "brat@hot", "14556789")
const id_generador = new GeneradorID();
const base_datos = new DBCliente();
const gestor_txt = new GestorArchivoTXT();
const reservas = new Reserva()
const agendados = new Agenda();


//--------------prueba de app-----------

console.log(id_generador.getID());
base_datos.guardarClienteDB(persona, gestor_txt, id_generador)
reservas.solicitarInfoA(base_datos, agendados)
console.log("agendado", agendados.getAgendados());






