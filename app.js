const Agenda = require("./Agenda");
const Cliente = require("./Cliente");
const DBUsuario = require("./DBUsuarios");
const GestorArchivoTexto = require("./GestorArchivoTexto");
const Reserva = require("./Reserva");

const usuario = new Cliente("juan", "mail@got", "12356");
const perosna2 = new Cliente("esteban", "ete@pintor", "456789123")
const DB = new DBUsuario()
const GESTION_ARCH = new GestorArchivoTexto();
const agendados = new Agenda();
const fecha = new Date();
const hora = new Date(fecha.getTime() + 5000);
const reservas = new Reserva(fecha, hora);

console.log("este muestras metodo db \n", DB.agregarIDClienteA(usuario));
console.log("este muestras metodo db \n", DB.agregarIDClienteA(perosna2));


console.log(usuario.getIDCliente(), "\n");
console.log(perosna2.getIDCliente(), "\n");



console.log("hasta era lo que funciono peola ", usuario.getNombre()); //hastqa funciona que moficque el idcliente y  se lo agrege al obejto a guardar en la txt
console.log(perosna2.getNombre());


console.log("esto se refiere a agregar el archivo y hacer el mostra el registro de get DE BDREGISTRO", DB.getNuevoRegistro(), "funciona bien\n");

console.log("aca esta envidanco datos con DB  ESTE DEBERIA MOSTRAR EL ENVIAR DATOS \n", DB.enviarDatosClienteA(GESTION_ARCH));


console.log("DEBERIA MOSTRAR LAS RESERVAS",reservas.getReservas());
console.log("DEBERIA MOSTRAR LAS AGENDA",agendados.getAgendados());












