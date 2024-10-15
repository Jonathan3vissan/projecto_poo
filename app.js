const Agenda = require("./Agenda");
const Reserva = require("./Reserva");
const Usuario = require("./Usuario");

const usuario = new Usuario("juna", "mail@got", "12356");
const reserva = new Reserva();
const agenda = new Agenda();

reserva.tomarDatosParaReservaDe(usuario, agenda)


console.log("reserva:",reserva.getReservas());

console.log("agendados:",agenda.getAgendados());

