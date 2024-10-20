const Cliente = require("./Cliente");
const DBUsuario = require("./DBUsuarios");
const GestorArchivoTexto = require("./GestorArchivoTexto");
const Reserva = require("./Reserva");

const usuario = new Cliente("juan", "mail@got", "12356");
const DB = new DBUsuario()
const GESTION_ARCH = new GestorArchivoTexto();


console.log("este muestras metodo db \n", DB.agregarIDClienteA(usuario));
console.log(usuario.getIDCliente(), "\n");
console.log("hasta era lo que funciono peola ", usuario.getNombre()); //hastqa funciona que moficque el idcliente y  se lo agrege al obejto a guardar en la txt

console.log("esto se refiere a agregar el archivo y hacer el mostra el registro de get", DB.getNuevoRegistro(), "funciona bien\n");

console.log(DB.enviarDatosClienteA(GESTION_ARCH));

const fecha = new Date();
const hora = new Date(fecha.getTime() + 5000);
const reservas = new Reserva(fecha, hora);

console.log(reservas.getReservas());










