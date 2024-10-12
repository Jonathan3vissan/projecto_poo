const Agenda = require("./Agenda");
const Reserva = require("./Reserva");
const Usuario = require("./Usuario");

const usuario = new Usuario("juan", "juan@corte", "1122445566");
const reserva = new Reserva("12/02", "13 PM")
const agenda = new Agenda()



console.log(usuario.getNombre());




reserva.turnoEn(agenda, usuario.getNombre(), usuario.getMail(),)



reserva.turnoEn(agenda, usuario.getNombre(), usuario.getMail(),)
reserva.turnoEn(agenda, usuario.getNombre(), usuario.getMail(),)
reserva.turnoEn(agenda, usuario.getNombre(), usuario.getMail(),)
reserva.turnoEn(agenda, usuario.getNombre(), usuario.getMail(),)

console.log(agenda.getReservas());
