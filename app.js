const Agenda = require("./Agenda");
const DBUsuario = require("./DBUsuarios");
const Reserva = require("./Reserva");
const Usuario = require("./Usuario");

const usuario = new Usuario("juna", "mail@got", "12356");
const reserva = new Reserva();
const agenda = new Agenda();
const DB = new DBUsuario()
console.log(DB.generadorID());




