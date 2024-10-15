const Agenda = require("./Agenda");
const Cliente = require("./Cliente");
const Reserva = require("./Reserva");
const Usuario = require("./Usuario");

const usuario = new Usuario("juna", "mail@got", "12356");
const reserva = new Reserva();
const agenda = new Agenda();
const cliente = new Cliente()
console.log(cliente.generadorID());




